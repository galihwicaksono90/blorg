// const black = "#282828"
const red = "#cc241d"
const green = "#98971a"
const yellow = "#d79921"
const blue = "#458588"
const magenta = "#b16286"
// const cyan = "#689d6a"
// const white = "#a89984"
// const brblack = "#928374"
// const brred = "#fb4934"
// const brgreen = "#b8bb26"
const bryellow = "#fabd2f"
const brblue = "#83a598"
const brmagenta = "#d3869b"
// const brcyan = "#8ec07c"
const brwhite = "#ebdbb2"
const background = "#282828"
const foreground = "#FFFFFF"

const theme = {
  fonts: {
    title: "Alfa Slab One, serif",
    main: `Open Sans, sans-serif`,
    code: `JetBrains Mono, monospace`,
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  colors: {
    light: {
      background: foreground,
      foreground: background,
      white: brwhite,
      blue: blue,
      magenta: magenta,
      yellow: yellow,
    },
    dark: {
      background: background,
      foreground: brwhite,
      white: background,
      blue: brblue,
      magenta: brmagenta,
      yellow: bryellow,
    },
    yellow: yellow,
    green: green,
    red: red,
  },
  shadows: {
    shadow1:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
    shadow2:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    shadow3: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
}

export default theme
