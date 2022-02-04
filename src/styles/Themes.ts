import { gray_900, primary, secondary, white } from "./Colors";

export interface ITheme {
  background: string;
  primary: string;
  secondary: string;
  text: string;
}

export const darkTheme: ITheme = {
  background: gray_900,
  primary: primary,
  secondary: secondary,
  text: white,
};
