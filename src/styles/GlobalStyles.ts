import { createGlobalStyle } from "styled-components"
import { SIZES } from "../definitions"
import { ThemeType } from "./theme"

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    a {
        text-decoration: none;
    }

    html {
        scroll-behavior: smooth !important;

        @media screen and (prefers-reduced-motion: reduce), (update: slow) {
            * {
                animation-duration: 0.001ms !important;
                animation-iteration-count: 1 !important; 
                transition-duration: 0.001ms !important;
            }
        }
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        background-color:${({ theme }) =>
          theme.colors.backgrounds.pageBackground};
        height:100%;
        width:100%;
        padding: 0px ${({ theme }) => theme.spacers.size20};
        *::-webkit-scrollbar {
            width: 8px;
            height:8px;
            cursor: auto;

        }

        /* Track */
        *::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.primary};
            cursor: auto;
            border-radius: ${({ theme }) =>
              theme.sizes.borderRadius[SIZES.MEDIUM]};
        }

        /* Handle */
        *::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.fontColor};
            cursor: auto;
            border-radius: ${({ theme }) =>
              theme.sizes.borderRadius[SIZES.MEDIUM]};
            
            &:hover: {
                background: #B6B5B2;
                cursor: pointer!important;
            }
        }


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
