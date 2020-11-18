import { Theme } from "theme-ui";

const theme: Partial<Theme> = {
  initialColorModeName: "dark",
  colors: {
    text: "#d0d0d0",
    background: "#101010",
    faded: "#9c9c9c",
    primary: "#5AAA95",
    secondary: "#EF5D60",
    modes: {
      light: {
        text: "#101010",
        background: "#d0d0d0",
        faded: "#404040",
      },
    },
  },
  fonts: {
    body:
      'Fira Mono, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Fira Mono, Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 20,
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      my: 20,
    },
    body: {
      fontWeight: "body",
      fontSize: "16px",
      fontFamily: "body",
      lineHeight: "1.25em",
    },
    monospace: {
      fontFamily: "monospace",
      fontSize: "16px",
      fontWeight: "body",
      lineHeight: "1.25em",
    },
  },
  forms: {
    input: {
      pl: 3,
      variant: "text.body",
      fontSize: 1,
      borderRadius: 0,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.display"
    },
    h2: {
      variant: "text.heading",
      fontSize: 3,
    },
    h3: {
      variant: "text.heading",
      fontSize: 2,
    },
    h4: {
      variant: "text.heading",
      fontSize: 1,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      variant: "text.body",
      my: 20,
    },
    a: {
      color: "text",
      borderBottom: "1px solid",
      textDecoration: "none",
      "&:hover": {
        borderBottom: "1px dotted",
      },
    },
    li: {
      variant: "text.body",
      my: 1,
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
    code: {
      variant: "text.monospace",
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: "gray",
      },
      ".comment": {
        fontStyle: "italic",
      },
      ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable": {
        color: "accent",
      },
      ".atrule, .attr-value, .keyword": {
        color: "primary",
      },
      ".selector, .attr-name, .string, .char, .builtin, .inserted": {
        color: "secondary",
      },
    },
  },
};

export default theme;
