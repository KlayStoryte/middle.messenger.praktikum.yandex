import {Block} from "../../utility/Block";
import {mainTpl} from "./Main.tpl";
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {submit} from '../../utility/Submit'

export class Main extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(mainTpl, this.props);
  }
}
const buttonSubmit = new Button({
  value: 'Отправить',
  state: 'sender',
  type: 'submit',
  events: {
    click: (e) => submit(e, 'form')
  }
})
const inputText = new Input({
  placeholder: 'Печатать здесь',
  attributes: {
    id: 'text',
    name: 'text',
    class: '',
  },
  childEvents: {
    input: {
    },
  }
});
export const Actions = {
  buttonSubmit,
  inputText,
}