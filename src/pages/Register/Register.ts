import {Block} from "../../utility/Block";
import {RegisterTpl} from "./Register.tpl";
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {submit} from '../../utility/Submit'
import {ValidateInput} from "../../utility/ValidateInput"

export class Register extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(RegisterTpl, this.props);
  }
}

const inputEmail = new Input({
  placeholder: 'Почта',
  attributes: {
    id: 'email',
    name: 'email',
    'data-pattern': 'email',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputLogin = new Input({
  placeholder: 'Логин',
  attributes: {
    id: 'login',
    name: 'login',
    'data-pattern': 'login',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputFirstName = new Input({
  placeholder: 'Имя',
  attributes: {
    id: 'first_name',
    name: 'first_name',
    'data-pattern': 'name',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputSecondName = new Input({
  placeholder: 'Фамилия',
  attributes: {
    id: 'second_name',
    name: 'second_name',
    'data-pattern': 'name',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputPhone = new Input({
  placeholder: 'Телефон',
  attributes: {
    id: 'phone',
    name: 'phone',
    'data-pattern': 'phone',
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputPassword = new Input({
  placeholder: 'Пароль',
  attributes: {
    type: 'password',
    id: 'password',
    name: 'password',
    'data-pattern': 'password'
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const buttonSubmit = new Button({
  value: 'Вход',
  state: 'active',
  type: 'submit',
  events: {
    click: (e) => submit(e, 'form')
  }
})

export const Actions = {
  inputEmail,
  inputLogin,
  inputFirstName,
  inputSecondName,
  inputPhone,
  inputPassword,
  buttonSubmit
}