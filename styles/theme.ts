export const theme = {
  darkmode: "white",
  lightmode: "black",

  flexMixin: (align = "center", justify = "center") => `
    display:flex;
    align-items:${align};
    justify-content:${justify};
    `,
};
