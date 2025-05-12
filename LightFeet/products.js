const products = [
    {
        id: 1,
        title: "Mach 6",
        category: "Kids",
        price: "₱6795",
        description: "Delivering the same snappy ride as our adults’ style, the kids’ Mach 6 is light, fast, and undeniably comfy. A lively pavement pounder geared to go the distance and Durabrasion rubber outsole that’s thicker than our adults’ version for the extra durability your kiddos need.",
        colors: [
            {
                name: "Pink",
                mainImage: "images/products/1.png",
                thumbnails: [
                    "images/products/2.png",
                    "images/products/3.png",
                    "images/products/4.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Black",
                mainImage: "images/products/49.png",
                thumbnails: [
                    "images/products/50.png",
                    "images/products/51.png",
                    "images/products/52.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Green",
                mainImage: "images/products/53.png",
                thumbnails: [
                    "images/products/54.png",
                    "images/products/55.png",
                    "images/products/56.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            }
        ]
    },
    {
        id: 2,
        title: "Skyward X",
        category: "Women",
        price: "₱14295",
        description: "Inspired by the broken-in comfort and one-of-a-kind patina of workwear, the Elite Terrain System Collection Ora Primo merges our futuristic recovery slip-on with timeless materials like nubuck and metal rivets that only get better with age.",
        colors: [
            {
                name: "Black",
                mainImage: "images/products/5.png",
                thumbnails: [
                    "images/products/6.png",
                    "images/products/7.png",
                    "images/products/8.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            },
            {
                name: "White",
                mainImage: "images/products/9.png",
                thumbnails: [
                    "images/products/10.png",
                    "images/products/11.png",
                    "images/products/12.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            }
        ]
    },
    {
        id: 3,
        title: "Gaviota 5",
        category: "Men",
        price: "₱10995",
        description: "The Gaviota 5’s new stabilizing H-Frame™ delivers inherent stability without compromising cushioning, we’ve paired our intuitive H-Frame base with a breathable creel jacquard upper, ultra-plush collar, and Bondi-level cushioning to deliver that signature HOKA ride.",
        colors: [
            {
                name: "Black",
                mainImage: "images/products/13.png",
                thumbnails: [
                    "images/products/14.png",
                    "images/products/15.png",
                    "images/products/16.png"
                ],
                sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"]
            }
        ]
    },
    {
        id: 4,
        title: "Rocket X2",
        category: "Men",
        price: "₱16295",
        description: "The Rocket X2 has been amplified with a hyper-focus on construction. We’ve remastered the geometry of our propulsive carbon fiber plate, sandwiching it between two layers of a brand-new, ultra-responsive, high-performance foam.",
        colors: [
            {
                name: "White",
                mainImage: "images/products/17.png",
                thumbnails: [
                    "images/products/18.png",
                    "images/products/19.png",
                    "images/products/20.png"
                ],
                sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"]
            }
        ]
    },
    {
        id: 5,
        title: "Skyflow",
        category: "Men",
        price: "₱9995",
        description: "The Skyflow offers an extra cushy, springy ride, while a supportive heel-focused Active Foot Frame™ cradles the foot and a smooth forefoot rocker profile encourages effortless strides. Constructed with a sleek upper and extra durable outsole.",
        colors: [
            {
                name: "White",
                mainImage: "images/products/21.png",
                thumbnails: [
                    "images/products/22.png",
                    "images/products/23.png",
                    "images/products/24.png"
                ],
                sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"]
            }
        ]
    },
    {
        id: 6,
        title: "Challenger 7",
        category: "Men",
        price: "₱8795",
        description: "It has been the keystone of our cushioned styles for 10 years and counting. Ushering in a new era of plush performance, this next-generation update delivers a revitalized underfoot experience with an additional 3mm in heel-to-toe drop.",
        colors: [
            {
                name: "Brown",
                mainImage: "images/products/25.png",
                thumbnails: [
                    "images/products/26.png",
                    "images/products/27.png",
                    "images/products/28.png"
                ],
                sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"]
            }
        ]
    },
    {
        id: 7,
        title: "Tecton X3",
        category: "Men",
        price: "₱16995",
        description: "Ready to propel you through gnarly terrain, the Tecton X3 adds winglets to its carbon fiber plates for extra stability in just the right spots, and two layers of PEBA in the midsole—our lightest, most resilient compound.",
        colors: [
            {
                name: "Black",
                mainImage: "images/products/29.png",
                thumbnails: [
                    "images/products/30.png",
                    "images/products/31.png",
                    "images/products/32.png"
                ],
                sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"]
            }
        ]
    },
    {
        id: 8,
        title: "Kawana 2",
        category: "Women",
        price: "₱9495",
        description: "An accessible trainer that delivers a well-balanced ride, the Kawana 2 has been fine-tuned with a single-layer mesh upper, sock-like bootie, and eye row gillies for enhanced foot lockdown. Geared for lateral side-to-side movement, this go-to trainer easily shifts from street to studio with a speckled regrind midsole and gum rubber outsole.",
        colors: [
            {
                name: "Brown",
                mainImage: "images/products/33.png",
                thumbnails: [
                    "images/products/34.png",
                    "images/products/35.png",
                    "images/products/36.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            },
            {
                name: "White",
                mainImage: "images/products/37.png",
                thumbnails: [
                    "images/products/38.png",
                    "images/products/39.png",
                    "images/products/40.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            }
        ]
    },
    {
        id: 9,
        title: "Rincon 4",
        category: "Women",
        price: "₱7495",
        description: "It delivers peak plushness for everyday miles. Overhauled from top to bottom, we’ve increased the stack height and added a new premium foam midsole to deliver that soft, resilient ride that’s become synonymous.",
        colors: [
            {
                name: "Pink",
                mainImage: "images/products/41.png",
                thumbnails: [
                    "images/products/42.png",
                    "images/products/43.png",
                    "images/products/44.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            }
        ]
    },
    {
        id: 10,
        title: "Speedgoat 6",
        category: "Women",
        price: "₱9795",
        description: "The Speedgoat 6 brings the heat to speedwork. With an extra-breathable and supportive woven upper and a sleeker collar, this speed trainer keeps things light, cool, and fast for next-level efforts.",
        colors: [
            {
                name: "Black",
                mainImage: "images/products/45.png",
                thumbnails: [
                    "images/products/46.png",
                    "images/products/47.png",
                    "images/products/48.png"
                ],
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
            }
        ]
    },
    {
        id: 11,
        title: "Mach 6",
        category: "Kids",
        price: "₱6795",
        description: "Delivering the same snappy ride as our adults’ style, the kids’ Mach 6 is light, fast, and undeniably comfy. A lively pavement pounder geared to go the distance and Durabrasion rubber outsole that’s thicker than our adults’ version for the extra durability your kiddos need.",
        colors: [
            {
                name: "Black",
                mainImage: "images/products/49.png",
                thumbnails: [
                    "images/products/50.png",
                    "images/products/51.png",
                    "images/products/52.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Pink",
                mainImage: "images/products/1.png",
                thumbnails: [
                    "images/products/2.png",
                    "images/products/3.png",
                    "images/products/4.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Green",
                mainImage: "images/products/53.png",
                thumbnails: [
                    "images/products/54.png",
                    "images/products/55.png",
                    "images/products/56.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            }
        ]
    },
    {
        id: 12,
        title: "Mach 6",
        category: "Kids",
        price: "₱6795",
        description: "Delivering the same snappy ride as our adults’ style, the kids’ Mach 6 is light, fast, and undeniably comfy. A lively pavement pounder geared to go the distance and Durabrasion rubber outsole that’s thicker than our adults’ version for the extra durability your kiddos need.",
        colors: [
            {
                name: "Green",
                mainImage: "images/products/53.png",
                thumbnails: [
                    "images/products/54.png",
                    "images/products/55.png",
                    "images/products/56.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Pink",
                mainImage: "images/products/1.png",
                thumbnails: [
                    "images/products/2.png",
                    "images/products/3.png",
                    "images/products/4.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            },
            {
                name: "Black",
                mainImage: "images/products/49.png",
                thumbnails: [
                    "images/products/50.png",
                    "images/products/51.png",
                    "images/products/52.png"
                ],
                sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"]
            }
        ]
    }
];
