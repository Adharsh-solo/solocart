const products = [
  {
    id: 1,
    name: "Deconstruct Sunscreen - SPF 50 PA++++",
    originalPrice: 349,
    offerPrice: 298,
    discount: 15,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sunscreen/r/5/r/50-lightweight-gel-sunscreen-in-vivo-tested-non-greasy-for-men-original-imahmw29gwjhbkt5.jpeg?q=90",
    link: "https://fktr.in/aNYfmh7",
    category: "Beauty"
  },
  {
    id: 2,
    name: "Ghar Soaps Magic Face Wash",
    originalPrice: 333,
    offerPrice: 255,
    discount: 23,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/face-wash/h/r/v/-enriched-transparent-original-imahn6zr2j3hzduj.png?q=90",
    link: "https://fktr.in/YomAVan",
    category: "Beauty"
  },
  {
    id: 3,
    name: "DOT & KEY Barrier Repair + Hydrating Gentle Face Wash ",
    originalPrice: 249,
    offerPrice: 192,
    discount: 23,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/face-wash/o/f/l/100-barrier-repair-hydrating-with-probiotic-ceremide-cleanses-original-imahb3k6zagvyhyc.jpeg?q=90",
    link: "https://fktr.in/eiRBEPf",
    category: "Beauty"
  },
  {
    id: 4,
    name: "Livon Shampoo For Men and Women",
    originalPrice: 770,
    offerPrice: 263,
    discount: 66,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shampoo/g/o/i/-original-imahf9gqfktkzfde.jpeg?q=90",
    link: "https://fktr.in/d9PJPbc",
    category: "Beauty"
  },
  {
    id: 5,
    name: "KAJARU Pack of 2 Men Self Design Zip Neck Polyester Black, Brown T-Shirt",
    originalPrice: 1299,
    offerPrice: 480,
    discount: 63,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/t-shirt/k/l/e/5xl-polo-8014-kajaru-original-imahzavxewwhgn3h.jpeg?q=90",
    link: "https://fktr.in/1CNEorI",
    category: "Men's wear"
  },
  {
    id: 6,
    name: "Force Pack of 3 Men Printed Round Neck Cotton Blend Multicolor T-Shirt",
    originalPrice: 1999,
    offerPrice: 505,
    discount: 75,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/t-shirt/a/9/d/xl-fmt156-223-432-combo-force-original-imahmqpar5eqhytd.jpeg?q=90",
    link: "https://fktr.in/q6lhRqn",
    category: "Men's wear"
  },
  {
    id: 7,
    name: "comfits Men Loose Fit Mid Rise Grey Jeans",
    originalPrice: 1299,
    offerPrice: 461,
    discount: 65,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shopsy-jean/r/a/4/34-220-bg-179-comfits-original-imahh8nxfbfqyzyd.jpeg?q=90",
    link: "https://fktr.in/H6cQwSx",
    category: "Men's wear"
  },
  {
    id: 8,
    name: "Gudwear Casual Roll Up Sleeves Printed Women Black Top",
    originalPrice: 1499,
    offerPrice: 289,
    discount: 81,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/h/k/7/l-gw1049-top-gudwear-original-imagxx2zjgqyahhr.jpeg?q=90",
    link: "https://fktr.in/7fmv9GL",
    category: "Women's wear"
  },
  {
    id: 9,
    name: "RR SA KURTIS Casual Regular Sleeves Embroidered Women Beige Top",
    originalPrice: 1599,
    offerPrice: 256,
    discount: 84,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/o/c/o/l-1-128-rr-sa-kurtis-original-imahmb647eupyapy.jpeg?q=90",
    link: "https://fktr.in/Zs3XMPV",
    category: "Women's wear"
  },
  {
    id: 10,
    name: "H&H Women Baggy Fit High Rise Green Jeans",
    originalPrice: 2999,
    offerPrice: 747,
    discount: 75,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/n/j/i/32-mt-hh-8037-spring-blue-32-h-h-original-imahhnbweknuvzgf.jpeg?q=90",
    link: "https://fktr.in/1dmHJ12",
    category: "Women's wear"
  },
  {
    id: 11,
    name: "asian Lifestyle-02 Men’s Sneakers",
    originalPrice: 1599,
    offerPrice: 687,
    discount: 57,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/z/o/j/7-lifestyle-02-7-asian-beige-mouse-original-imahgcqkbm77facm.jpeg?q=90",
    link: "https://fktr.in/3FOY738",
    category: "Men's Sneakers"

  },
  {
    id: 12,
    name: "leo's Fitness shoes Leo Fitness AquaSport Durable Waterproof Shoes for Outdoor Activities",
    originalPrice: 2899,
    offerPrice: 990,
    discount: 66,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/m/5/r/7-2988greyblk-7-leo-s-fitness-shoes-grey-black-original-imahgpmnfrshruq5.jpeg?q=90",
    link: "https://fktr.in/4HyFqim",
    category: "Men's Sneakers"

  },
  {
    id: 13,
    name: "Layasa Colorblock Flat Sneakers with Ultra Soft Cushion Lace-Up All-Day Comfort Shoes",
    originalPrice: 999,
    offerPrice: 483,
    discount: 52,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/v/a/o/8-rl1517-8-rowlans-white-original-imahjnu3anfhsutg.jpeg?q=90",
    link: "https://fktr.in/verDwH7",
    category: "Women's Sneakers"

  },
  {
    id: 14,
    name: "Layasa New Attractive Lightweight Sneakers For Women ",
    originalPrice: 999,
    offerPrice: 480,
    discount: 52,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/shopsy-shoe/5/f/c/5-lds1054-38-grevon-white-gold-original-imahmz9vhfbaekgh.jpeg?q=90",
    link: "https://fktr.in/TUEeZEc",
    category: "Women's Sneakers"

  },
];

export default products;
