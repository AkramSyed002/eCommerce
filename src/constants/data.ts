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
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 4.5,
  },
  {
    id: 2,
    poster: "/assets/images/topselling2.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.6,
  },
  {
    id: 3,
    poster: "/assets/images/topselling3.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 5,
  },
  {
    id: 4,
    poster: "/assets/images/topselling4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    description:
      "This component is tailored to match your provided design and includes all the features seen in the Figma image. Let me know if you need further adjustments!",
    ratingValue: 3.4,
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
    stock:'Out of Stock'
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
    stock:'In Stock'
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
    stock:'In Stock'
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
    stock:'Out of Stock'
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
