import {Block} from "../../utility/Block";
import {authTpl} from "./Auth.tpl"
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {submit} from '../../utility/Submit'
import {ValidateInput} from "../../utility/ValidateInput"

export class Auth extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(authTpl, this.props);
  }
}

const buttonSubmit = new Button({
  value: 'Sign in',
  state: 'active',
  type: 'submit',
  events: {
    click: (e) => submit(e, 'form')
  }
})
const inputLogin = new Input({
  placeholder: 'Login',
  attributes: {
    id: 'login',
    name: 'login',
    'data-pattern': 'login',
    class: '',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputPassword = new Input({
  placeholder: 'Password',
  attributes: {
    type: 'password',
    id: 'password',
    name: 'password',
    'data-pattern': 'password',
    class: '',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

export const Actions = {
  buttonSubmit,
  inputLogin,
  inputPassword
}