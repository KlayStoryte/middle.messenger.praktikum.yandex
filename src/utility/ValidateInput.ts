const PATTERNS = {
  name: /^([A-Z])([a-z-])+$|^([А-Я])([а-я-])+$/,
  login: /(^[a-z])([a-z\d-_])+$|(^\d)([a-z\d-_])+$/,
  email: /^[\w.-]+@([\w-]+\.)+\w{2,4}$/,
  password: /.*\d+.*[A-Z]+.*|.*[A-Z]+.*\d+.*/,
  phone: /^([+]?\d\d{9,15})+$/,
};

function addError(wrapper: HTMLElement, message: string, className: string) {
  wrapper.classList.add(`${className}_error`);
  document.querySelector(`.${className}__errorInput`) && (document.querySelector(`.${className}__errorInput`).textContent = message);
}

function removeError(wrapper: HTMLElement, className: string) {
  wrapper.classList.remove(`${className}_error`);
  document.querySelector(`.${className}__errorInput`) && (document.querySelector(`.${className}__errorInput`).textContent = null);
}

export function ValidateInput(input: any) {
  const wrapper = input.parentElement;
  const className = wrapper.className.split(' ')[0];
  const state = {
    pattern: PATTERNS[input.dataset.pattern] || null,
    required: !!input.getAttribute('required'),
  }
  const valid = input.value.match(state.pattern);

  if (state.required && !input.value) {
    addError(wrapper, 'Обязательное поле', className);
  }else if (state.pattern && !valid) {
    addError(wrapper, 'Заполнено некорректно', className);
  } else {
    removeError(wrapper, className);
  }
}

export function formValidate(form: HTMLFormElement) {
  form.querySelectorAll('input').forEach(input => ValidateInput(input));
}