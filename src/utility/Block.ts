import {compile} from "pug";
import {v4 as makeUUID} from "uuid";
import {EventBus} from "./EventBus";
//import {inputValidate} from "../utils/validate";

export class Block {
  private readonly _id: any;
  private children: {};
  private eventBus: () => EventBus;
  props: any;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element = null;
  _meta = {};

  constructor(propsAndChildren = {}, tagName = 'template') {
    const eventBus = new EventBus();
    const {
      children,
      props
    } = this._getChildren(propsAndChildren);

    this._meta = {
      tagName,
      props
    };
    this._id = makeUUID();
    this.props = this._makePropsProxy({
      ...props,
      __id: this._id
    });
    this.children = children;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _getChildren(propsAndChildren: object) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren)
      .forEach(([key, value]) => {
        if (value instanceof Block) {
          // @ts-ignore
          children[key] = value;
        } else {
          // @ts-ignore
          props[key] = value;
        }
      });

    return {
      children,
      props
    };
  }

  _createResources() {
    // @ts-ignore
    const { tagName } = this._meta;
    // @ts-ignore
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();

    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children)
      .forEach(child => {
        // @ts-ignore
        child.dispatchComponentDidMount();
      });
  }

  componentDidMount(oldProps?) {
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  compile(template: string, props: any) {
    const ins = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      // @ts-ignore
      ins[key] = `plug data-id="${child._id}"`;
    });

    const fragment = this._createDocumentElement('template');
    const compileFunc = compile(template)

    fragment.innerHTML = compileFunc(ins);
    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub.replaceWith(child.getContent());
    });
    return fragment.content;
  }

  _render() {
    const block = this.render();
    // @ts-ignore
    this.element.appendChild(block);
    this._addEvents();
  }

  render() {
    this._render()
  }

  getContent() {

    // @ts-ignore
    return this._element.firstElementChild;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  _addEvents() {
    this.props.events && Object.keys(this.props.events).forEach(eventName => {
      // @ts-ignore
      this._element.firstChild.addEventListener(eventName, this.props.events[eventName]);
    });

    this.props.childEvents && Object.keys(this.props.childEvents).forEach(child => {
      Object.keys(this.props.childEvents[child]).forEach(eventName => {
        // @ts-ignore
        this._element.querySelector(child).addEventListener(eventName, this.props.childEvents[child][eventName]);
      });
    });
  }
}
