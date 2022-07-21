export function submit(event: Event, query: string) {
  const form = <HTMLFormElement>document.querySelector(query);
  const data = new FormData(form);
  const result = {};

  for (const [key, value] of data) {
    // @ts-ignore
    result[key] = value;
  }

  //formValidate(form);

  console.log(result);
  event.preventDefault();
}