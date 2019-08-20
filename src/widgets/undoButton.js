import BaseWidget from "widgets/BaseWidget";

class undoButton extends BaseWidget {
  constructor(name, callbackOrObject, key) {
    super();

    var callback = key
      ? callbackOrObject[key].bind(callbackOrObject)
      : callbackOrObject;

    this.domButton = document.createElement("button");
    this.domButton.className = "gui-undobutton";
    this.domButton.innerHTML = "";
    this.domButton.addEventListener("click", this._onClick.bind(this));

    this.setCallback(callback);
  }

  setEnable(bool) {
    this.domButton.disabled = bool === undefined ? false : !bool;
  }

  _onClick() {
    if (this.callback) this.callback();
  }
}

export default undoButton;
