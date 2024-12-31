import {
  categoryTypes,
  productCardType,
  topSellingProducts,
  voucherTypes,
} from "@muc/types";

export const PRODUCT_CARD: productCardType[] = [
  {
    id: 1,
    poster: "/assets/images/cardImg1.svg",
    title: "HAVIT HV GAMEPAD",
    stock: "In Stock",
    newPrice: 120,
    oldPrice: 160,
    category: "Dresses",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 4.5,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
  },
  {
    id: 2,
    poster: "/assets/images/cardImg2.svg",
    title: "AK WIRED KEYBOARD",
    stock: "In Stock",
    newPrice: 960,
    oldPrice: 1000,
    category: "Gaming",
    description:
      "This component is tailored to match your in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.6,
    size: ["XS", "SM", "M", "L"],
    colors: ["red", "yellow", "pink"],
  },
  {
    id: 3,
    poster: "/assets/images/cardImg3.svg",
    title: "GAMING MANITOR",
    stock: "Out of Stock",
    newPrice: 1150,
    oldPrice: 1440,
    category: "Shirts",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. ",
    ratingValue: 5,
    size: ["XS", "SM", "M", "XL"],
    colors: ["red", "blue", "yellow"],
  },
  {
    id: 4,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    stock: "Out of Stock",
    newPrice: 375,
    oldPrice: 540,
    category: "Headphone",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!aflkja dfaldf aldkjfl;akjflka",
    ratingValue: 3.4,
    size: ["SM", "M", "L", "XL"],
    colors: ["red", "yellow", "pink"],
  },
  {
    id: 5,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    stock: "In Stock",
    newPrice: 375,
    oldPrice: 540,
    category: "Computer",
    description:
      "provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["blue", "yellow", "pink"],
  },
  {
    id: 6,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    stock: "In Stock",
    newPrice: 375,
    oldPrice: 540,
    category: "Computer",
    description:
      "This component is tailored to match yourFigma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
    size: ["XS", "L", "XL"],
    colors: ["red", "blue", "pink"],
  },
  {
    id: 7,
    poster: "/assets/images/cardImg1.svg",
    title: "COMFORT CHAIR",
    stock: "Out of Stock",
    newPrice: 375,
    oldPrice: 540,
    category: "SmartWatch",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue"],
  },
  {
    id: 8,
    poster: "/assets/images/cardImg2.svg",
    title: "AK WIRED KEYBOARD",
    stock: "Out of Stock",
    newPrice: 960,
    oldPrice: 1000,
    category: "Phone",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know",
    ratingValue: 3.6,
    size: ["XS", "XL"],
    colors: ["blue", "yellow"],
  },
];

export const PRODUCT_CATEGORIES: categoryTypes[] = [
  {
    img: "/assets/icons/CellPhone.svg",
    title: "Phone",
  },
  {
    img: "/assets/icons/Computer.svg",
    title: "Computers",
  },
  {
    img: "/assets/icons/SmartWatch.svg",
    title: "SmartWatch",
  },
  {
    img: "/assets/icons/Camera.svg",
    title: "Camera",
  },
  {
    img: "/assets/icons/Headphone.svg",
    title: "HeadPhones",
  },
  {
    img: "/assets/icons/Gamepad.svg",
    title: "Gaming",
  },
];

export const TOP_SELLING_PRODUCTS: topSellingProducts[] = [
  {
    id: 1,
    poster: "/assets/images/topselling1.svg",
    title: "HAVIT HV GAMEPAD",
    newPrice: 120,
    oldPrice: 160,
    category:"Electronics",
    stock: "In Stock",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 4.5,
     size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
  },
  {
    id: 2,
    poster: "/assets/images/topselling2.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    category:"Phone",
    stock: "Out of Stock",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.6,
     size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
  },
  {
    id: 3,
    poster: "/assets/images/topselling3.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    category:"Gaming",
    stock: "In Stock",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 5,
     size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
  },
  {
    id: 4,
    poster: "/assets/images/topselling4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    category:"SmartWatch",
    stock: "In Stock",
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
     size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
  },
];

export const EXPLORE_OUR_PRODUCTS: productCardType[] = [
  {
    id: 1,
    poster: "/assets/images/explore1img.svg",
    title: "HAVIT HV GAMEPAD",
    newPrice: 120,
    oldPrice: 160,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 4.5,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
    stock: "Out of Stock",
    category: "Phone",
  },
  {
    id: 2,
    poster: "/assets/images/explore2img.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.6,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
    stock: "In Stock",
    category: "Computer",
  },
  {
    id: 3,
    poster: "/assets/images/explore3img.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 5,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
    stock: "In Stock",
    category: "Gampad",
  },
  {
    id: 4,
    poster: "/assets/images/explore4img.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
    size: ["XS", "SM", "M", "L", "XL"],
    colors: ["red", "blue", "yellow", "pink"],
    stock: "Out of Stock",
    category: "Camera",
  },
];

export const OFFER_VOUCHER: voucherTypes[] = [
  {
    id: 1,
    categories: "Mobile",
    categoryDescription: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    poster: "/assets/images/offerImg1.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 2,
    categories: "GamePad",
    categoryDescription: "Gamepad 14 Series MAC",
    title: "Up to 20% off Voucher",
    poster: "/assets/images/cardImg1.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 3,
    categories: "furniture",
    categoryDescription: "Best Furniture Series",
    title: "Up to 10% off Voucher",
    poster: "/assets/images/explore3img.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 4,
    categories: "shopping",
    categoryDescription: "Online Shopping Mart",
    title: "Up to 30% off Voucher",
    poster: "/assets/images/explore2img.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 5,
    categories: "keyboard",
    categoryDescription: "Lighting Gaming Keyboard",
    title: "Up to 50% off Voucher",
    poster: "/assets/images/cardImg2.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
];

export const ABOUT_DELIVERY_SERVICES = [
  {
    icon: "assets/icons/deliveryWhite-icon.svg",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "assets/icons/customer-icon.svg",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: "assets/icons/secure-icon.svg",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export const ABOUT_ANALYTIC_SERVICES = [
  {
    icon: "assets/icons/shopping-icon.svg",
    title: "10.5k ",
    description: "Sallers active our site",
  },
  {
    icon: "assets/icons/giftDoller-icon.svg",
    title: "33k",
    description: "Monthly Produduct Sale",
  },
  {
    icon: "assets/icons/shoppingBag-icon.svg",
    title: "45.5k",
    description: "Customer active in our site",
  },
  {
    icon: "assets/icons/giftDoller-icon.svg",
    title: "25k ",
    description: "Anual gross sale in our site",
  },
];

export const MY_TEAM_MEMBER = [
  {
    img: "assets/images/team1.svg",
    name: "Tom Cruise",
    title: "Founder & Chairman",
  },
  {
    img: "assets/images/team2.svg",
    name: "Emma Watson",
    title: "Managing Director",
  },
  {
    img: "assets/images/team3.svg",
    name: "Will Smith",
    title: "Product Designer",
  },
  {
    img: "assets/images/team2.svg",
    name: "Emma Watson",
    title: "Managing Director",
  },
  {
    img: "assets/images/team1.svg",
    name: "Tom Cruise",
    title: "Founder & Chairman",
  },
];
