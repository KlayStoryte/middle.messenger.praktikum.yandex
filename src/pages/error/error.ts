import {Block} from "../../utility/Block";
import {errTpl} from "./err.tpl";

export class Err extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(errTpl, this.props);
  }
}
