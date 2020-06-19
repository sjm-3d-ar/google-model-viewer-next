export default {
  card: {
    margin: "3em auto",
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    borderRadius: "6px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },

  model_viewer: {
    width: "100%",
    height: "400px",
  },

  attribution: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1em",

    "& h1": {
      margin: "0 0 0.25em",
    },
    "& img": {
      opacity: "0.5",
      height: "2em",
    },
    "&.cc": {
      flexShrink: "0",
      textDecoration: "none",
    },
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: "1.5em",
  },
};
