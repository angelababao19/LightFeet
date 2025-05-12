let col_btn = document.querySelectorAll(".btn-col");
let col_item = document.querySelectorAll(".collection-item");
 
col_btn.forEach((btn,index)=>{
    btn.addEventListener("click",(e)=>{
        col_btn.forEach((col_bt,ind)=>{
            col_bt.classList.remove("btn");
        })
        e.target.classList.add("btn");
        let data_btn = btn.getAttribute("data-btn");
        col_item.forEach((col,inde)=>{
            if(col.getAttribute("data-item")==data_btn || data_btn == "all"){
                col.classList.remove("hide")
            }else{
                col.classList.add("hide");
            }
        })
    })
})


let ul = document.querySelector("ul");
let burger_icon = document.querySelector(".burger_icon");

burger_icon.addEventListener("click",()=>{
    if(burger_icon.classList.contains("fa-bars")){
        burger_icon.classList.add("fa-xmark");
        burger_icon.classList.remove("fa-bars");
        ul.classList.add("active");
    }
    else{
        burger_icon.classList.remove("fa-xmark");
        burger_icon.classList.add("fa-bars");
        ul.classList.remove("active");
    }
})

const productContainer = document.querySelector(".product-list");
const isProductDetailPage = document.querySelector(".product-detail");
const isCartPage = document.querySelector(".cart");

if (productContainer) {
    if (document.getElementById("new")) {
        displayProducts("all", 3); 
    } else {
        displayProducts("all");
    }
    setupFilterButtons();
} else if (isProductDetailPage) {
    displayProductDetail();
} else if (isCartPage) {
    displayCart();
}

function displayProducts(category = "all", limit) {
    productContainer.innerHTML = ""; 

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    const productsToDisplay = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <div class="col" data-aos="zoom-in-up">
            <div class="img-box">
                <img src="${product.colors[0].mainImage}" alt="${product.title}">
            </div>
            <div class="col-body">
                <p class="rating-icon"><i class="fa-solid fa-star"></i> <span class="rating-num">4.9</span></p>
                <h2 class="title">${product.title}</h2>
                <p class="sub-heading">HOKA for ${product.category}</p>
                <div class="col-footer">
                    <span class="price">${product.price}</span>
                    <button class="shoe-btn btn">buy now</button>
                </div>
            </div>
        </div>
        `;
        productContainer.appendChild(productCard);

        const imgBox = productCard.querySelector(".img-box");
        const buyNowBtn = productCard.querySelector(".shoe-btn");

        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });

        buyNowBtn.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
    });
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll(".btn-col");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-btn");
            console.log("Clicked category:", category);
            displayProducts(category);
        });
    });
}

function displayProductDetail(){
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));

    const titleEl = document.querySelector(".title");
    const priceEl = document.querySelector(".price");
    const descriptionEl = document.querySelector(".description");
    const mainImageContainer = document.querySelector(".main-img");
    const thumbnailContainer = document.querySelector(".thumbnail-list");
    const colorContainer = document.querySelector(".color-options");
    const sizeContainer = document.querySelector(".size-options");
    const addToCartBtn = document.querySelector("#add-cart-btn");

    let selectedColor = productData.colors[0];
    let selectedSize = selectedColor.sizes[0];

    function updatedProductDisplay(colorData){
        if(!colorData.sizes.includes(selectedSize)){
            selectedSize = colorData.sizes[0];
        }

        mainImageContainer.innerHTML = `<img src="${colorData.mainImage}">`;

        thumbnailContainer.innerHTML = "";
        const allThumbnails = [colorData.mainImage].concat(colorData.thumbnails.slice(0, 3));
        allThumbnails.forEach(thumb => {
            const img = document.createElement("img");
            img.src = thumb;

            thumbnailContainer.appendChild(img);

            img.addEventListener("click", () => {
                mainImageContainer.innerHTML = `<img src="${thumb}">`;
            });
        });

        colorContainer.innerHTML = "";
        productData.colors.forEach(color => {
            const img = document.createElement("img");
            img.src = color.mainImage;
            if (color.name === colorData.name) img.classList.add("selected");

            colorContainer.appendChild(img);

            img.addEventListener("click", () =>{
                selectedColor = color;
                updatedProductDisplay(color);
            });
        });

        sizeContainer.innerHTML = "";
        colorData.sizes.forEach(size => {
            const btn = document.createElement("button");
            btn.textContent = size;
            if(size === selectedSize) btn.classList.add("selected");

            sizeContainer.appendChild(btn);

            btn.addEventListener("click", () => {
                document.querySelectorAll(".size-options button").forEach(el => el.classList.remove("selected"));
                btn.classList.add("selected");
                selectedSize = size;
            });
        });

        function syncMainImgHeight() {
            const thumbnails = document.querySelector(".thumbnail-list");
            const mainImg = document.querySelector(".main-img");
        
            if (thumbnails && mainImg) {
                const height = thumbnails.offsetHeight;
                mainImg.style.height = `${height}px`;
            }
        }
        
        window.addEventListener("load", syncMainImgHeight);
        window.addEventListener("resize", syncMainImgHeight);
        
    }

    titleEl.textContent = productData.title;
    priceEl.textContent = productData.price;
    descriptionEl.textContent = productData.description;

    updatedProductDisplay(selectedColor);

    addToCartBtn.addEventListener("click", () => {
        addToCart(productData, selectedColor, selectedSize);
    });
    
}

function addToCart(product, color, size){
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === product.id && item.color === color.name && item.size === size);

    if(existingItem){
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: color.mainImage,
            color: color.name,
            size: size,
            quantity: 1
        });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();
}

function displayCart(){
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const cartItemsContainer = document.querySelector(".cart-items");
    const subtotalEl = document.querySelector(".subtotal");
    const grandTotalEl = document.querySelector(".grand-total");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        subtotalEl.textContent = "₱0";
        grandTotalEl.textContent = "₱0";
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace("₱", "")) * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="product">
                        <img src="${item.image}">
                        <div class="item-detail">
                            <p>${item.title}</p>
                            <div class="size-color-box">
                                <span class="size">${item.size}</span>
                                <span class="color">${item.color}</span>
                            </div>
                        </div>
                    </div>
                    <span class="price">${item.price}</span>
                    <div class="quantity"><input type="number" value="${item.quantity}" min="1" data-index="${index}"></div>
                    <span class="total-price">₱${itemTotal}</span>
                    <button class="remove" data-index="${index}"><i class="fa-solid fa-x"></i></button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
    grandTotalEl.textContent = `₱${subtotal.toFixed(2)}`;

    removeCartItem();
    updateCartQuantity();
}

function removeCartItem() {
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const index = this.getAttribute("data-index");
            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        });
    });
}

function updateCartQuantity() {
    document.querySelectorAll(".quantity input").forEach(input => {
        input.addEventListener("change", function () {
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const index = this.getAttribute("data-index");
            cart[index].quantity = parseInt(this.value);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        });
    });
}

function updateCartBadge(){
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector(".cart-item-count");

    if (badge) {
        if (cartCount > 0) {
            badge.textContent = cartCount;
            badge.style.display = "block";
        } else { 
            badge.style.display = "none";
        }
    }
}

updateCartBadge();

const container = document.querySelector('.contain');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});


document.querySelector(".cart .btn").addEventListener("click", () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const popupButton = document.getElementById("popupButton");
    const popupClose = document.getElementById("popupClose");

    if (cart.length === 0) {
        popupMessage.textContent = "Cart is Empty";
        popupButton.textContent = "Okay!";
    } else {
        popupMessage.textContent = "Checkout Successful";
        popupButton.textContent = "Great!";
        // Optional: Clear cart after checkout
        sessionStorage.removeItem("cart");
        displayCart();
        updateCartBadge();
    }

    popup.style.display = "flex";

    const closePopup = () => {
        popup.style.display = "none";
    };

    popupButton.onclick = closePopup;
    popupClose.onclick = closePopup;
});
