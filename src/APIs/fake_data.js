const fakeData = [
  {
    id: "SL3KH3KFID",
    name: "JACKET001",
    price: "199",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["yellow", "black"],
    stocks: "21",
    type: "3",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107268jpg_470x.jpg?v=1515606838",
    description: "COOL JACKET"
  },
  {
    id: "LEO3K3H5KD",
    name: "TOP001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black"],
    stocks: "10",
    type: "1",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/untitled-9654-2_470x.jpg?v=1523642653",
    description: "COOL SHIRT"
  },
  {
    id: "DJ4H5H3K3K",
    name: "BOTTOM001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "pink"],
    stocks: "0",
    type: "2",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107213jpg_470x.jpg?v=1508819377",
    description: "COOL PANTS"
  },
  {
    id: "K3JFH3JFJGL",
    name: "EARRING001",
    price: "65",
    sizes: ["ONE SIZE"],
    colors: ["GOLD"],
    stocks: "5",
    type: "4",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/Face_Drop_Earrings_470x.JPG?v=1518932078",
    description: "COOL EARRING"
  },
  {
    id: "SL3KH3KFIE",
    name: "JACKET001",
    price: "199",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["yellow", "black"],
    stocks: "21",
    type: "3",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107268jpg_470x.jpg?v=1515606838",
    description: "COOL JACKET"
  },
  {
    id: "LEO3K3H5KC",
    name: "TOP001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black"],
    stocks: "10",
    type: "1",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/untitled-9654-2_470x.jpg?v=1523642653",
    description: "COOL SHIRT"
  },
  {
    id: "DJ4H5H3K3P",
    name: "BOTTOM001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "pink"],
    stocks: "0",
    type: "2",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107213jpg_470x.jpg?v=1508819377",
    description: "COOL PANTS"
  },
  {
    id: "K3JFH3JFJGT",
    name: "EARRING001",
    price: "65",
    sizes: ["ONE SIZE"],
    colors: ["GOLD"],
    stocks: "5",
    type: "4",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/Face_Drop_Earrings_470x.JPG?v=1518932078",
    description: "COOL EARRING"
  },
  {
    id: "SL3KH3KFI3",
    name: "JACKET001",
    price: "199",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["yellow", "black"],
    stocks: "21",
    type: "3",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107268jpg_470x.jpg?v=1515606838",
    description: "COOL JACKET"
  },
  {
    id: "LEO3K3H5KDS",
    name: "TOP001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black"],
    stocks: "10",
    type: "1",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/untitled-9654-2_470x.jpg?v=1523642653",
    description: "COOL SHIRT"
  },
  {
    id: "DJ4H5H3K30",
    name: "BOTTOM001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "pink"],
    stocks: "0",
    type: "2",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107213jpg_470x.jpg?v=1508819377",
    description: "COOL PANTS"
  },
  {
    id: "K3JFH3JFJG1",
    name: "EARRING001",
    price: "65",
    sizes: ["ONE SIZE"],
    colors: ["GOLD"],
    stocks: "5",
    type: "4",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/Face_Drop_Earrings_470x.JPG?v=1518932078",
    description: "COOL EARRING"
  },
  {
    id: "SL3KH3KFI2",
    name: "JACKET001",
    price: "199",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["yellow", "black"],
    stocks: "21",
    type: "3",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107268jpg_470x.jpg?v=1515606838",
    description: "COOL JACKET"
  },
  {
    id: "LEO3K3H5K3",
    name: "TOP001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black"],
    stocks: "10",
    type: "1",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/untitled-9654-2_470x.jpg?v=1523642653",
    description: "COOL SHIRT"
  },
  {
    id: "DJ4H5H3K3T",
    name: "BOTTOM001",
    price: "165",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "pink"],
    stocks: "0",
    type: "2",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/1508107213jpg_470x.jpg?v=1508819377",
    description: "COOL PANTS"
  },
  {
    id: "K3JFH3JFJGA",
    name: "EARRING001",
    price: "65",
    sizes: ["ONE SIZE"],
    colors: ["GOLD"],
    stocks: "5",
    type: "4",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/1004/4558/products/Face_Drop_Earrings_470x.JPG?v=1518932078",
    description: "COOL EARRING"
  }
];

export default fakeData;
