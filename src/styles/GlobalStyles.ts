import { createGlobalStyle } from "styled-components"
import { SIZES } from "../definitions"
import { ThemeType } from "./theme"

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    a {
        text-decoration: none;
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        background-color:${({ theme }) =>
          theme.colors.backgrounds.pageBackground};
        height:100%;
        width:100%;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        &:focus {
            outline: 0;
        }
        &:disabled {
            cursor: not-allowed;
        }
    }
   
    *::-webkit-scrollbar {
        width: 8px;
        cursor: auto;

    }

    /* Track */
    *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.grey3};
        cursor: auto;
        border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
    }

    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.grey2};
        cursor: auto;
        border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
        
        &:hover: {
            background: #B6B5B2;
            cursor: pointer!important;
        }
    }

    .public-DraftStyleDefault-ltr {
        width: 100%;
        word-break: break-word; 
    }

`

export default GlobalStyle
