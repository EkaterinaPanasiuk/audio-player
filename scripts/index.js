import { Model } from "./Model.js";
import { View } from "./View.js";
import { Controller } from "./Controller.js";

const app = document.getElementById("container");
const myapp = (function () {
  View;
  Model;
  Controller;
  return {
    init: function (container) {
      const view = new View();
      const controller = new Controller();
      const model = new Model();
      view.init(container);
      model.init(view);
      controller.init(container, model);
    },
  };
})();
myapp.init(app);
