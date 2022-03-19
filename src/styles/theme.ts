export type ThemeColors = {
  primary: string
  secondary: string
  danger: string
  success: string
  iconColor: string
  fontColor: string
  outline: string
  iconHover: string
  oppositeFontColor: string
  grey1: string
  grey2: string
  grey3: string
  loadingBlocks: string
  disabled: string
  selection: string
  backgrounds: {
    pageBackground: string
    modalBackground: string
  }
  hover: {
    filter: string
  }
  active: {
    filter: string
  }
}

export type ThemeType = {
  boxShadow: string

  colors: ThemeColors

  icons: {
    size: string
  }

  breakpoints: {
    small: number
    medium: number
    large: number
  }

  typography: {
    fontSizes: {
      size10: string
      size12: string
      size14: string
      size16: string
      size18: string
      size20: string
      size22: string
      size26: string
      size32: string
      size42: string
      size48: string
      size54: string
      size60: string
      size70: string
    }

    lineHeight: string
    lineHeightSmall: string
    fontFamily: string

    fontWeights: {
      light: string
      normal: string
      bold: string
    }
  }

  sizes: {
    modal: {
      small: string
      medium: string
      large: string
    }

    scrollerModal: string

    sidebar: string

    input: {
      small: string
      medium: string
      large: string
    }

    button: {
      height: {
        small: string
        medium: string
        large: string
        xLarge: string
      }
      width: {
        small: string
        medium: string
        large: string
      }
    }

    borderRadius: {
      small: string
      medium: string
      large: string
    }

    icons: {
      small: string
      medium: string
      large: string
      xLarge: string
    }

    wrappers: {
      small: string
      medium: string
      large: string
    }
  }

  spacers: {
    size4: string
    size8: string
    size12: string
    size16: string
    size20: string
    size24: string
    size32: string
    size40: string
    size48: string
    size56: string
    size64: string
    size80: string
    size96: string
    size128: string
  }
}

const lightThemeColors: ThemeColors = {
  primary: "#00B6CE",
  secondary: "#F5F5F4",
  danger: "#DB524B",
  success: "#0CCA4A",
  iconColor: "#2C2C31",
  outline: "#64FFDA",
  fontColor: "#2C2C31",
  iconHover: "rgba(60, 45, 40, 0.1)",
  oppositeFontColor: "#FFFFFFE6",
  grey1: "#A9A9A9", // dark
  grey2: "#D3D3D3", // mid
  grey3: "#EAEAEA", // light
  loadingBlocks: "#EAEAEA",
  disabled: "#D3D3D3",
  selection: "#B1FAFF",
  backgrounds: {
    pageBackground: "#FFF",
  },
  hover: {
    filter: "brightness(92%)",
  },
  active: {
    filter: "brightness(90%)",
  },
  colorPicker: {
    background: {
      default: "#FFFFFF",
      red: "#FBE4E4",
      orange: "#FAEBDD",
      yellow: "#FBF3DB",
      green: "#DDEDEA",
      blue: "#DDEBF1",
      indigo: "#EAE4F2",
      violet: "#F4DFEB",
      grey: "#EBECED",
      brown: "#E9E5E3",
    },
    text: {
      default: "#2C2C31",
      primary: "#00B6CE",
      red: "#E81123",
      orange: "#F7630D",
      yellow: "#FABD14",
      green: "#0F893E",
      blue: "#3971D1",
      indigo: "#4B0082",
      violet: "#AC008C",
      grey: "#84939A",
    },
  },
}

const darkThemeColors: ThemeColors = {
  primary: "#0094ce",
  secondary: "#474C50",
  danger: "#DB524B",
  success: "#0CCA4A",
  iconColor: "#F0F0F0",
  outline: "#64FFDA",
  fontColor: "#CCD6F6",
  iconHover: "#5C5C5C",
  oppositeFontColor: "#2C2C31",
  grey1: "#E0E0E0", // light
  grey2: "#9E9E9E", // mid
  grey3: "#616161", // dark
  loadingBlocks: "#5C5C5C",
  disabled: "#616161",
  selection: "#474C50",
  backgrounds: {
    pageBackground: "#0a192f",
    modalBackground: "#112240",
  },
  hover: {
    filter: "brightness(115%)",
  },
  active: {
    filter: "brightness(125%)",
  },
}

export const theme = (darkTheme?: boolean): ThemeType => {
  return {
    boxShadow: darkTheme
      ? "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 3px 6px, rgb(15 15 15 / 40%) 0px 9px 24px"
      : "rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 12px",

    colors: {
      ...(darkTheme ? darkThemeColors : lightThemeColors),
    },

    icons: {
      size: "16px",
    },

    breakpoints: {
      small: 480,
      medium: 768,
      large: 1100,
    },

    typography: {
      fontSizes: {
        size10: "10px",
        size12: "12px",
        size14: "14px",
        size16: "16px",
        size18: "18px",
        size20: "20px",
        size22: "22px",
        size26: "26px",
        size32: "32px",
        size42: "42px",
        size48: "48px",
        size54: "54px",
        size60: "60px",
        size70: "70px",
      },

      lineHeight: "1.6",
      lineHeightSmall: "1.4",

      fontFamily: "DM Sans, sans-serif",

      fontWeights: {
        light: "300",
        normal: "400",
        bold: "700",
      },
    },

    sizes: {
      modal: {
        small: "220px",
        medium: "380px",
        large: "500px",
      },
      scrollerModal: "272px",

      sidebar: "250px",

      input: {
        small: "32px",
        medium: "40px",
        large: "48px;",
      },

      borderRadius: {
        small: "2px",
        medium: "5px",
        large: "8px",
      },

      button: {
        height: {
          small: "32px",
          medium: "40px",
          large: "48px;",
          xLarge: "54px;",
        },
        width: {
          small: "150px",
          medium: "200px",
          large: "250px;",
        },
      },

      icons: {
        small: "18px",
        medium: "20px",
        large: "24px",
        xLarge: "28px",
      },

      wrappers: {
        small: "1200px",
        medium: "1400px",
        large: "1600px",
      },
    },

    spacers: {
      size4: "4px",
      size8: "8px",
      size12: "12px",
      size16: "16px",
      size20: "20px",
      size24: "24px",
      size32: "32px",
      size40: "40px",
      size48: "48px",
      size56: "56px",
      size64: "64px",
      size80: "80px",
      size96: "96px",
      size128: "128px",
    },
  }
}
