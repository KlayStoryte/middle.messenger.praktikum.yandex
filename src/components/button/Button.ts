import {Block} from "../../utility/Block";
import {ButtonProps} from "./Button.props";
import {buttonTpl} from "./Button.tpl";

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTpl, this.props);
  }
}