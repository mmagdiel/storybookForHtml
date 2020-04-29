import "./scss/bootstrap.scss";
import { cover } from "./fragments/cover";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Testing",
    parameters: {
    viewport: { defaultViewport: "iphone6" },
  },
};

export const Cover = () => cover();

export const Button = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Hello Button";
  btn.addEventListener("click", (e) => console.log(e));
  return btn;
};
