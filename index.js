import $ from "./jquery";
import * as api from "./api.js";
import * as events from "./events.js";
import * as store from "./store.js";
import * as templates from "./templates.js";
import "./styles.css";

// RENDER FUNCTION
const render = function () {
  if (store.STORE.adding === true) {
    let html = "";
    html = templates.generateAddForm();
    $("section").html(html);
  }
  if (store.STORE.filtering === true && store.STORE.filter > 0) {
    let html = "";
    html = templates.generateFilterList();
    $("section").html(html);
  }
  if (store.STORE.filtering === true && store.STORE.filter <= 0) {
    let html = "";
    html = templates.generateFilterDropdown();
    $("section").html(html);
  }
  if (
    store.STORE.adding === false &&
    store.STORE.filtering === false &&
    store.STORE.error === null
  ) {
    let html = "";
    html = templates.generateBookmarksString();
    $("section").html(html);
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
