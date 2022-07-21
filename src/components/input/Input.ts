
import {InputProps} from "./input.props";
import {Block} from "../../utility/Block";
import {inputTpl} from "./input.tpl";

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(inputTpl, this.props);
  }
}