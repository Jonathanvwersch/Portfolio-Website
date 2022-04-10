import {} from "styled-components"
import { ThemeType } from "./src/styles"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
