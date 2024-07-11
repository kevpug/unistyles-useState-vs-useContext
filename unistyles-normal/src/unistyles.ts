import { UnistylesRegistry } from "react-native-unistyles";

export const dTheme = {
  colors: {
    text: "orange",
  },
} as const;
export const lTheme = {
  colors: {
    text: "red",
  },
} as const;

type AppThemes = {
  light: typeof lTheme;
  dark: typeof dTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lTheme,
  dark: dTheme,
}).addConfig({
  initialTheme: "dark",
});
