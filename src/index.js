import $ from "jquery";
import api from "./api";
import events from "./events";
import store from "./store";
import templates from "./templates";
import "./styles.css";

// RENDER FUNCTION
const render = function () {
  if (store.STORE.adding === true) {
    let html = "";
    html = templates.generateAddForm();
    $("main").html(html);
  }
  if (store.STORE.filtering === true && store.STORE.filter > 0) {
    let html = "";
    html = templates.generateFilterList();
    $("main").html(html);
  }
  if (store.STORE.filtering === true && store.STORE.filter <= 0) {
    let html = "";
    html = templates.generateFilterDropdown();
    $("main").html(html);
  }
  if (
    store.STORE.adding === false &&
    store.STORE.filtering === false &&
    store.STORE.error === null
  ) {
    let html = "";
    html = templates.generateBookmarksString();
    $("main").html(html);
  }
};

function main() {
  api.getBookmarksAPI();
  events.eventHandlers();
}

export default {
  render,
};

$(main);
