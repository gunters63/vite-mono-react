// src/index.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("button", {
    style: styles.container,
    children: "File Button"
  });
};
var styles = {
  container: {
    backgroundColor: "#3f51b5",
    color: "white",
    padding: "5px 15px",
    borderRadius: "5px",
    outline: 0,
    textTransform: "uppercase",
    margin: "10px 0px",
    cursor: "pointer",
    boxShadow: "0px 2px 2px lightgray",
    transition: "ease background-color 250ms",
    "&:hover": {
      backgroundColor: "#283593"
    },
    "&:disabled": {
      cursor: "default",
      opacity: 0.7
    }
  }
};
var src_default = Button;
export {
  src_default as default
};
//# sourceMappingURL=buttonFile.es.js.map
