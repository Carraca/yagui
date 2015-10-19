define(function (require, exports, module) {

  'use strict';

  var GuiUtils = require('utils/GuiUtils');
  var BaseContainer = require('containers/BaseContainer');

  var Folder = function (name) {
    this.domUl = document.createElement('ul');
    this.domUl.setAttribute('opened', true);

    var domTitle = document.createElement('label');
    domTitle.innerHTML = name || '';

    domTitle.addEventListener('mousedown', this._onMouseDown.bind(this));

    this.domUl.appendChild(domTitle);
    this.isOpen = true;
  };

  Folder.prototype = {
    _onMouseDown: function () {
      this.isOpen = !this.isOpen;
      this.domUl.setAttribute('opened', this.isOpen);
    },
    open: function () {
      this.isOpen = true;
      this.domUl.setAttribute('opened', true);
    },
    close: function () {
      this.isOpen = false;
      this.domUl.setAttribute('opened', false);
    },
    setVisibility: function (visible) {
      if (!visible) this.domUl.setAttribute('opened', false);
      else if (this.isOpen) this.domUl.setAttribute('opened', true);
      this.domUl.style.height = visible ? 'auto' : '0px';
    }
  };

  GuiUtils.makeProxy(BaseContainer, Folder);

  module.exports = Folder;
});