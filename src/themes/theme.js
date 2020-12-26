const black = "#282828"
const red = "#cc241d"
const green = "#98971a"
const yellow = "#d79921"
const blue = "#458588"
const magenta = "#b16286"
const cyan = "#689d6a"
const white = "#a89984"
// const brblack = "#928374"
// const brred = "#fb4934"
// const brgreen = "#b8bb26"
// const bryellow = "#fabd2f"
const brblue = "#83a598"
// const brmagenta = "#d3869b"
// const brcyan = "#8ec07c"
// const brwhite = "#ebdbb2"
const background = "#282828"
const foreground = "#FFFFFF"

const theme = {
  fonts: {
    main: `Jost*, sans-serif`,
    code: `Cascadia Code, monospace`,
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
    },
    dark: {
      background: background,
      foreground: foreground,
    },
    red: red,
    green: green,
    yellow: yellow,
    blue: blue,
    magenta: magenta,
    cyan: cyan,
    brblue: brblue,
    white: white,
    black: black,
  },
}

export default theme
