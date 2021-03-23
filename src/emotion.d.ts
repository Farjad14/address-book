import "@emotion/react";
import { BASE_COLORS, defaultTheme, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from "./emotion-theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof defaultTheme.colors;
    fontWeights: typeof defaultTheme.fontWeights;
    fontSizes: typeof defaultTheme.fontSizes;
    lineHeights: typeof defaultTheme.lineHeights;
    fontFamily: typeof defaultTheme.fontFamily;
  }
}
