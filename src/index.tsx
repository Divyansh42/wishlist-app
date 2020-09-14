import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { getSnapshot } from "mobx-state-tree"

import { Group } from "./models/Group"

let initialState: any = {
  users: {
    a342: {
      id: "a342",
      name: "Homer",
      gender: "m",
    },
    "5fc2": {
      id: "5fc2",
      name: "Marge",
      gender: "f",
    },
    "663b": {
      id: "663b",
      name: "Bart",
      gender: "m",
    },
    "65aa": {
      id: "65aa",
      name: "Maggie",
      gender: "f",
    },
    ba32: {
      id: "ba32",
      name: "Lisa",
      gender: "f",
    },
  },
}

// if(localStorage.getItem("wishlistapp")) {
//   const json: JSON = JSON.parse(localStorage.getItem("wishlistapp") || "{}");
//   if (WishList.is(json)) initialState = json
// }
let group = Group.create(initialState);
// let wishList = WishList.create(initialState);

// onSnapshot(wishList, snapshot  => {
//   localStorage.setItem("wishlistapp", JSON.stringify(snapshot));
// })

function renderApp() {
    ReactDOM.render(
    <React.StrictMode>
      <App group={group} />
    </React.StrictMode>,
    document.getElementById('root')
    );
}

renderApp();
if(module.hot) {
  module.hot.accept(["./components/App"], () => {
    renderApp()
  });
  module.hot.accept(["./models/Group"], () => {
    // new model definitions
    const snapshot = getSnapshot(group);
    group = Group.create(snapshot);
    renderApp();
  });
}
// setInterval(() => {
//   wishList.items[0].changePrice(wishList.items[0].price + 1)
// }, 1000);