interface ButtonEvents {
  click?: (e: Event) => void;
  focus?: (e: Event) => void;
  blur?: (e: Event) => void;
  mouseover?: (e: Event) => void;
}

export interface ButtonProps {
  value: string;
  state: string;
  type: string;
  class?: string;
  events: ButtonEvents
}