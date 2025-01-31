import "./input.scss"

export type PropsElementInput = {
  type: "text" | "password";
  name: string;
  label?: string;
};

export default class ElementInput extends HTMLElement {
  constructor(props: PropsElementInput) {
    super();

    const input = document.createElement("input");

    input.name = props.name;

    switch (props.type) {
      case "text":
        input.type = "text";
        break;
      case "password":
        input.type = "password";
        break;
    }

    if (props.label !== undefined) {
      const span = document.createElement("span");
      span.innerHTML = props.label;
      this.appendChild(span);
    }

    this.appendChild(input);
  }
}

customElements.define("element-input", ElementInput);
