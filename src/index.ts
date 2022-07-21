import {render} from "./utility/render";
import {Auth, Actions as Authorization} from "./pages/Auth/Auth";
import {Register, Actions as Registration} from "./pages/Register/Register";
import {UserOptions, Actions as UserOptionsCons} from "./pages/UserOptions/UserOptions";
import {Err} from "./pages/error/error";
import {Main, Actions as MainChatData} from "./pages/Main/Main";

document.addEventListener("DOMContentLoaded", () => {
  let page;
  switch(document.location.search) {
    case "":
      page = new Auth({...Authorization})
      break;
    case "?page=auth":
      page = new Auth({...Authorization})
      break;
    case "?page=500":
      page = new Err({code: 500});
      break;
    case "?page=register":
      page = new Register({...Registration})
      break;
    case "?page=UserOptions":
      page = new UserOptions({...UserOptionsCons})
      break;
    case "?page=Main":
      page = new Main({...MainChatData})
      break;
    default:
      page = new Err({code: 404});
  }

  render('.app', page);
});
