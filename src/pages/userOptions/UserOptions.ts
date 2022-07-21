import {Block} from "../../utility/Block";
import {UserOptionsTpl} from "./UserOptions.tpl";
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {submit} from '../../utility/Submit'
import {ValidateInput} from "../../utility/ValidateInput"

export class UserOptions extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(UserOptionsTpl, this.props);
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
    required: true,
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

const inputDisplayName = new Input({
  placeholder: 'Имя в чате',
  attributes: {
    id: 'display_name',
    name: 'display_name'
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

const inputOldPassword = new Input({
  placeholder: 'Пароль',
  attributes: {
    type: 'password',
    id: 'oldPassword',
    name: 'oldPassword'
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const inputNewPassword = new Input({
  placeholder: 'Пароль (Еще раз)',
  attributes: {
    type: 'password',
    id: 'newPassword',
    name: 'newPassword',
    'data-pattern': 'password'
  },
  childEvents: {
    input: {
      blur: (e) => ValidateInput(e.target),
    },
  }
});

const buttonSubmit = new Button({
  value: 'Сохранить',
  state: 'active',
  type: 'submit',
  events: {
    click: (e) => submit(e, 'form')
  }
});

const buttonSubmitPass = new Button({
  value: 'Сохранить',
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
  inputDisplayName,
  inputPhone,
  inputOldPassword,
  inputNewPassword,
  buttonSubmit,
  buttonSubmitPass
}