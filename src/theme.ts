export const BASE_COLORS = {
  // Black/White
  white: "#FFF",
  black: "#000",
  lynxWhite: "#fefefe",

  // grey
  lighterGrey: "#F7F7F7",
  lightGrey: "#e9e9e9",
  slightLightGray: "#b7b7b7",
  grey: "#757575",

  // Blue
  deepSkyBlue: "#00AEFF",
  lighterBlue: "#f8fdff",
  lightBlue: "#e0f5ff",
  skyBlue: "#00CAFF",
  navyBlue: "#026495",

  // Green
  treeGreen: "#2DC76D",

  // Orange
  orange: "#FC522A",
};

export const FONT_SIZES = {
  caption: "0.8333rem",
  button: "1.667rem",
  body: "13px",
  text: "14px",
  large: "15px",
  h6: "1.2rem",
  h5: "1.4rem",
  h4: "1.7rem",
  h3: "2.2rem",
  h2: "2.5rem",
  h1: "3rem",
  xl: "3.5rem",
};

export const LINE_HEIGHTS = {
  disclaimer: "0.9184rem",
  caption: "1.0625rem",
  button: "1.1875rem",
  body: "1.3125rem",
  h6: "1.375rem",
  h5: "1.500rem",
  h4: "1.6875rem",
  h3: "1.8125rem",
  h2: "2rem",
  h1: "2.1875rem",
  li: "3.429rem",
  textField: "1.619",
};

export const FONT_WEIGHTS = {
  normal: "500",
  bold: "700",
};

export const FONTS = {
  primary: "Lato",
};

export const defaultTheme = {
  colors: {
    ...BASE_COLORS,
  },
  fontWeights: {
    ...FONT_WEIGHTS,
  },
  fontSizes: {
    ...FONT_SIZES,
  },
  lineHeights: { ...LINE_HEIGHTS },
  fontFamily: {
    ...FONTS,
  },
};
