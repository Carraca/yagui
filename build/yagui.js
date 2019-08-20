(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["yagui"] = factory();
	else
		root["yagui"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseWidget {

  constructor() {}

  _getInitialValue(valOrObject, callbackOrKey) {
    if (typeof callbackOrKey !== 'string') return valOrObject;
    return valOrObject[callbackOrKey];
  }

  _getCheckCallback(valOrObject, callbackOrKey) {
    if (typeof callbackOrKey !== 'string') return callbackOrKey;
    return function (val) {
      valOrObject[callbackOrKey] = val;
    };
  }

  _setDomContainer(container) {
    this.domContainer = container;
  }

  setCallback(callback) {
    this.callback = callback;
  }

  setVisibility(visible) {
    if (!this.domContainer) return;
    this.domContainer.hidden = !visible;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BaseWidget);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_Button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgets_Checkbox__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_widgets_Color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_widgets_Combobox__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_widgets_Slider__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_widgets_Title__ = __webpack_require__(12);







// label : 36%
// slider : bar 52% + margin 2% + input 10%
// combobox : 64%
// color : 64%
class BaseContainer {
  constructor() {}

  _addLine(name) {
    var domLine = document.createElement("li");
    domLine.innerHTML = name || "";
    this.domUl.appendChild(domLine);
    return domLine;
  }

  _createLabel(name) {
    var domLabel = document.createElement("label");
    domLabel.className = "gui-label-side";
    domLabel.innerHTML = name || "";
    return domLabel;
  }

  _setDomContainer(container) {
    this.domContainer = container;
  }

  addTitle(name) {
    var widget = new __WEBPACK_IMPORTED_MODULE_5_widgets_Title__["a" /* default */](name);
    this.domUl.appendChild(widget.domText);
    return widget;
  }

  addCheckbox(name, valOrObject, callbackOrKey) {
    var widget = new __WEBPACK_IMPORTED_MODULE_1_widgets_Checkbox__["a" /* default */](valOrObject, callbackOrKey);
    var domLine = this._addLine();
    domLine.className += " gui-pointerOnHover gui-glowOnHover";
    var domLabel = this._createLabel(name);
    domLabel.style.overflow = "visible";
    domLabel.className += " gui-pointerOnHover";
    domLine.appendChild(domLabel);
    domLine.appendChild(widget.domCheckbox);
    domLine.appendChild(widget.domLabelCheckbox);
    domLine.addEventListener("mousedown", widget._onMouseDown.bind(widget));
    widget._setDomContainer(domLine);
    return widget;
  }

  addCombobox(name, valOrObject, callbackOrKey, options) {
    var widget = new __WEBPACK_IMPORTED_MODULE_3_widgets_Combobox__["a" /* default */](valOrObject, callbackOrKey, options);
    var domLine = this._addLine();
    if (name) domLine.appendChild(this._createLabel(name));
    else widget.domSelect.style.width = "100%";
    domLine.appendChild(widget.domSelect);
    widget._setDomContainer(domLine);
    return widget;
  }

  addSlider(name, valOrObject, callbackOrKey, min, max, step) {
    var widget = new __WEBPACK_IMPORTED_MODULE_4_widgets_Slider__["a" /* default */](valOrObject, callbackOrKey, min, max, step);
    var domLine = this._addLine();
    if (name) domLine.appendChild(this._createLabel(name));
    domLine.appendChild(widget.domInputText);
    domLine.appendChild(widget.domSlider);
    widget._setDomContainer(domLine);
    return widget;
  }

  addColor(name, valOrObject, callbackOrKey) {
    var widget = new __WEBPACK_IMPORTED_MODULE_2_widgets_Color__["a" /* default */](valOrObject, callbackOrKey);
    var domLine = this._addLine();
    if (name) domLine.appendChild(this._createLabel(name));
    else widget.domColor.style.width = "100%";
    domLine.appendChild(widget.domColor);
    widget._setDomContainer(domLine);
    return widget;
  }

  addButton(name, callbackOrObject, key) {
    var widget = new __WEBPACK_IMPORTED_MODULE_0_widgets_Button__["a" /* default */](name, callbackOrObject, key);
    var domLine = this._addLine();
    domLine.appendChild(widget.domButton);
    widget._setDomContainer(domLine);
    return widget;
  }

  addDualButton(
    name1,
    name2,
    callbackOrObject1,
    callbackOrObject2,
    key1,
    key2
  ) {
    var widget1 = new __WEBPACK_IMPORTED_MODULE_0_widgets_Button__["a" /* default */](name1, callbackOrObject1, key1);
    var widget2 = new __WEBPACK_IMPORTED_MODULE_0_widgets_Button__["a" /* default */](name2, callbackOrObject2, key2);
    var domLine = this._addLine();
    domLine.appendChild(widget2.domButton);
    domLine.appendChild(widget1.domButton);
    var style1 = widget1.domButton.style;
    var style2 = widget2.domButton.style;
    style1.width = style2.width = "49%";
    style1.marginRight = style2.marginLeft = "1%";
    widget1._setDomContainer(domLine);
    widget2._setDomContainer(domLine);
    return [widget1, widget2];
  }

  setVisibility(visible) {
    if (!this.domContainer) return;
    this.domContainer.hidden = !visible;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BaseContainer);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var GuiUtils = {};

GuiUtils.rgbToHsv = function (rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var maxRGB = Math.max(r, g, b);
  var minRGB = Math.min(r, g, b);
  if (minRGB === maxRGB) return [0, 0, minRGB];
  var d = (r === minRGB) ? g - b : ((b === minRGB) ? r - g : b - r);
  var h = (r === minRGB) ? 3 : ((b === minRGB) ? 1 : 5);
  return [(h - d / (maxRGB - minRGB)) / 6, (maxRGB - minRGB) / maxRGB, maxRGB];
};

GuiUtils.hsvToRgb = function (hsv) {
  var h = hsv[0] * 6;
  var s = hsv[1];
  var v = hsv[2];
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1.0 - s);
  var q = v * (1.0 - f * s);
  var t = v * (1.0 - (1.0 - f) * s);
  var mod = i % 6;
  if (mod === 0) return [v, t, p];
  else if (mod === 1) return [q, v, p];
  else if (mod === 2) return [p, v, t];
  else if (mod === 3) return [p, q, v];
  else if (mod === 4) return [t, p, v];
  else return [v, p, q];
};

GuiUtils.getValidColor = function (color) {
  for (var i = 0, len = color.length; i < len; ++i) color[i] = Math.max(0.0, Math.min(1.0, color[i]));
  return color;
};

GuiUtils.getStrColor = function (color) {
  if (color.length === 3) return GuiUtils.rgbToHex(color);
  return 'rgba(' + Math.round(color[0] * 255) + ',' + Math.round(color[1] * 255) + ',' + Math.round(color[2] * 255) + ',' + color[3] + ')';
};

GuiUtils.getColorMult = function (color, fac) {
  var out = [color[0] * fac, color[1] * fac, color[2] * fac];
  if (color.length === 4) out.push(color[3]);
  return GuiUtils.getValidColor(out);
};

GuiUtils.getColorAdd = function (color, add) {
  var out = [color[0] + add, color[1] + add, color[2] + add];
  if (color.length === 4) out.push(color[3]);
  return GuiUtils.getValidColor(out);
};

GuiUtils.rgbToHex = function (rgb) {
  var h = '#';
  for (var i = 0; i < 3; ++i) {
    var c = Math.round(rgb[i] * 255).toString(16);
    h += c.length === 1 ? '0' + c : c;
  }
  return h;
};

GuiUtils.hexToRgb = function (hex) {
  var i = 0;
  if (hex[0] === '#') hex = hex.slice(1);
  var h = hex;
  if (hex.length > 6) h = hex.slice(0, 6);
  else if (hex.length < 6) {
    h = '';
    for (i = 0; i < 3; ++i)
      h += hex[i] ? hex[i] + hex[i] : '00';
  }
  var col = [0, 0, 0];
  for (i = 0; i < 3; ++i) {
    var c = parseInt(h[i * 2] + h[i * 2 + 1], 16);
    col[i] = (c !== c ? 0 : c) / 255;
  }
  return col;
};

/* harmony default export */ __webpack_exports__["a"] = (GuiUtils);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var GuiMain = __webpack_require__(4).default;

var yagui = {
  GuiMain: GuiMain
};

module.exports = yagui;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_Sidebar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers_Topbar__ = __webpack_require__(13);



class GuiMain {

  constructor(viewport, callbackResize) {
    this.domMain = document.createElement('div');
    this.viewport = viewport;

    this.callbackResize = callbackResize;
    if (this.viewport) {
      this.viewport.style.width = document.documentElement.clientWidth + 'px';
      this.viewport.style.height = document.documentElement.clientHeight + 'px';
    }
    this.cbResize_ = this._onWindowResize.bind(this);

    document.body.appendChild(this.domMain);
    this.leftSidebar = undefined;
    this.rightSidebar = undefined;
    this.topbar = undefined;

    window.addEventListener('resize', this._onWindowResize.bind(this), false);
  }

  _onWindowResize() {
    if (this.viewport) {
      this.viewport.style.width = document.documentElement.clientWidth + 'px';
      this.viewport.style.height = document.documentElement.clientHeight + 'px';
      this.viewport.style.left = '0px';
      this.viewport.style.top = '0px';
      if (this.leftSidebar)
        this.leftSidebar._updateViewportPosition(this.viewport);
      if (this.rightSidebar)
        this.rightSidebar._updateViewportPosition(this.viewport);
      if (this.topbar)
        this.topbar._updateViewportPosition(this.viewport);
    }
    this._updateSidebarsPosition();
    if (this.callbackResize)
      this.callbackResize();
  }

  _updateSidebarsPosition() {
    if (!this.topbar) return;
    var off = this.topbar.domTopbar.offsetHeight;
    if (this.leftSidebar)
      this.leftSidebar._setTop(off);
    if (this.rightSidebar)
      this.rightSidebar._setTop(off);
  }

  addLeftSidebar() {
    this.leftSidebar = new __WEBPACK_IMPORTED_MODULE_0_containers_Sidebar__["a" /* default */](this.cbResize_);
    var domSide = this.leftSidebar.domSidebar;
    this.domMain.appendChild(domSide);
    this.domMain.appendChild(this.leftSidebar.domResize);

    this._updateSidebarsPosition();
    this.leftSidebar._updateViewportPosition(this.viewport);
    return this.leftSidebar;
  }

  addRightSidebar() {
    this.rightSidebar = new __WEBPACK_IMPORTED_MODULE_0_containers_Sidebar__["a" /* default */](this.cbResize_);
    var domSide = this.rightSidebar.domSidebar;
    this.domMain.appendChild(domSide);
    this.domMain.appendChild(this.rightSidebar.domResize);

    this.rightSidebar._onTheRight();
    this._updateSidebarsPosition();
    this.rightSidebar._updateViewportPosition(this.viewport);
    return this.rightSidebar;
  }

  addTopbar() {
    this.topbar = new __WEBPACK_IMPORTED_MODULE_1_containers_Topbar__["a" /* default */](this.cbResize_);
    this.domMain.appendChild(this.topbar.domTopbar);

    this._updateSidebarsPosition();
    this.topbar._updateViewportPosition(this.viewport);
    return this.topbar;
  }

  setVisibility(visible) {
    this.domMain.hidden = !visible;
    this._onWindowResize();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GuiMain);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_Folder__ = __webpack_require__(6);


class Sidebar {
  constructor(callbackResize) {
    this.domSidebar = document.createElement("div");
    this.domSidebar.className = "gui-sidebar";

    this.domResize = document.createElement("div");
    this.domResize.className = "gui-resize";

    this.isDragging = false;
    this.mouseX = 0;
    this.domResize.addEventListener("mousedown", this._onMouseDown.bind(this));
    window.addEventListener("mousemove", this._onMouseMove.bind(this));
    window.addEventListener("mouseup", this._onMouseUp.bind(this));

    this.callbackResize = callbackResize;
    this.isOnTheRight = false;
  }

  _setTop(nb) {
    this.domSidebar.style.top = this.domResize.style.top = nb + "px";
  }

  _onTheRight() {
    this.isOnTheRight = false;
    this.domSidebar.style.left = 1;
    this.domSidebar.style.borderRight = 1;
    this.domSidebar.style.borderLeft = 1;
    this.domSidebar.style.borderColor = "rgba(255,255,255,0.3)";
    this.domResize.style.left = 0;
    this.domResize.style.right = this.domSidebar.offsetWidth + "px";
    this.domResize.style.marginRight = "-3px";
  }

  _onMouseDown(ev) {
    this.isDragging = true;
    this.mouseX = ev.clientX;
  }

  _updateViewportPosition(viewport) {
    var w = this.domSidebar.hidden ? 0 : this.domSidebar.offsetWidth;
    if (this.isOnTheRight) {
      viewport.style.width = viewport.clientWidth - w + "px";
    } else {
      viewport.style.left = this.domSidebar.offsetLeft + w + "px";
      viewport.style.width = viewport.clientWidth - w + "px";
    }
  }

  _onMouseMove(ev) {
    if (this.isDragging === false) return;
    var mouseX = ev.clientX;
    var delta = mouseX - this.mouseX;
    if (this.isOnTheRight) delta = -delta;
    var widthBar = Math.max(50, this.domSidebar.offsetWidth + delta);

    var val = widthBar + "px";
    this.domSidebar.style.width = val;
    if (this.isOnTheRight)
      this.domResize.style.right = this.domSidebar.offsetWidth + "px";
    else this.domResize.style.left = val;

    this.mouseX = mouseX;
    this.callbackResize();
  }

  _onMouseUp() {
    this.isDragging = false;
  }

  addMenu(name) {
    var folder = new __WEBPACK_IMPORTED_MODULE_0_containers_Folder__["a" /* default */](name);
    this.domSidebar.appendChild(folder.domUl);
    return folder;
  }

  setVisibility(visible) {
    this.domSidebar.hidden = !visible;
    this.domResize.hidden = !visible;
    this.callbackResize();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_BaseContainer__ = __webpack_require__(1);


class Folder extends __WEBPACK_IMPORTED_MODULE_0_containers_BaseContainer__["a" /* default */] {

  constructor(name) {
    super();

    this.domUl = document.createElement('ul');
    this.domUl.setAttribute('opened', true);

    var domTitle = document.createElement('label');
    domTitle.innerHTML = name || '';

    domTitle.addEventListener('mousedown', this._onMouseDown.bind(this));

    this.domUl.appendChild(domTitle);
    this.isOpen = true;
  }

  _onMouseDown() {
    this.isOpen = !this.isOpen;
    this.domUl.setAttribute('opened', this.isOpen);
  }

  open() {
    this.isOpen = true;
    this.domUl.setAttribute('opened', true);
  }

  close() {
    this.isOpen = false;
    this.domUl.setAttribute('opened', false);
  }

  setVisibility(visible) {
    if (!visible) this.domUl.setAttribute('opened', false);
    else if (this.isOpen) this.domUl.setAttribute('opened', true);
    this.domUl.style.height = visible ? 'auto' : '0px';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Folder);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class Button extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(name, callbackOrObject, key) {
    super();

    var callback = key ? callbackOrObject[key].bind(callbackOrObject) : callbackOrObject;

    this.domButton = document.createElement('button');
    this.domButton.className = 'gui-button';
    this.domButton.innerHTML = name || '';
    this.domButton.addEventListener('click', this._onClick.bind(this));

    this.setCallback(callback);
  }

  setEnable(bool) {
    this.domButton.disabled = bool === undefined ? false : !bool;
  }

  _onClick() {
    if (this.callback) this.callback();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class Checkbox extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(valOrObject, callbackOrKey) {
    super();

    var value = this._getInitialValue(valOrObject, callbackOrKey);
    var callback = this._getCheckCallback(valOrObject, callbackOrKey);
    this.domCheckbox = document.createElement('input');
    this.domCheckbox.className = 'gui-input-checkbox';
    this.domCheckbox.type = 'checkbox';

    this.domLabelCheckbox = document.createElement('label');

    this.setValue(value === undefined ? true : value);
    this.setCallback(callback);
  }

  _onMouseDown() {
    this.setValue(!this.domCheckbox.checked);
  }

  setValue(val, ignoreCB) {
    this.domCheckbox.checked = val;
    if (!ignoreCB && this.callback) this.callback(val);
  }

  getValue() {
    return this.domCheckbox.checked;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgets_BaseWidget__ = __webpack_require__(0);



var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
var urlAlpha = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiPHPmDAMMGBsbw9lMDDgA6RKM%2F%2F%2F%2Fh3POnj1LCzsAAgwAQtYIcFfEyzkAAAAASUVORK5CYII%3D")';

class Color extends __WEBPACK_IMPORTED_MODULE_1_widgets_BaseWidget__["a" /* default */] {

  constructor(valOrObject, callbackOrKey) {
    super();

    var value = this._getInitialValue(valOrObject, callbackOrKey);
    var callback = this._getCheckCallback(valOrObject, callbackOrKey);
    if (value) this.color = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getValidColor(value.slice());
    else this.color = [1.0, 0.0, 0.0];

    // container
    this.domColor = document.createElement('div');
    this.domColor.className = 'gui-widget-color';

    // input text
    this.domInputColor = document.createElement('input');
    this.domPopup = document.createElement('div');

    // hue picker
    this.domHue = document.createElement('div');
    this.domHue.className = 'gui-color-hue';
    this.domHueKnob = document.createElement('div');
    this.domHueKnob.className = 'gui-knob-hue';

    // saturation picker
    this.domSaturation = document.createElement('div');
    this.domSaturation.className = 'gui-color-saturation';
    var zAlphaSat = document.createElement('div');
    this.domSaturation.appendChild(zAlphaSat);
    this.domSaturationKnob = document.createElement('div');
    this.domSaturationKnob.className = 'gui-knob-saturation';

    this.domHue.appendChild(this.domHueKnob);
    this.domPopup.appendChild(this.domSaturationKnob);
    this.domPopup.appendChild(this.domSaturation);
    this.domPopup.appendChild(this.domHue);
    this.domColor.appendChild(this.domInputColor);
    this.domColor.appendChild(this.domPopup);

    this._hueGradient(this.domHue);
    this._linearGradient(zAlphaSat, 'top', 'rgba(0,0,0,0)', '#000');

    this.domColor.addEventListener('keydown', this._onInputDown.bind(this));
    this.domSaturation.addEventListener('mousedown', this._onSaturationDown.bind(this));
    this.domHue.addEventListener('mousedown', this._onHueDown.bind(this));
    window.addEventListener('mouseup', this._onMouseUp.bind(this));
    window.addEventListener('mouseout', this._onMouseUp.bind(this));
    window.addEventListener('mousemove', this._onMouseMove.bind(this));

    // alpha picker
    this.hasAlpha = this.color.length === 4;
    this.alpha = 1.0;
    if (this.hasAlpha) {
      this.domPopup.style.width = '142px';
      this.domAlpha = document.createElement('div');
      this.domAlpha.className = 'gui-color-alpha';
      this.domAlphaKnob = document.createElement('div');
      this.domAlphaKnob.className = 'gui-knob-alpha';

      this._alphaGradient(this.domAlpha, 'top', 'rgba(0,0,0,1.0)', 'rgba(0,0,0,0.0)');

      this.domAlpha.addEventListener('mousedown', this._onAlphaDown.bind(this));
      this.domAlpha.appendChild(this.domAlphaKnob);
      this.domPopup.appendChild(this.domAlpha);
    }

    this.editHue = this.editSaturation = this.editAlpha = false;
    this.widgetHeight = this.widgetWidth = 100;
    this.setValue(this.color);
    this.setCallback(callback);
  }

  _onInputDown(ev) {
    ev.stopPropagation();
    if (ev.keyCode === 13)
      this.setValue(__WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].hexToRgb(ev.target.value));
  }

  _onUpdateSaturation(ev) {
    var rect = this.domSaturation.getBoundingClientRect();
    var hsv = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].rgbToHsv(this.getValue());
    hsv[1] = Math.min(1.0, Math.max(0.0, (ev.clientX - rect.left) / rect.width));
    hsv[2] = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.width));
    this.setValue(__WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].hsvToRgb(hsv), false, true);
    this._updateGui();
  }

  _onUpdateHue(ev) {
    var rect = this.domHue.getBoundingClientRect();
    var hsv = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].rgbToHsv(this.getValue());
    hsv[0] = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.height));
    this.setValue(__WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].hsvToRgb(hsv), false, true);
    this._updateGui();
  }

  _onUpdateAlpha(ev) {
    var rect = this.domAlpha.getBoundingClientRect();
    var col = this.getValue();
    col[3] = this.alpha = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.height));
    this.setValue(col, false, true);
    this._updateGui();
  }

  _updateGui() {
    var color = this.getValue();
    var hsv = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].rgbToHsv(color);

    this.domSaturationKnob.style.marginLeft = this.widgetWidth * hsv[1] - 7 + 'px';
    this.domSaturationKnob.style.marginTop = this.widgetHeight * (1.0 - hsv[2]) - 7 + 'px';

    hsv[1] = hsv[2] = 1.0;
    this._linearGradient(this.domSaturation, 'left', '#fff', __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getStrColor(__WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].hsvToRgb(hsv)));

    this.domHueKnob.style.marginTop = (1.0 - hsv[0]) * this.widgetHeight + 'px';

    if (this.hasAlpha && color[3] !== undefined)
      this.domAlphaKnob.style.marginTop = (1.0 - this.alpha) * this.widgetHeight + 'px';
  }

  _onMouseMove(ev) {
    if (!this.editSaturation && !this.editHue && !this.editAlpha) return;
    if (this.editSaturation) return this._onUpdateSaturation(ev);
    if (this.editHue) return this._onUpdateHue(ev);
    if (this.editAlpha) return this._onUpdateAlpha(ev);
  }

  _onSaturationDown(ev) {
    this.editSaturation = true;
    this._onMouseMove(ev);
  }

  _onHueDown(ev) {
    this.editHue = true;
    this._onMouseMove(ev);
  }

  _onAlphaDown(ev) {
    this.editAlpha = true;
    this._onMouseMove(ev);
  }

  _onMouseUp() {
    this.editHue = this.editSaturation = this.editAlpha = false;
  }

  _hueGradient(dom) {
    dom.style.background = '';
    for (var i = 0, l = vendors.length; i < l; ++i)
      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  }

  _alphaGradient(dom, dir, col1, col2) {
    dom.style.background = '';
    for (var i = 0, l = vendors.length; i < l; ++i)
      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(' + dir + ', ' + col1 + ',' + col2 + '),' + urlAlpha + ';';
  }

  _linearGradient(dom, dir, col1, col2) {
    dom.style.background = '';
    for (var i = 0, l = vendors.length; i < l; ++i)
      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(' + dir + ', ' + col1 + ' 0%, ' + col2 + ' 100%);';
  }

  setValue(color, ignoreCB, ignoreUI) {
    var c = this.color;
    for (var i = 0, nbC = color.length; i < nbC; ++i)
      c[i] = color[i];

    var hex = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].rgbToHex(color);
    this.domInputColor.value = hex;
    if (this.hasAlpha) {
      if (color.length >= 4) this.alpha = color[3];
      else color.push(this.alpha);
      var col = 'rgba(' + parseInt(color[0] * 255, 10) + ',' + parseInt(color[1] * 255, 10) + ',' + parseInt(color[2] * 255, 10) + ',' + this.alpha + ')';
      this._alphaGradient(this.domInputColor, '0deg', col, col);
    } else {
      this.domInputColor.style.background = hex;
    }

    // color of text
    var hsv = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].rgbToHsv(color);
    this.domSaturationKnob.style.borderColor = (hsv[2] < 0.5 || hsv[1] > 0.5) ? '#fff' : '#000';
    this.domInputColor.style.color = (this.alpha > 0.2 && (hsv[2] < 0.5 || hsv[1] > 0.5)) ? '#fff' : '#000';
    if (!ignoreUI) this._updateGui();
    if (!ignoreCB && this.callback) this.callback(color);
  }

  getValue() {
    return this.color;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Color);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class Combobox extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(valOrObject, callbackOrKey, options) {
    super();

    var value = this._getInitialValue(valOrObject, callbackOrKey);
    var callback = this._getCheckCallback(valOrObject, callbackOrKey);
    options = options || {};
    value = value !== undefined ? value : options[0];

    this.isArray = options.length !== undefined;

    this.domSelect = document.createElement('select');
    this.domSelect.className = 'gui-select';
    this.addOptions(options);

    this.domSelect.addEventListener('change', this._onChange.bind(this));
    this.setValue(value);
    this.setCallback(callback);
  }

  _parseValue(val) {
    return this.isArray ? parseInt(val, 10) : val;
  }

  _onChange(ev) {
    this.setValue(ev.target.value);
  }

  addOptions(options) {
    var keys = Object.keys(options);
    for (var i = 0; i < keys.length; ++i) {
      var opt = document.createElement('option');
      opt.innerHTML = options[keys[i]];
      opt.value = keys[i];
      this.domSelect.appendChild(opt);
    }
  }

  setValue(val, ignoreCB) {
    this.domSelect.value = val;
    if (!ignoreCB && this.callback) this.callback(this._parseValue(val));
  }

  getValue() {
    return this._parseValue(this.domSelect.value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Combobox);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class Slider extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(valOrObject, callbackOrKey, min, max, step) {
    super();

    var value = this._getInitialValue(valOrObject, callbackOrKey);
    var callback = this._getCheckCallback(valOrObject, callbackOrKey);
    value = value !== undefined ? value : 100;
    min = min !== undefined ? min : 0;
    max = max !== undefined ? max : 200;
    step = step !== undefined ? step : 1;

    // slider
    this.domSlider = document.createElement('div');
    this.domSlider.className = 'gui-slider';
    this.domSliderFill = document.createElement('div');
    this.domSlider.appendChild(this.domSliderFill);

    // text input
    this.domInputText = document.createElement('input');
    this.domInputText.className = 'gui-input-number';
    this.domInputText.type = 'number';
    this.min = this.domInputText.min = min;
    this.max = this.domInputText.max = max;
    this.step = this.domInputText.step = step;

    this.domInputText.addEventListener('keydown', this._onKeyDown.bind(this));
    this.domInputText.addEventListener('change', this._onInputText.bind(this));
    this.domInputText.addEventListener('blur', this._onInputText.bind(this));
    this.domSlider.addEventListener('mousedown', this._onMouseDown.bind(this));
    window.addEventListener('mouseup', this._onMouseUp.bind(this), true);
    window.addEventListener('mousemove', this._onMouseMove.bind(this));

    this.lastValue = value;
    this.isDown = false;
    this.setValue(value);
    this.setCallback(callback);
  }

  _onInputText(ev) {
    var val = parseFloat(ev.target.value);
    if (val !== val || val === this.lastValue) return;
    this.setValue(val);
  }

  _onKeyDown(ev) {
    ev.stopPropagation();
    if (ev.which === 13) // enter
      this.domInputText.blur();
  }

  _onMouseMove(ev) {
    ev.preventDefault();
    if (!this.isDown)
      return;
    var rect = this.domSlider.getBoundingClientRect();
    var val = this.min + (this.max - this.min) * ((ev.clientX - rect.left) / rect.width);
    this.setValue(val);
  }

  _onMouseDown(ev) {
    this.isDown = true;
    this._onMouseMove(ev);
  }

  _onMouseUp() {
    this.isDown = false;
  }

  _setDomContainer(container) {
    this.domContainer = container;
  }

  getValue() {
    return parseFloat(this.domInputText.value);
  }

  setValue(val, ignoreCB) {
    this.lastValue = val;
    val = Math.max(Math.min(val, this.max), this.min);
    val = Math.round(val / this.step) * this.step;
    this.domInputText.value = val;
    var per = this.min;
    if (this.max !== this.min) per = (val - this.min) / (this.max - this.min);
    this.domSliderFill.style.width = 100 * per + '%';
    if (!ignoreCB && this.callback) this.callback(val);
  }

  setMax(max) {
    this.domInputText.max = this.max = max;
    return this;
  }

  setMin(min) {
    this.min = min;
    return this;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Slider);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class Title extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(name) {
    super();

    this.domText = document.createElement('div');
    this.domText.innerHTML = name || '';
    this.domText.className = 'group-title';
  }

  setText(text) {
    this.domText.innerHTML = text;
  }

  setVisibility(visible) {
    this.domText.hidden = !visible;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Title);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_Menu__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_undoButton__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_redoButton__ = __webpack_require__(18);





class Topbar {
  constructor(callbackResize) {
    this.domTopbar = document.createElement("div");
    this.domTopbar.className = "gui-topbar";

    this.domUl = document.createElement("ul");
    this.domTopbar.appendChild(this.domUl);

    this.callbackResize = callbackResize;
    this.uiExtra = {};
  }

  _addLine(name) {
    var domLine = document.createElement("li");
    domLine.innerHTML = name || "";
    this.domUl.appendChild(domLine);
    return domLine;
  }

  _updateViewportPosition(viewport) {
    var h = this.domTopbar.hidden ? 0 : this.domTopbar.offsetHeight;
    viewport.style.top = h + "px";
    viewport.style.height = viewport.clientHeight - h + "px";
  }

  _onChangeColor(callback, color) {
    callback(color);
    this.uiExtra.overallColor.setValue(__WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curWidgetColor, true);
    this.uiExtra.widgetColor.setValue(__WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curWidgetColor, true);
    this.uiExtra.backColor.setValue(__WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curBackgroundColor, true);
    this.uiExtra.textColor.setValue(__WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curTextColor, true);
  }

  addMenu(name) {
    var menu = new __WEBPACK_IMPORTED_MODULE_0_containers_Menu__["a" /* default */]();
    var li = document.createElement("li");
    li.setAttribute("onclick", "void(0)"); // iOS trick to trigger click on hover
    li.innerHTML = name || "";
    this.domUl.appendChild(li);
    li.appendChild(menu.domUl);
    menu._setDomContainer(li);
    return menu;
  }

  addUndoButton(name, callbackOrObject, key) {
    var widget = new __WEBPACK_IMPORTED_MODULE_2__widgets_undoButton__["a" /* default */](name, callbackOrObject, key);
    var domLine = this._addLine();
    domLine.appendChild(widget.domButton);
    widget._setDomContainer(domLine);
    return widget;
  }

  addRedoButton(name, callbackOrObject, key) {
    var widget = new __WEBPACK_IMPORTED_MODULE_3__widgets_redoButton__["a" /* default */](name, callbackOrObject, key);
    var domLine = this._addLine();
    domLine.appendChild(widget.domButton);
    widget._setDomContainer(domLine);
    return widget;
  }

  addExtra() {
    var cb = this._onChangeColor;
    var menu = this.addMenu("Extra UI");
    var ext = this.uiExtra;
    menu.addTitle("Overall");
    ext.overallColor = menu.addColor(
      "",
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curWidgetColor,
      cb.bind(this, __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */].changeOverallColor)
    );

    menu.addTitle("Advanced");
    ext.widgetColor = menu.addColor(
      "Widget",
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curWidgetColor,
      cb.bind(this, __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */].changeWidgetsColor)
    );
    ext.backColor = menu.addColor(
      "Back",
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curBackgroundColor,
      cb.bind(this, __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */].changeBackgroundColor)
    );
    ext.textColor = menu.addColor(
      "Text",
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curTextColor,
      cb.bind(this, __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */].changeTextColor)
    );
    ext.showBorder = menu.addCheckbox(
      "Border",
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */]._curShowBorder,
      __WEBPACK_IMPORTED_MODULE_1_utils_EditStyle__["a" /* default */].changeDisplayBoorder
    );
    return menu;
  }

  setVisibility(visible) {
    this.domTopbar.hidden = !visible;
    this.callbackResize();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Topbar);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_BaseContainer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgets_MenuButton__ = __webpack_require__(15);



class Menu extends __WEBPACK_IMPORTED_MODULE_0_containers_BaseContainer__["a" /* default */] {
  constructor() {
    super();

    this.domUl = document.createElement("ul");
  }

  addButton(name, callbackOrObject, shortcutOrKey, shortcut) {
    var widget = new __WEBPACK_IMPORTED_MODULE_1_widgets_MenuButton__["a" /* default */](callbackOrObject, shortcutOrKey, shortcut);
    var domLine = this._addLine(name);
    domLine.appendChild(widget.domSpan);
    widget._setDomContainer(domLine);
    return widget;
  }

  addSlider(name, valOrObject, callbackOrKey, min, max, step) {
    var wid = super.addSlider(name, valOrObject, callbackOrKey, min, max, step);
    // label 36% + slider ?% + 2% + input 18%
    wid.domInputText.style.width = "18%";
    wid.domSlider.style.width = name ? "44%" : "80%";
    return wid;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Menu);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class MenuButton extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {

  constructor(callbackOrObject, shortcutOrKey, shortcut) {
    super();

    var callback = callbackOrObject;
    if (callback && typeof callback !== 'function') callback = callbackOrObject[shortcutOrKey].bind(callbackOrObject);
    else shortcut = shortcutOrKey;

    this.domSpan = document.createElement('span');
    this.domSpan.className = 'shortcut';
    this.domSpan.innerHTML = shortcut || '';

    this.setCallback(callback);
  }

  _setDomContainer(container) {
    this.domContainer = container;
    container.addEventListener('click', this._onClick.bind(this));
  }

  _onClick() {
    if (this.callback) this.callback();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MenuButton);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__ = __webpack_require__(2);


var EditStyle = {};

EditStyle.refRules = {};

var yaguiSheet;
var findSheet = function () {
  if (yaguiSheet) return yaguiSheet;
  var sheets = document.styleSheets;
  for (var i = 0, nb = sheets.length; i < nb; ++i) {
    var href = sheets[i].href;
    if (href && href.indexOf('yagui.css') !== -1) {
      yaguiSheet = sheets[i];
      return yaguiSheet;
    }
  }
  return;
};

var editStyle = function (selector, key, value) {
  var sheet = findSheet();
  if (!sheet)
    return;
  var rules = sheet.cssRules || sheet.rules;
  var rule = EditStyle.refRules[selector];
  if (!rule) {
    var i = 0;
    var len = rules.length;
    for (i = 0; i < len; ++i) {
      if (rules[i].selectorText === selector) break;
    }
    if (i === len) return false;
    rule = EditStyle.refRules[selector] = rules[i];
  }
  if (rule)
    rule.style[key] = value;
};

EditStyle.changeWidgetsColor = function (color) {
  var str = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getStrColor(color);
  // button
  editStyle('.gui-button', 'background', str);
  // select
  editStyle('.gui-select', 'background', str);
  // slider
  editStyle('.gui-slider > div', 'background', str);
  EditStyle._curWidgetColor = color;
};

EditStyle.changeDisplayBoorder = function (bool) {
  var str = bool ? '1px solid #000' : '0';
  editStyle('.gui-button', 'border', str);
  // select
  editStyle('.gui-select', 'border', str);
  // slider
  editStyle('.gui-slider', 'border', str);
  editStyle('.gui-input-number', 'border', str);
  // folder
  editStyle('.gui-sidebar > ul > label', 'borderTop', str);
  editStyle('.gui-sidebar > ul > label', 'borderBottom', str);
  // side bar
  editStyle('.gui-sidebar', 'borderLeft', str);
  editStyle('.gui-sidebar', 'borderRight', str);
  // top bar
  editStyle('.gui-topbar', 'borderBottom', str);
  EditStyle._curShowBorder = bool;
};

EditStyle.changeBackgroundColor = function (color) {
  // side bar
  editStyle('.gui-sidebar', 'background', __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getStrColor(color));
  // top bar
  var colTop = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getStrColor(__WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getColorMult(color, 0.5));
  editStyle('.gui-topbar', 'background', colTop);
  editStyle('.gui-topbar ul > li > ul', 'background', colTop);
  EditStyle._curBackgroundColor = color;
};

EditStyle.changeTextColor = function (color) {
  var strColor = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getStrColor(color);
  editStyle('*', 'color', strColor);
  editStyle('.gui-sidebar > ul > label', 'color', strColor);
  EditStyle._curTextColor = color;
};

EditStyle.changeOverallColor = function (color) {
  EditStyle.changeWidgetsColor(color);
  var bgCol = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getColorMult(color, 0.5);
  bgCol.length = 3;
  EditStyle.changeBackgroundColor(bgCol);

  var texCol = __WEBPACK_IMPORTED_MODULE_0_utils_GuiUtils__["a" /* default */].getColorAdd(color, 0.5);
  for (var i = 0; i < 3; ++i) texCol[i] = Math.min(0.8, texCol[i]);
  EditStyle.changeTextColor(texCol);

  EditStyle._curWidgetColor = color;
  EditStyle._curBackgroundColor = bgCol;
  EditStyle._curTextColor = texCol;
};

// init value
EditStyle._curTextColor = [0.73, 0.73, 0.73, 1.0];
EditStyle._curWidgetColor = [0.17, 0.01, 0.34, 1.0];
// EditStyle._curBackgroundColor = [0.17, 0.01, 0.34, 1.0];
EditStyle._curShowBorder = false;

// EditStyle.changeOverallColor([0.34, 0.34, 0.34]);
// EditStyle.changeWidgetsColor([0.1058, 0.125, 0.3607]);
// EditStyle.changeBackgroundColor([0.34, 0.34, 0.34]);
// EditStyle.changeTextColor([0.8, 0.8, 0.8]);

/* harmony default export */ __webpack_exports__["a"] = (EditStyle);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class undoButton extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {
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

/* harmony default export */ __webpack_exports__["a"] = (undoButton);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__ = __webpack_require__(0);


class redoButton extends __WEBPACK_IMPORTED_MODULE_0_widgets_BaseWidget__["a" /* default */] {
  constructor(name, callbackOrObject, key) {
    super();

    var callback = key
      ? callbackOrObject[key].bind(callbackOrObject)
      : callbackOrObject;

    this.domButton = document.createElement("button");
    this.domButton.className = "gui-redobutton";
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

/* harmony default export */ __webpack_exports__["a"] = (redoButton);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9idWlsZC95YWd1aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDJjMTc2YzAzNmQwZWRhODY5NWYwIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL0Jhc2VXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQmFzZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvR3VpVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3lhZ3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9HdWlNYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvRm9sZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9Db2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9Db21ib2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVG9wYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvTWVudUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRWRpdFN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL3VuZG9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvcmVkb0J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ5YWd1aVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ5YWd1aVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmMxNzZjMDM2ZDBlZGE4Njk1ZjAiLCJjbGFzcyBCYXNlV2lkZ2V0IHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgX2dldEluaXRpYWxWYWx1ZSh2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2tPcktleSAhPT0gJ3N0cmluZycpIHJldHVybiB2YWxPck9iamVjdDtcbiAgICByZXR1cm4gdmFsT3JPYmplY3RbY2FsbGJhY2tPcktleV07XG4gIH1cblxuICBfZ2V0Q2hlY2tDYWxsYmFjayh2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2tPcktleSAhPT0gJ3N0cmluZycpIHJldHVybiBjYWxsYmFja09yS2V5O1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YWxPck9iamVjdFtjYWxsYmFja09yS2V5XSA9IHZhbDtcbiAgICB9O1xuICB9XG5cbiAgX3NldERvbUNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICB0aGlzLmRvbUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIHNldENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlKSB7XG4gICAgaWYgKCF0aGlzLmRvbUNvbnRhaW5lcikgcmV0dXJuO1xuICAgIHRoaXMuZG9tQ29udGFpbmVyLmhpZGRlbiA9ICF2aXNpYmxlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VXaWRnZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL0Jhc2VXaWRnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwid2lkZ2V0cy9CdXR0b25cIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJ3aWRnZXRzL0NoZWNrYm94XCI7XHJcbmltcG9ydCBDb2xvciBmcm9tIFwid2lkZ2V0cy9Db2xvclwiO1xyXG5pbXBvcnQgQ29tYm9ib3ggZnJvbSBcIndpZGdldHMvQ29tYm9ib3hcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwid2lkZ2V0cy9TbGlkZXJcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCJ3aWRnZXRzL1RpdGxlXCI7XHJcblxyXG4vLyBsYWJlbCA6IDM2JVxyXG4vLyBzbGlkZXIgOiBiYXIgNTIlICsgbWFyZ2luIDIlICsgaW5wdXQgMTAlXHJcbi8vIGNvbWJvYm94IDogNjQlXHJcbi8vIGNvbG9yIDogNjQlXHJcbmNsYXNzIEJhc2VDb250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgX2FkZExpbmUobmFtZSkge1xyXG4gICAgdmFyIGRvbUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBkb21MaW5lLmlubmVySFRNTCA9IG5hbWUgfHwgXCJcIjtcclxuICAgIHRoaXMuZG9tVWwuYXBwZW5kQ2hpbGQoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gZG9tTGluZTtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVMYWJlbChuYW1lKSB7XHJcbiAgICB2YXIgZG9tTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBkb21MYWJlbC5jbGFzc05hbWUgPSBcImd1aS1sYWJlbC1zaWRlXCI7XHJcbiAgICBkb21MYWJlbC5pbm5lckhUTUwgPSBuYW1lIHx8IFwiXCI7XHJcbiAgICByZXR1cm4gZG9tTGFiZWw7XHJcbiAgfVxyXG5cclxuICBfc2V0RG9tQ29udGFpbmVyKGNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5kb21Db250YWluZXIgPSBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBhZGRUaXRsZShuYW1lKSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IFRpdGxlKG5hbWUpO1xyXG4gICAgdGhpcy5kb21VbC5hcHBlbmRDaGlsZCh3aWRnZXQuZG9tVGV4dCk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hlY2tib3gobmFtZSwgdmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSBuZXcgQ2hlY2tib3godmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXkpO1xyXG4gICAgdmFyIGRvbUxpbmUgPSB0aGlzLl9hZGRMaW5lKCk7XHJcbiAgICBkb21MaW5lLmNsYXNzTmFtZSArPSBcIiBndWktcG9pbnRlck9uSG92ZXIgZ3VpLWdsb3dPbkhvdmVyXCI7XHJcbiAgICB2YXIgZG9tTGFiZWwgPSB0aGlzLl9jcmVhdGVMYWJlbChuYW1lKTtcclxuICAgIGRvbUxhYmVsLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBkb21MYWJlbC5jbGFzc05hbWUgKz0gXCIgZ3VpLXBvaW50ZXJPbkhvdmVyXCI7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKGRvbUxhYmVsKTtcclxuICAgIGRvbUxpbmUuYXBwZW5kQ2hpbGQod2lkZ2V0LmRvbUNoZWNrYm94KTtcclxuICAgIGRvbUxpbmUuYXBwZW5kQ2hpbGQod2lkZ2V0LmRvbUxhYmVsQ2hlY2tib3gpO1xyXG4gICAgZG9tTGluZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHdpZGdldC5fb25Nb3VzZURvd24uYmluZCh3aWRnZXQpKTtcclxuICAgIHdpZGdldC5fc2V0RG9tQ29udGFpbmVyKGRvbUxpbmUpO1xyXG4gICAgcmV0dXJuIHdpZGdldDtcclxuICB9XHJcblxyXG4gIGFkZENvbWJvYm94KG5hbWUsIHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5LCBvcHRpb25zKSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IENvbWJvYm94KHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5LCBvcHRpb25zKTtcclxuICAgIHZhciBkb21MaW5lID0gdGhpcy5fYWRkTGluZSgpO1xyXG4gICAgaWYgKG5hbWUpIGRvbUxpbmUuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTGFiZWwobmFtZSkpO1xyXG4gICAgZWxzZSB3aWRnZXQuZG9tU2VsZWN0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKHdpZGdldC5kb21TZWxlY3QpO1xyXG4gICAgd2lkZ2V0Ll9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkU2xpZGVyKG5hbWUsIHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5LCBtaW4sIG1heCwgc3RlcCkge1xyXG4gICAgdmFyIHdpZGdldCA9IG5ldyBTbGlkZXIodmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXksIG1pbiwgbWF4LCBzdGVwKTtcclxuICAgIHZhciBkb21MaW5lID0gdGhpcy5fYWRkTGluZSgpO1xyXG4gICAgaWYgKG5hbWUpIGRvbUxpbmUuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTGFiZWwobmFtZSkpO1xyXG4gICAgZG9tTGluZS5hcHBlbmRDaGlsZCh3aWRnZXQuZG9tSW5wdXRUZXh0KTtcclxuICAgIGRvbUxpbmUuYXBwZW5kQ2hpbGQod2lkZ2V0LmRvbVNsaWRlcik7XHJcbiAgICB3aWRnZXQuX3NldERvbUNvbnRhaW5lcihkb21MaW5lKTtcclxuICAgIHJldHVybiB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICBhZGRDb2xvcihuYW1lLCB2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IG5ldyBDb2xvcih2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSk7XHJcbiAgICB2YXIgZG9tTGluZSA9IHRoaXMuX2FkZExpbmUoKTtcclxuICAgIGlmIChuYW1lKSBkb21MaW5lLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUxhYmVsKG5hbWUpKTtcclxuICAgIGVsc2Ugd2lkZ2V0LmRvbUNvbG9yLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKHdpZGdldC5kb21Db2xvcik7XHJcbiAgICB3aWRnZXQuX3NldERvbUNvbnRhaW5lcihkb21MaW5lKTtcclxuICAgIHJldHVybiB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICBhZGRCdXR0b24obmFtZSwgY2FsbGJhY2tPck9iamVjdCwga2V5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IEJ1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpO1xyXG4gICAgdmFyIGRvbUxpbmUgPSB0aGlzLl9hZGRMaW5lKCk7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKHdpZGdldC5kb21CdXR0b24pO1xyXG4gICAgd2lkZ2V0Ll9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkRHVhbEJ1dHRvbihcclxuICAgIG5hbWUxLFxyXG4gICAgbmFtZTIsXHJcbiAgICBjYWxsYmFja09yT2JqZWN0MSxcclxuICAgIGNhbGxiYWNrT3JPYmplY3QyLFxyXG4gICAga2V5MSxcclxuICAgIGtleTJcclxuICApIHtcclxuICAgIHZhciB3aWRnZXQxID0gbmV3IEJ1dHRvbihuYW1lMSwgY2FsbGJhY2tPck9iamVjdDEsIGtleTEpO1xyXG4gICAgdmFyIHdpZGdldDIgPSBuZXcgQnV0dG9uKG5hbWUyLCBjYWxsYmFja09yT2JqZWN0Miwga2V5Mik7XHJcbiAgICB2YXIgZG9tTGluZSA9IHRoaXMuX2FkZExpbmUoKTtcclxuICAgIGRvbUxpbmUuYXBwZW5kQ2hpbGQod2lkZ2V0Mi5kb21CdXR0b24pO1xyXG4gICAgZG9tTGluZS5hcHBlbmRDaGlsZCh3aWRnZXQxLmRvbUJ1dHRvbik7XHJcbiAgICB2YXIgc3R5bGUxID0gd2lkZ2V0MS5kb21CdXR0b24uc3R5bGU7XHJcbiAgICB2YXIgc3R5bGUyID0gd2lkZ2V0Mi5kb21CdXR0b24uc3R5bGU7XHJcbiAgICBzdHlsZTEud2lkdGggPSBzdHlsZTIud2lkdGggPSBcIjQ5JVwiO1xyXG4gICAgc3R5bGUxLm1hcmdpblJpZ2h0ID0gc3R5bGUyLm1hcmdpbkxlZnQgPSBcIjElXCI7XHJcbiAgICB3aWRnZXQxLl9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICB3aWRnZXQyLl9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gW3dpZGdldDEsIHdpZGdldDJdO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9tQ29udGFpbmVyKSByZXR1cm47XHJcbiAgICB0aGlzLmRvbUNvbnRhaW5lci5oaWRkZW4gPSAhdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250YWluZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lcnMvQmFzZUNvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR3VpVXRpbHMgPSB7fTtcblxuR3VpVXRpbHMucmdiVG9Ic3YgPSBmdW5jdGlvbiAocmdiKSB7XG4gIHZhciByID0gcmdiWzBdO1xuICB2YXIgZyA9IHJnYlsxXTtcbiAgdmFyIGIgPSByZ2JbMl07XG4gIHZhciBtYXhSR0IgPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgdmFyIG1pblJHQiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICBpZiAobWluUkdCID09PSBtYXhSR0IpIHJldHVybiBbMCwgMCwgbWluUkdCXTtcbiAgdmFyIGQgPSAociA9PT0gbWluUkdCKSA/IGcgLSBiIDogKChiID09PSBtaW5SR0IpID8gciAtIGcgOiBiIC0gcik7XG4gIHZhciBoID0gKHIgPT09IG1pblJHQikgPyAzIDogKChiID09PSBtaW5SR0IpID8gMSA6IDUpO1xuICByZXR1cm4gWyhoIC0gZCAvIChtYXhSR0IgLSBtaW5SR0IpKSAvIDYsIChtYXhSR0IgLSBtaW5SR0IpIC8gbWF4UkdCLCBtYXhSR0JdO1xufTtcblxuR3VpVXRpbHMuaHN2VG9SZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG4gIHZhciBoID0gaHN2WzBdICogNjtcbiAgdmFyIHMgPSBoc3ZbMV07XG4gIHZhciB2ID0gaHN2WzJdO1xuICB2YXIgaSA9IE1hdGguZmxvb3IoaCk7XG4gIHZhciBmID0gaCAtIGk7XG4gIHZhciBwID0gdiAqICgxLjAgLSBzKTtcbiAgdmFyIHEgPSB2ICogKDEuMCAtIGYgKiBzKTtcbiAgdmFyIHQgPSB2ICogKDEuMCAtICgxLjAgLSBmKSAqIHMpO1xuICB2YXIgbW9kID0gaSAlIDY7XG4gIGlmIChtb2QgPT09IDApIHJldHVybiBbdiwgdCwgcF07XG4gIGVsc2UgaWYgKG1vZCA9PT0gMSkgcmV0dXJuIFtxLCB2LCBwXTtcbiAgZWxzZSBpZiAobW9kID09PSAyKSByZXR1cm4gW3AsIHYsIHRdO1xuICBlbHNlIGlmIChtb2QgPT09IDMpIHJldHVybiBbcCwgcSwgdl07XG4gIGVsc2UgaWYgKG1vZCA9PT0gNCkgcmV0dXJuIFt0LCBwLCB2XTtcbiAgZWxzZSByZXR1cm4gW3YsIHAsIHFdO1xufTtcblxuR3VpVXRpbHMuZ2V0VmFsaWRDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29sb3IubGVuZ3RoOyBpIDwgbGVuOyArK2kpIGNvbG9yW2ldID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIGNvbG9yW2ldKSk7XG4gIHJldHVybiBjb2xvcjtcbn07XG5cbkd1aVV0aWxzLmdldFN0ckNvbG9yID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHJldHVybiBHdWlVdGlscy5yZ2JUb0hleChjb2xvcik7XG4gIHJldHVybiAncmdiYSgnICsgTWF0aC5yb3VuZChjb2xvclswXSAqIDI1NSkgKyAnLCcgKyBNYXRoLnJvdW5kKGNvbG9yWzFdICogMjU1KSArICcsJyArIE1hdGgucm91bmQoY29sb3JbMl0gKiAyNTUpICsgJywnICsgY29sb3JbM10gKyAnKSc7XG59O1xuXG5HdWlVdGlscy5nZXRDb2xvck11bHQgPSBmdW5jdGlvbiAoY29sb3IsIGZhYykge1xuICB2YXIgb3V0ID0gW2NvbG9yWzBdICogZmFjLCBjb2xvclsxXSAqIGZhYywgY29sb3JbMl0gKiBmYWNdO1xuICBpZiAoY29sb3IubGVuZ3RoID09PSA0KSBvdXQucHVzaChjb2xvclszXSk7XG4gIHJldHVybiBHdWlVdGlscy5nZXRWYWxpZENvbG9yKG91dCk7XG59O1xuXG5HdWlVdGlscy5nZXRDb2xvckFkZCA9IGZ1bmN0aW9uIChjb2xvciwgYWRkKSB7XG4gIHZhciBvdXQgPSBbY29sb3JbMF0gKyBhZGQsIGNvbG9yWzFdICsgYWRkLCBjb2xvclsyXSArIGFkZF07XG4gIGlmIChjb2xvci5sZW5ndGggPT09IDQpIG91dC5wdXNoKGNvbG9yWzNdKTtcbiAgcmV0dXJuIEd1aVV0aWxzLmdldFZhbGlkQ29sb3Iob3V0KTtcbn07XG5cbkd1aVV0aWxzLnJnYlRvSGV4ID0gZnVuY3Rpb24gKHJnYikge1xuICB2YXIgaCA9ICcjJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyArK2kpIHtcbiAgICB2YXIgYyA9IE1hdGgucm91bmQocmdiW2ldICogMjU1KS50b1N0cmluZygxNik7XG4gICAgaCArPSBjLmxlbmd0aCA9PT0gMSA/ICcwJyArIGMgOiBjO1xuICB9XG4gIHJldHVybiBoO1xufTtcblxuR3VpVXRpbHMuaGV4VG9SZ2IgPSBmdW5jdGlvbiAoaGV4KSB7XG4gIHZhciBpID0gMDtcbiAgaWYgKGhleFswXSA9PT0gJyMnKSBoZXggPSBoZXguc2xpY2UoMSk7XG4gIHZhciBoID0gaGV4O1xuICBpZiAoaGV4Lmxlbmd0aCA+IDYpIGggPSBoZXguc2xpY2UoMCwgNik7XG4gIGVsc2UgaWYgKGhleC5sZW5ndGggPCA2KSB7XG4gICAgaCA9ICcnO1xuICAgIGZvciAoaSA9IDA7IGkgPCAzOyArK2kpXG4gICAgICBoICs9IGhleFtpXSA/IGhleFtpXSArIGhleFtpXSA6ICcwMCc7XG4gIH1cbiAgdmFyIGNvbCA9IFswLCAwLCAwXTtcbiAgZm9yIChpID0gMDsgaSA8IDM7ICsraSkge1xuICAgIHZhciBjID0gcGFyc2VJbnQoaFtpICogMl0gKyBoW2kgKiAyICsgMV0sIDE2KTtcbiAgICBjb2xbaV0gPSAoYyAhPT0gYyA/IDAgOiBjKSAvIDI1NTtcbiAgfVxuICByZXR1cm4gY29sO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3VpVXRpbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9HdWlVdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR3VpTWFpbiA9IHJlcXVpcmUoJ0d1aU1haW4nKS5kZWZhdWx0O1xuXG52YXIgeWFndWkgPSB7XG4gIEd1aU1haW46IEd1aU1haW5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geWFndWk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy95YWd1aS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU2lkZWJhciBmcm9tICdjb250YWluZXJzL1NpZGViYXInO1xuaW1wb3J0IFRvcGJhciBmcm9tICdjb250YWluZXJzL1RvcGJhcic7XG5cbmNsYXNzIEd1aU1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKHZpZXdwb3J0LCBjYWxsYmFja1Jlc2l6ZSkge1xuICAgIHRoaXMuZG9tTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcblxuICAgIHRoaXMuY2FsbGJhY2tSZXNpemUgPSBjYWxsYmFja1Jlc2l6ZTtcbiAgICBpZiAodGhpcy52aWV3cG9ydCkge1xuICAgICAgdGhpcy52aWV3cG9ydC5zdHlsZS53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICB0aGlzLnZpZXdwb3J0LnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgICB0aGlzLmNiUmVzaXplXyA9IHRoaXMuX29uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tTWFpbik7XG4gICAgdGhpcy5sZWZ0U2lkZWJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJpZ2h0U2lkZWJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcGJhciA9IHVuZGVmaW5lZDtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBfb25XaW5kb3dSZXNpemUoKSB7XG4gICAgaWYgKHRoaXMudmlld3BvcnQpIHtcbiAgICAgIHRoaXMudmlld3BvcnQuc3R5bGUud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgdGhpcy52aWV3cG9ydC5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMudmlld3BvcnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgdGhpcy52aWV3cG9ydC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgIGlmICh0aGlzLmxlZnRTaWRlYmFyKVxuICAgICAgICB0aGlzLmxlZnRTaWRlYmFyLl91cGRhdGVWaWV3cG9ydFBvc2l0aW9uKHRoaXMudmlld3BvcnQpO1xuICAgICAgaWYgKHRoaXMucmlnaHRTaWRlYmFyKVxuICAgICAgICB0aGlzLnJpZ2h0U2lkZWJhci5fdXBkYXRlVmlld3BvcnRQb3NpdGlvbih0aGlzLnZpZXdwb3J0KTtcbiAgICAgIGlmICh0aGlzLnRvcGJhcilcbiAgICAgICAgdGhpcy50b3BiYXIuX3VwZGF0ZVZpZXdwb3J0UG9zaXRpb24odGhpcy52aWV3cG9ydCk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVNpZGViYXJzUG9zaXRpb24oKTtcbiAgICBpZiAodGhpcy5jYWxsYmFja1Jlc2l6ZSlcbiAgICAgIHRoaXMuY2FsbGJhY2tSZXNpemUoKTtcbiAgfVxuXG4gIF91cGRhdGVTaWRlYmFyc1Bvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy50b3BiYXIpIHJldHVybjtcbiAgICB2YXIgb2ZmID0gdGhpcy50b3BiYXIuZG9tVG9wYmFyLm9mZnNldEhlaWdodDtcbiAgICBpZiAodGhpcy5sZWZ0U2lkZWJhcilcbiAgICAgIHRoaXMubGVmdFNpZGViYXIuX3NldFRvcChvZmYpO1xuICAgIGlmICh0aGlzLnJpZ2h0U2lkZWJhcilcbiAgICAgIHRoaXMucmlnaHRTaWRlYmFyLl9zZXRUb3Aob2ZmKTtcbiAgfVxuXG4gIGFkZExlZnRTaWRlYmFyKCkge1xuICAgIHRoaXMubGVmdFNpZGViYXIgPSBuZXcgU2lkZWJhcih0aGlzLmNiUmVzaXplXyk7XG4gICAgdmFyIGRvbVNpZGUgPSB0aGlzLmxlZnRTaWRlYmFyLmRvbVNpZGViYXI7XG4gICAgdGhpcy5kb21NYWluLmFwcGVuZENoaWxkKGRvbVNpZGUpO1xuICAgIHRoaXMuZG9tTWFpbi5hcHBlbmRDaGlsZCh0aGlzLmxlZnRTaWRlYmFyLmRvbVJlc2l6ZSk7XG5cbiAgICB0aGlzLl91cGRhdGVTaWRlYmFyc1Bvc2l0aW9uKCk7XG4gICAgdGhpcy5sZWZ0U2lkZWJhci5fdXBkYXRlVmlld3BvcnRQb3NpdGlvbih0aGlzLnZpZXdwb3J0KTtcbiAgICByZXR1cm4gdGhpcy5sZWZ0U2lkZWJhcjtcbiAgfVxuXG4gIGFkZFJpZ2h0U2lkZWJhcigpIHtcbiAgICB0aGlzLnJpZ2h0U2lkZWJhciA9IG5ldyBTaWRlYmFyKHRoaXMuY2JSZXNpemVfKTtcbiAgICB2YXIgZG9tU2lkZSA9IHRoaXMucmlnaHRTaWRlYmFyLmRvbVNpZGViYXI7XG4gICAgdGhpcy5kb21NYWluLmFwcGVuZENoaWxkKGRvbVNpZGUpO1xuICAgIHRoaXMuZG9tTWFpbi5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0U2lkZWJhci5kb21SZXNpemUpO1xuXG4gICAgdGhpcy5yaWdodFNpZGViYXIuX29uVGhlUmlnaHQoKTtcbiAgICB0aGlzLl91cGRhdGVTaWRlYmFyc1Bvc2l0aW9uKCk7XG4gICAgdGhpcy5yaWdodFNpZGViYXIuX3VwZGF0ZVZpZXdwb3J0UG9zaXRpb24odGhpcy52aWV3cG9ydCk7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRTaWRlYmFyO1xuICB9XG5cbiAgYWRkVG9wYmFyKCkge1xuICAgIHRoaXMudG9wYmFyID0gbmV3IFRvcGJhcih0aGlzLmNiUmVzaXplXyk7XG4gICAgdGhpcy5kb21NYWluLmFwcGVuZENoaWxkKHRoaXMudG9wYmFyLmRvbVRvcGJhcik7XG5cbiAgICB0aGlzLl91cGRhdGVTaWRlYmFyc1Bvc2l0aW9uKCk7XG4gICAgdGhpcy50b3BiYXIuX3VwZGF0ZVZpZXdwb3J0UG9zaXRpb24odGhpcy52aWV3cG9ydCk7XG4gICAgcmV0dXJuIHRoaXMudG9wYmFyO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlKSB7XG4gICAgdGhpcy5kb21NYWluLmhpZGRlbiA9ICF2aXNpYmxlO1xuICAgIHRoaXMuX29uV2luZG93UmVzaXplKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3VpTWFpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0d1aU1haW4uanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEZvbGRlciBmcm9tIFwiY29udGFpbmVycy9Gb2xkZXJcIjtcblxuY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrUmVzaXplKSB7XG4gICAgdGhpcy5kb21TaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRvbVNpZGViYXIuY2xhc3NOYW1lID0gXCJndWktc2lkZWJhclwiO1xuXG4gICAgdGhpcy5kb21SZXNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tUmVzaXplLmNsYXNzTmFtZSA9IFwiZ3VpLXJlc2l6ZVwiO1xuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tb3VzZVggPSAwO1xuICAgIHRoaXMuZG9tUmVzaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fb25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY2FsbGJhY2tSZXNpemUgPSBjYWxsYmFja1Jlc2l6ZTtcbiAgICB0aGlzLmlzT25UaGVSaWdodCA9IGZhbHNlO1xuICB9XG5cbiAgX3NldFRvcChuYikge1xuICAgIHRoaXMuZG9tU2lkZWJhci5zdHlsZS50b3AgPSB0aGlzLmRvbVJlc2l6ZS5zdHlsZS50b3AgPSBuYiArIFwicHhcIjtcbiAgfVxuXG4gIF9vblRoZVJpZ2h0KCkge1xuICAgIHRoaXMuaXNPblRoZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5kb21TaWRlYmFyLnN0eWxlLmxlZnQgPSAxO1xuICAgIHRoaXMuZG9tU2lkZWJhci5zdHlsZS5ib3JkZXJSaWdodCA9IDE7XG4gICAgdGhpcy5kb21TaWRlYmFyLnN0eWxlLmJvcmRlckxlZnQgPSAxO1xuICAgIHRoaXMuZG9tU2lkZWJhci5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCI7XG4gICAgdGhpcy5kb21SZXNpemUuc3R5bGUubGVmdCA9IDA7XG4gICAgdGhpcy5kb21SZXNpemUuc3R5bGUucmlnaHQgPSB0aGlzLmRvbVNpZGViYXIub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy5kb21SZXNpemUuc3R5bGUubWFyZ2luUmlnaHQgPSBcIi0zcHhcIjtcbiAgfVxuXG4gIF9vbk1vdXNlRG93bihldikge1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgdGhpcy5tb3VzZVggPSBldi5jbGllbnRYO1xuICB9XG5cbiAgX3VwZGF0ZVZpZXdwb3J0UG9zaXRpb24odmlld3BvcnQpIHtcbiAgICB2YXIgdyA9IHRoaXMuZG9tU2lkZWJhci5oaWRkZW4gPyAwIDogdGhpcy5kb21TaWRlYmFyLm9mZnNldFdpZHRoO1xuICAgIGlmICh0aGlzLmlzT25UaGVSaWdodCkge1xuICAgICAgdmlld3BvcnQuc3R5bGUud2lkdGggPSB2aWV3cG9ydC5jbGllbnRXaWR0aCAtIHcgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdwb3J0LnN0eWxlLmxlZnQgPSB0aGlzLmRvbVNpZGViYXIub2Zmc2V0TGVmdCArIHcgKyBcInB4XCI7XG4gICAgICB2aWV3cG9ydC5zdHlsZS53aWR0aCA9IHZpZXdwb3J0LmNsaWVudFdpZHRoIC0gdyArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICBfb25Nb3VzZU1vdmUoZXYpIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBtb3VzZVggPSBldi5jbGllbnRYO1xuICAgIHZhciBkZWx0YSA9IG1vdXNlWCAtIHRoaXMubW91c2VYO1xuICAgIGlmICh0aGlzLmlzT25UaGVSaWdodCkgZGVsdGEgPSAtZGVsdGE7XG4gICAgdmFyIHdpZHRoQmFyID0gTWF0aC5tYXgoNTAsIHRoaXMuZG9tU2lkZWJhci5vZmZzZXRXaWR0aCArIGRlbHRhKTtcblxuICAgIHZhciB2YWwgPSB3aWR0aEJhciArIFwicHhcIjtcbiAgICB0aGlzLmRvbVNpZGViYXIuc3R5bGUud2lkdGggPSB2YWw7XG4gICAgaWYgKHRoaXMuaXNPblRoZVJpZ2h0KVxuICAgICAgdGhpcy5kb21SZXNpemUuc3R5bGUucmlnaHQgPSB0aGlzLmRvbVNpZGViYXIub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgZWxzZSB0aGlzLmRvbVJlc2l6ZS5zdHlsZS5sZWZ0ID0gdmFsO1xuXG4gICAgdGhpcy5tb3VzZVggPSBtb3VzZVg7XG4gICAgdGhpcy5jYWxsYmFja1Jlc2l6ZSgpO1xuICB9XG5cbiAgX29uTW91c2VVcCgpIHtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZE1lbnUobmFtZSkge1xuICAgIHZhciBmb2xkZXIgPSBuZXcgRm9sZGVyKG5hbWUpO1xuICAgIHRoaXMuZG9tU2lkZWJhci5hcHBlbmRDaGlsZChmb2xkZXIuZG9tVWwpO1xuICAgIHJldHVybiBmb2xkZXI7XG4gIH1cblxuICBzZXRWaXNpYmlsaXR5KHZpc2libGUpIHtcbiAgICB0aGlzLmRvbVNpZGViYXIuaGlkZGVuID0gIXZpc2libGU7XG4gICAgdGhpcy5kb21SZXNpemUuaGlkZGVuID0gIXZpc2libGU7XG4gICAgdGhpcy5jYWxsYmFja1Jlc2l6ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL1NpZGViYXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VDb250YWluZXIgZnJvbSAnY29udGFpbmVycy9CYXNlQ29udGFpbmVyJztcblxuY2xhc3MgRm9sZGVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRvbVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0aGlzLmRvbVVsLnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgdHJ1ZSk7XG5cbiAgICB2YXIgZG9tVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRvbVRpdGxlLmlubmVySFRNTCA9IG5hbWUgfHwgJyc7XG5cbiAgICBkb21UaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZG9tVWwuYXBwZW5kQ2hpbGQoZG9tVGl0bGUpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIF9vbk1vdXNlRG93bigpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmRvbVVsLnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgdGhpcy5pc09wZW4pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5kb21VbC5zZXRBdHRyaWJ1dGUoJ29wZW5lZCcsIHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRvbVVsLnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgZmFsc2UpO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlKSB7XG4gICAgaWYgKCF2aXNpYmxlKSB0aGlzLmRvbVVsLnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgZmFsc2UpO1xuICAgIGVsc2UgaWYgKHRoaXMuaXNPcGVuKSB0aGlzLmRvbVVsLnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgdHJ1ZSk7XG4gICAgdGhpcy5kb21VbC5zdHlsZS5oZWlnaHQgPSB2aXNpYmxlID8gJ2F1dG8nIDogJzBweCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGFpbmVycy9Gb2xkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VXaWRnZXQgZnJvbSAnd2lkZ2V0cy9CYXNlV2lkZ2V0JztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgY2FsbGJhY2tPck9iamVjdCwga2V5KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHZhciBjYWxsYmFjayA9IGtleSA/IGNhbGxiYWNrT3JPYmplY3Rba2V5XS5iaW5kKGNhbGxiYWNrT3JPYmplY3QpIDogY2FsbGJhY2tPck9iamVjdDtcblxuICAgIHRoaXMuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5kb21CdXR0b24uY2xhc3NOYW1lID0gJ2d1aS1idXR0b24nO1xuICAgIHRoaXMuZG9tQnV0dG9uLmlubmVySFRNTCA9IG5hbWUgfHwgJyc7XG4gICAgdGhpcy5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5zZXRDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICBzZXRFbmFibGUoYm9vbCkge1xuICAgIHRoaXMuZG9tQnV0dG9uLmRpc2FibGVkID0gYm9vbCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhYm9vbDtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvd2lkZ2V0cy9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VXaWRnZXQgZnJvbSAnd2lkZ2V0cy9CYXNlV2lkZ2V0JztcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICBjb25zdHJ1Y3Rvcih2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9nZXRJbml0aWFsVmFsdWUodmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXkpO1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2dldENoZWNrQ2FsbGJhY2sodmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXkpO1xuICAgIHRoaXMuZG9tQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZG9tQ2hlY2tib3guY2xhc3NOYW1lID0gJ2d1aS1pbnB1dC1jaGVja2JveCc7XG4gICAgdGhpcy5kb21DaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIHRoaXMuZG9tTGFiZWxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlID09PSB1bmRlZmluZWQgPyB0cnVlIDogdmFsdWUpO1xuICAgIHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgX29uTW91c2VEb3duKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoIXRoaXMuZG9tQ2hlY2tib3guY2hlY2tlZCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwsIGlnbm9yZUNCKSB7XG4gICAgdGhpcy5kb21DaGVja2JveC5jaGVja2VkID0gdmFsO1xuICAgIGlmICghaWdub3JlQ0IgJiYgdGhpcy5jYWxsYmFjaykgdGhpcy5jYWxsYmFjayh2YWwpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tQ2hlY2tib3guY2hlY2tlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3dpZGdldHMvQ2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEd1aVV0aWxzIGZyb20gJ3V0aWxzL0d1aVV0aWxzJztcbmltcG9ydCBCYXNlV2lkZ2V0IGZyb20gJ3dpZGdldHMvQmFzZVdpZGdldCc7XG5cbnZhciB2ZW5kb3JzID0gWyctbW96LScsICctby0nLCAnLXdlYmtpdC0nLCAnLW1zLScsICcnXTtcbnZhciB1cmxBbHBoYSA9ICd1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQUlBQUFCTGJTbmNBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQUNoSlJFRlVlTnBpUEhQbURBTU1HQnNidzlsTUREZ0E2UktNJTJGJTJGJTJGJTJGaDNQT25qMUxDenNBQWd3QVF0WUljRmZFeXprQUFBQUFTVVZPUks1Q1lJSSUzRFwiKSc7XG5cbmNsYXNzIENvbG9yIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgY29uc3RydWN0b3IodmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXkpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fZ2V0SW5pdGlhbFZhbHVlKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9nZXRDaGVja0NhbGxiYWNrKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICBpZiAodmFsdWUpIHRoaXMuY29sb3IgPSBHdWlVdGlscy5nZXRWYWxpZENvbG9yKHZhbHVlLnNsaWNlKCkpO1xuICAgIGVsc2UgdGhpcy5jb2xvciA9IFsxLjAsIDAuMCwgMC4wXTtcblxuICAgIC8vIGNvbnRhaW5lclxuICAgIHRoaXMuZG9tQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbUNvbG9yLmNsYXNzTmFtZSA9ICdndWktd2lkZ2V0LWNvbG9yJztcblxuICAgIC8vIGlucHV0IHRleHRcbiAgICB0aGlzLmRvbUlucHV0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZG9tUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGh1ZSBwaWNrZXJcbiAgICB0aGlzLmRvbUh1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tSHVlLmNsYXNzTmFtZSA9ICdndWktY29sb3ItaHVlJztcbiAgICB0aGlzLmRvbUh1ZUtub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbUh1ZUtub2IuY2xhc3NOYW1lID0gJ2d1aS1rbm9iLWh1ZSc7XG5cbiAgICAvLyBzYXR1cmF0aW9uIHBpY2tlclxuICAgIHRoaXMuZG9tU2F0dXJhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tU2F0dXJhdGlvbi5jbGFzc05hbWUgPSAnZ3VpLWNvbG9yLXNhdHVyYXRpb24nO1xuICAgIHZhciB6QWxwaGFTYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbVNhdHVyYXRpb24uYXBwZW5kQ2hpbGQoekFscGhhU2F0KTtcbiAgICB0aGlzLmRvbVNhdHVyYXRpb25Lbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kb21TYXR1cmF0aW9uS25vYi5jbGFzc05hbWUgPSAnZ3VpLWtub2Itc2F0dXJhdGlvbic7XG5cbiAgICB0aGlzLmRvbUh1ZS5hcHBlbmRDaGlsZCh0aGlzLmRvbUh1ZUtub2IpO1xuICAgIHRoaXMuZG9tUG9wdXAuYXBwZW5kQ2hpbGQodGhpcy5kb21TYXR1cmF0aW9uS25vYik7XG4gICAgdGhpcy5kb21Qb3B1cC5hcHBlbmRDaGlsZCh0aGlzLmRvbVNhdHVyYXRpb24pO1xuICAgIHRoaXMuZG9tUG9wdXAuYXBwZW5kQ2hpbGQodGhpcy5kb21IdWUpO1xuICAgIHRoaXMuZG9tQ29sb3IuYXBwZW5kQ2hpbGQodGhpcy5kb21JbnB1dENvbG9yKTtcbiAgICB0aGlzLmRvbUNvbG9yLmFwcGVuZENoaWxkKHRoaXMuZG9tUG9wdXApO1xuXG4gICAgdGhpcy5faHVlR3JhZGllbnQodGhpcy5kb21IdWUpO1xuICAgIHRoaXMuX2xpbmVhckdyYWRpZW50KHpBbHBoYVNhdCwgJ3RvcCcsICdyZ2JhKDAsMCwwLDApJywgJyMwMDAnKTtcblxuICAgIHRoaXMuZG9tQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uSW5wdXREb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZG9tU2F0dXJhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vblNhdHVyYXRpb25Eb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZG9tSHVlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uSHVlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gYWxwaGEgcGlja2VyXG4gICAgdGhpcy5oYXNBbHBoYSA9IHRoaXMuY29sb3IubGVuZ3RoID09PSA0O1xuICAgIHRoaXMuYWxwaGEgPSAxLjA7XG4gICAgaWYgKHRoaXMuaGFzQWxwaGEpIHtcbiAgICAgIHRoaXMuZG9tUG9wdXAuc3R5bGUud2lkdGggPSAnMTQycHgnO1xuICAgICAgdGhpcy5kb21BbHBoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kb21BbHBoYS5jbGFzc05hbWUgPSAnZ3VpLWNvbG9yLWFscGhhJztcbiAgICAgIHRoaXMuZG9tQWxwaGFLbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRvbUFscGhhS25vYi5jbGFzc05hbWUgPSAnZ3VpLWtub2ItYWxwaGEnO1xuXG4gICAgICB0aGlzLl9hbHBoYUdyYWRpZW50KHRoaXMuZG9tQWxwaGEsICd0b3AnLCAncmdiYSgwLDAsMCwxLjApJywgJ3JnYmEoMCwwLDAsMC4wKScpO1xuXG4gICAgICB0aGlzLmRvbUFscGhhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uQWxwaGFEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kb21BbHBoYS5hcHBlbmRDaGlsZCh0aGlzLmRvbUFscGhhS25vYik7XG4gICAgICB0aGlzLmRvbVBvcHVwLmFwcGVuZENoaWxkKHRoaXMuZG9tQWxwaGEpO1xuICAgIH1cblxuICAgIHRoaXMuZWRpdEh1ZSA9IHRoaXMuZWRpdFNhdHVyYXRpb24gPSB0aGlzLmVkaXRBbHBoYSA9IGZhbHNlO1xuICAgIHRoaXMud2lkZ2V0SGVpZ2h0ID0gdGhpcy53aWRnZXRXaWR0aCA9IDEwMDtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuY29sb3IpO1xuICAgIHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgX29uSW5wdXREb3duKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKVxuICAgICAgdGhpcy5zZXRWYWx1ZShHdWlVdGlscy5oZXhUb1JnYihldi50YXJnZXQudmFsdWUpKTtcbiAgfVxuXG4gIF9vblVwZGF0ZVNhdHVyYXRpb24oZXYpIHtcbiAgICB2YXIgcmVjdCA9IHRoaXMuZG9tU2F0dXJhdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaHN2ID0gR3VpVXRpbHMucmdiVG9Ic3YodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICBoc3ZbMV0gPSBNYXRoLm1pbigxLjAsIE1hdGgubWF4KDAuMCwgKGV2LmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCkpO1xuICAgIGhzdlsyXSA9IE1hdGgubWluKDEuMCwgTWF0aC5tYXgoMC4wLCAxLjAgLSAoZXYuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3Qud2lkdGgpKTtcbiAgICB0aGlzLnNldFZhbHVlKEd1aVV0aWxzLmhzdlRvUmdiKGhzdiksIGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVHdWkoKTtcbiAgfVxuXG4gIF9vblVwZGF0ZUh1ZShldikge1xuICAgIHZhciByZWN0ID0gdGhpcy5kb21IdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhzdiA9IEd1aVV0aWxzLnJnYlRvSHN2KHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgaHN2WzBdID0gTWF0aC5taW4oMS4wLCBNYXRoLm1heCgwLjAsIDEuMCAtIChldi5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQpKTtcbiAgICB0aGlzLnNldFZhbHVlKEd1aVV0aWxzLmhzdlRvUmdiKGhzdiksIGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVHdWkoKTtcbiAgfVxuXG4gIF9vblVwZGF0ZUFscGhhKGV2KSB7XG4gICAgdmFyIHJlY3QgPSB0aGlzLmRvbUFscGhhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBjb2wgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29sWzNdID0gdGhpcy5hbHBoYSA9IE1hdGgubWluKDEuMCwgTWF0aC5tYXgoMC4wLCAxLjAgLSAoZXYuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0KSk7XG4gICAgdGhpcy5zZXRWYWx1ZShjb2wsIGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVHdWkoKTtcbiAgfVxuXG4gIF91cGRhdGVHdWkoKSB7XG4gICAgdmFyIGNvbG9yID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHZhciBoc3YgPSBHdWlVdGlscy5yZ2JUb0hzdihjb2xvcik7XG5cbiAgICB0aGlzLmRvbVNhdHVyYXRpb25Lbm9iLnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLndpZGdldFdpZHRoICogaHN2WzFdIC0gNyArICdweCc7XG4gICAgdGhpcy5kb21TYXR1cmF0aW9uS25vYi5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLndpZGdldEhlaWdodCAqICgxLjAgLSBoc3ZbMl0pIC0gNyArICdweCc7XG5cbiAgICBoc3ZbMV0gPSBoc3ZbMl0gPSAxLjA7XG4gICAgdGhpcy5fbGluZWFyR3JhZGllbnQodGhpcy5kb21TYXR1cmF0aW9uLCAnbGVmdCcsICcjZmZmJywgR3VpVXRpbHMuZ2V0U3RyQ29sb3IoR3VpVXRpbHMuaHN2VG9SZ2IoaHN2KSkpO1xuXG4gICAgdGhpcy5kb21IdWVLbm9iLnN0eWxlLm1hcmdpblRvcCA9ICgxLjAgLSBoc3ZbMF0pICogdGhpcy53aWRnZXRIZWlnaHQgKyAncHgnO1xuXG4gICAgaWYgKHRoaXMuaGFzQWxwaGEgJiYgY29sb3JbM10gIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuZG9tQWxwaGFLbm9iLnN0eWxlLm1hcmdpblRvcCA9ICgxLjAgLSB0aGlzLmFscGhhKSAqIHRoaXMud2lkZ2V0SGVpZ2h0ICsgJ3B4JztcbiAgfVxuXG4gIF9vbk1vdXNlTW92ZShldikge1xuICAgIGlmICghdGhpcy5lZGl0U2F0dXJhdGlvbiAmJiAhdGhpcy5lZGl0SHVlICYmICF0aGlzLmVkaXRBbHBoYSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmVkaXRTYXR1cmF0aW9uKSByZXR1cm4gdGhpcy5fb25VcGRhdGVTYXR1cmF0aW9uKGV2KTtcbiAgICBpZiAodGhpcy5lZGl0SHVlKSByZXR1cm4gdGhpcy5fb25VcGRhdGVIdWUoZXYpO1xuICAgIGlmICh0aGlzLmVkaXRBbHBoYSkgcmV0dXJuIHRoaXMuX29uVXBkYXRlQWxwaGEoZXYpO1xuICB9XG5cbiAgX29uU2F0dXJhdGlvbkRvd24oZXYpIHtcbiAgICB0aGlzLmVkaXRTYXR1cmF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdXNlTW92ZShldik7XG4gIH1cblxuICBfb25IdWVEb3duKGV2KSB7XG4gICAgdGhpcy5lZGl0SHVlID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdXNlTW92ZShldik7XG4gIH1cblxuICBfb25BbHBoYURvd24oZXYpIHtcbiAgICB0aGlzLmVkaXRBbHBoYSA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VzZU1vdmUoZXYpO1xuICB9XG5cbiAgX29uTW91c2VVcCgpIHtcbiAgICB0aGlzLmVkaXRIdWUgPSB0aGlzLmVkaXRTYXR1cmF0aW9uID0gdGhpcy5lZGl0QWxwaGEgPSBmYWxzZTtcbiAgfVxuXG4gIF9odWVHcmFkaWVudChkb20pIHtcbiAgICBkb20uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdmVuZG9ycy5sZW5ndGg7IGkgPCBsOyArK2kpXG4gICAgICBkb20uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogJyArIHZlbmRvcnNbaV0gKyAnbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsICNmZjAwZmYgMTclLCAjMDAwMGZmIDM0JSwgIzAwZmZmZiA1MCUsICMwMGZmMDAgNjclLCAjZmZmZjAwIDg0JSwgI2ZmMDAwMCAxMDAlKTsnO1xuICB9XG5cbiAgX2FscGhhR3JhZGllbnQoZG9tLCBkaXIsIGNvbDEsIGNvbDIpIHtcbiAgICBkb20uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdmVuZG9ycy5sZW5ndGg7IGkgPCBsOyArK2kpXG4gICAgICBkb20uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogJyArIHZlbmRvcnNbaV0gKyAnbGluZWFyLWdyYWRpZW50KCcgKyBkaXIgKyAnLCAnICsgY29sMSArICcsJyArIGNvbDIgKyAnKSwnICsgdXJsQWxwaGEgKyAnOyc7XG4gIH1cblxuICBfbGluZWFyR3JhZGllbnQoZG9tLCBkaXIsIGNvbDEsIGNvbDIpIHtcbiAgICBkb20uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdmVuZG9ycy5sZW5ndGg7IGkgPCBsOyArK2kpXG4gICAgICBkb20uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogJyArIHZlbmRvcnNbaV0gKyAnbGluZWFyLWdyYWRpZW50KCcgKyBkaXIgKyAnLCAnICsgY29sMSArICcgMCUsICcgKyBjb2wyICsgJyAxMDAlKTsnO1xuICB9XG5cbiAgc2V0VmFsdWUoY29sb3IsIGlnbm9yZUNCLCBpZ25vcmVVSSkge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICBmb3IgKHZhciBpID0gMCwgbmJDID0gY29sb3IubGVuZ3RoOyBpIDwgbmJDOyArK2kpXG4gICAgICBjW2ldID0gY29sb3JbaV07XG5cbiAgICB2YXIgaGV4ID0gR3VpVXRpbHMucmdiVG9IZXgoY29sb3IpO1xuICAgIHRoaXMuZG9tSW5wdXRDb2xvci52YWx1ZSA9IGhleDtcbiAgICBpZiAodGhpcy5oYXNBbHBoYSkge1xuICAgICAgaWYgKGNvbG9yLmxlbmd0aCA+PSA0KSB0aGlzLmFscGhhID0gY29sb3JbM107XG4gICAgICBlbHNlIGNvbG9yLnB1c2godGhpcy5hbHBoYSk7XG4gICAgICB2YXIgY29sID0gJ3JnYmEoJyArIHBhcnNlSW50KGNvbG9yWzBdICogMjU1LCAxMCkgKyAnLCcgKyBwYXJzZUludChjb2xvclsxXSAqIDI1NSwgMTApICsgJywnICsgcGFyc2VJbnQoY29sb3JbMl0gKiAyNTUsIDEwKSArICcsJyArIHRoaXMuYWxwaGEgKyAnKSc7XG4gICAgICB0aGlzLl9hbHBoYUdyYWRpZW50KHRoaXMuZG9tSW5wdXRDb2xvciwgJzBkZWcnLCBjb2wsIGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tSW5wdXRDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gaGV4O1xuICAgIH1cblxuICAgIC8vIGNvbG9yIG9mIHRleHRcbiAgICB2YXIgaHN2ID0gR3VpVXRpbHMucmdiVG9Ic3YoY29sb3IpO1xuICAgIHRoaXMuZG9tU2F0dXJhdGlvbktub2Iuc3R5bGUuYm9yZGVyQ29sb3IgPSAoaHN2WzJdIDwgMC41IHx8IGhzdlsxXSA+IDAuNSkgPyAnI2ZmZicgOiAnIzAwMCc7XG4gICAgdGhpcy5kb21JbnB1dENvbG9yLnN0eWxlLmNvbG9yID0gKHRoaXMuYWxwaGEgPiAwLjIgJiYgKGhzdlsyXSA8IDAuNSB8fCBoc3ZbMV0gPiAwLjUpKSA/ICcjZmZmJyA6ICcjMDAwJztcbiAgICBpZiAoIWlnbm9yZVVJKSB0aGlzLl91cGRhdGVHdWkoKTtcbiAgICBpZiAoIWlnbm9yZUNCICYmIHRoaXMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2soY29sb3IpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL0NvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlV2lkZ2V0IGZyb20gJ3dpZGdldHMvQmFzZVdpZGdldCc7XG5cbmNsYXNzIENvbWJvYm94IGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgY29uc3RydWN0b3IodmFsT3JPYmplY3QsIGNhbGxiYWNrT3JLZXksIG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fZ2V0SW5pdGlhbFZhbHVlKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9nZXRDaGVja0NhbGxiYWNrKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IG9wdGlvbnNbMF07XG5cbiAgICB0aGlzLmlzQXJyYXkgPSBvcHRpb25zLmxlbmd0aCAhPT0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5kb21TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmRvbVNlbGVjdC5jbGFzc05hbWUgPSAnZ3VpLXNlbGVjdCc7XG4gICAgdGhpcy5hZGRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5kb21TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICBfcGFyc2VWYWx1ZSh2YWwpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FycmF5ID8gcGFyc2VJbnQodmFsLCAxMCkgOiB2YWw7XG4gIH1cblxuICBfb25DaGFuZ2UoZXYpIHtcbiAgICB0aGlzLnNldFZhbHVlKGV2LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBhZGRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0LmlubmVySFRNTCA9IG9wdGlvbnNba2V5c1tpXV07XG4gICAgICBvcHQudmFsdWUgPSBrZXlzW2ldO1xuICAgICAgdGhpcy5kb21TZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwsIGlnbm9yZUNCKSB7XG4gICAgdGhpcy5kb21TZWxlY3QudmFsdWUgPSB2YWw7XG4gICAgaWYgKCFpZ25vcmVDQiAmJiB0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKHRoaXMuX3BhcnNlVmFsdWUodmFsKSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VWYWx1ZSh0aGlzLmRvbVNlbGVjdC52YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tYm9ib3g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL0NvbWJvYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVdpZGdldCBmcm9tICd3aWRnZXRzL0Jhc2VXaWRnZXQnO1xuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICBjb25zdHJ1Y3Rvcih2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSwgbWluLCBtYXgsIHN0ZXApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fZ2V0SW5pdGlhbFZhbHVlKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9nZXRDaGVja0NhbGxiYWNrKHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5KTtcbiAgICB2YWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IDEwMDtcbiAgICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDA7XG4gICAgbWF4ID0gbWF4ICE9PSB1bmRlZmluZWQgPyBtYXggOiAyMDA7XG4gICAgc3RlcCA9IHN0ZXAgIT09IHVuZGVmaW5lZCA/IHN0ZXAgOiAxO1xuXG4gICAgLy8gc2xpZGVyXG4gICAgdGhpcy5kb21TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbVNsaWRlci5jbGFzc05hbWUgPSAnZ3VpLXNsaWRlcic7XG4gICAgdGhpcy5kb21TbGlkZXJGaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kb21TbGlkZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21TbGlkZXJGaWxsKTtcblxuICAgIC8vIHRleHQgaW5wdXRcbiAgICB0aGlzLmRvbUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5kb21JbnB1dFRleHQuY2xhc3NOYW1lID0gJ2d1aS1pbnB1dC1udW1iZXInO1xuICAgIHRoaXMuZG9tSW5wdXRUZXh0LnR5cGUgPSAnbnVtYmVyJztcbiAgICB0aGlzLm1pbiA9IHRoaXMuZG9tSW5wdXRUZXh0Lm1pbiA9IG1pbjtcbiAgICB0aGlzLm1heCA9IHRoaXMuZG9tSW5wdXRUZXh0Lm1heCA9IG1heDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLmRvbUlucHV0VGV4dC5zdGVwID0gc3RlcDtcblxuICAgIHRoaXMuZG9tSW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kb21JbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fb25JbnB1dFRleHQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kb21JbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uSW5wdXRUZXh0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZG9tU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcyksIHRydWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnNldENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIF9vbklucHV0VGV4dChldikge1xuICAgIHZhciB2YWwgPSBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKHZhbCAhPT0gdmFsIHx8IHZhbCA9PT0gdGhpcy5sYXN0VmFsdWUpIHJldHVybjtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gIH1cblxuICBfb25LZXlEb3duKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2LndoaWNoID09PSAxMykgLy8gZW50ZXJcbiAgICAgIHRoaXMuZG9tSW5wdXRUZXh0LmJsdXIoKTtcbiAgfVxuXG4gIF9vbk1vdXNlTW92ZShldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmlzRG93bilcbiAgICAgIHJldHVybjtcbiAgICB2YXIgcmVjdCA9IHRoaXMuZG9tU2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB2YWwgPSB0aGlzLm1pbiArICh0aGlzLm1heCAtIHRoaXMubWluKSAqICgoZXYuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gIH1cblxuICBfb25Nb3VzZURvd24oZXYpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VzZU1vdmUoZXYpO1xuICB9XG5cbiAgX29uTW91c2VVcCgpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICB9XG5cbiAgX3NldERvbUNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICB0aGlzLmRvbUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuZG9tSW5wdXRUZXh0LnZhbHVlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbCwgaWdub3JlQ0IpIHtcbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbDtcbiAgICB2YWwgPSBNYXRoLm1heChNYXRoLm1pbih2YWwsIHRoaXMubWF4KSwgdGhpcy5taW4pO1xuICAgIHZhbCA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcDtcbiAgICB0aGlzLmRvbUlucHV0VGV4dC52YWx1ZSA9IHZhbDtcbiAgICB2YXIgcGVyID0gdGhpcy5taW47XG4gICAgaWYgKHRoaXMubWF4ICE9PSB0aGlzLm1pbikgcGVyID0gKHZhbCAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICB0aGlzLmRvbVNsaWRlckZpbGwuc3R5bGUud2lkdGggPSAxMDAgKiBwZXIgKyAnJSc7XG4gICAgaWYgKCFpZ25vcmVDQiAmJiB0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKHZhbCk7XG4gIH1cblxuICBzZXRNYXgobWF4KSB7XG4gICAgdGhpcy5kb21JbnB1dFRleHQubWF4ID0gdGhpcy5tYXggPSBtYXg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNaW4obWluKSB7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvd2lkZ2V0cy9TbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlV2lkZ2V0IGZyb20gJ3dpZGdldHMvQmFzZVdpZGdldCc7XG5cbmNsYXNzIFRpdGxlIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRvbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbVRleHQuaW5uZXJIVE1MID0gbmFtZSB8fCAnJztcbiAgICB0aGlzLmRvbVRleHQuY2xhc3NOYW1lID0gJ2dyb3VwLXRpdGxlJztcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIHRoaXMuZG9tVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlKSB7XG4gICAgdGhpcy5kb21UZXh0LmhpZGRlbiA9ICF2aXNpYmxlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvd2lkZ2V0cy9UaXRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1lbnUgZnJvbSBcImNvbnRhaW5lcnMvTWVudVwiO1xyXG5pbXBvcnQgRWRpdFN0eWxlIGZyb20gXCJ1dGlscy9FZGl0U3R5bGVcIjtcclxuaW1wb3J0IHVuZG9CdXR0b24gZnJvbSBcIi4uL3dpZGdldHMvdW5kb0J1dHRvblwiO1xyXG5pbXBvcnQgcmVkb0J1dHRvbiBmcm9tIFwiLi4vd2lkZ2V0cy9yZWRvQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBUb3BiYXIge1xyXG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrUmVzaXplKSB7XHJcbiAgICB0aGlzLmRvbVRvcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmRvbVRvcGJhci5jbGFzc05hbWUgPSBcImd1aS10b3BiYXJcIjtcclxuXHJcbiAgICB0aGlzLmRvbVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdGhpcy5kb21Ub3BiYXIuYXBwZW5kQ2hpbGQodGhpcy5kb21VbCk7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFja1Jlc2l6ZSA9IGNhbGxiYWNrUmVzaXplO1xyXG4gICAgdGhpcy51aUV4dHJhID0ge307XHJcbiAgfVxyXG5cclxuICBfYWRkTGluZShuYW1lKSB7XHJcbiAgICB2YXIgZG9tTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGRvbUxpbmUuaW5uZXJIVE1MID0gbmFtZSB8fCBcIlwiO1xyXG4gICAgdGhpcy5kb21VbC5hcHBlbmRDaGlsZChkb21MaW5lKTtcclxuICAgIHJldHVybiBkb21MaW5lO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVZpZXdwb3J0UG9zaXRpb24odmlld3BvcnQpIHtcclxuICAgIHZhciBoID0gdGhpcy5kb21Ub3BiYXIuaGlkZGVuID8gMCA6IHRoaXMuZG9tVG9wYmFyLm9mZnNldEhlaWdodDtcclxuICAgIHZpZXdwb3J0LnN0eWxlLnRvcCA9IGggKyBcInB4XCI7XHJcbiAgICB2aWV3cG9ydC5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydC5jbGllbnRIZWlnaHQgLSBoICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlQ29sb3IoY2FsbGJhY2ssIGNvbG9yKSB7XHJcbiAgICBjYWxsYmFjayhjb2xvcik7XHJcbiAgICB0aGlzLnVpRXh0cmEub3ZlcmFsbENvbG9yLnNldFZhbHVlKEVkaXRTdHlsZS5fY3VyV2lkZ2V0Q29sb3IsIHRydWUpO1xyXG4gICAgdGhpcy51aUV4dHJhLndpZGdldENvbG9yLnNldFZhbHVlKEVkaXRTdHlsZS5fY3VyV2lkZ2V0Q29sb3IsIHRydWUpO1xyXG4gICAgdGhpcy51aUV4dHJhLmJhY2tDb2xvci5zZXRWYWx1ZShFZGl0U3R5bGUuX2N1ckJhY2tncm91bmRDb2xvciwgdHJ1ZSk7XHJcbiAgICB0aGlzLnVpRXh0cmEudGV4dENvbG9yLnNldFZhbHVlKEVkaXRTdHlsZS5fY3VyVGV4dENvbG9yLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGFkZE1lbnUobmFtZSkge1xyXG4gICAgdmFyIG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcInZvaWQoMClcIik7IC8vIGlPUyB0cmljayB0byB0cmlnZ2VyIGNsaWNrIG9uIGhvdmVyXHJcbiAgICBsaS5pbm5lckhUTUwgPSBuYW1lIHx8IFwiXCI7XHJcbiAgICB0aGlzLmRvbVVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKG1lbnUuZG9tVWwpO1xyXG4gICAgbWVudS5fc2V0RG9tQ29udGFpbmVyKGxpKTtcclxuICAgIHJldHVybiBtZW51O1xyXG4gIH1cclxuXHJcbiAgYWRkVW5kb0J1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSBuZXcgdW5kb0J1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpO1xyXG4gICAgdmFyIGRvbUxpbmUgPSB0aGlzLl9hZGRMaW5lKCk7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKHdpZGdldC5kb21CdXR0b24pO1xyXG4gICAgd2lkZ2V0Ll9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkUmVkb0J1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSBuZXcgcmVkb0J1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpO1xyXG4gICAgdmFyIGRvbUxpbmUgPSB0aGlzLl9hZGRMaW5lKCk7XHJcbiAgICBkb21MaW5lLmFwcGVuZENoaWxkKHdpZGdldC5kb21CdXR0b24pO1xyXG4gICAgd2lkZ2V0Ll9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkRXh0cmEoKSB7XHJcbiAgICB2YXIgY2IgPSB0aGlzLl9vbkNoYW5nZUNvbG9yO1xyXG4gICAgdmFyIG1lbnUgPSB0aGlzLmFkZE1lbnUoXCJFeHRyYSBVSVwiKTtcclxuICAgIHZhciBleHQgPSB0aGlzLnVpRXh0cmE7XHJcbiAgICBtZW51LmFkZFRpdGxlKFwiT3ZlcmFsbFwiKTtcclxuICAgIGV4dC5vdmVyYWxsQ29sb3IgPSBtZW51LmFkZENvbG9yKFxyXG4gICAgICBcIlwiLFxyXG4gICAgICBFZGl0U3R5bGUuX2N1cldpZGdldENvbG9yLFxyXG4gICAgICBjYi5iaW5kKHRoaXMsIEVkaXRTdHlsZS5jaGFuZ2VPdmVyYWxsQ29sb3IpXHJcbiAgICApO1xyXG5cclxuICAgIG1lbnUuYWRkVGl0bGUoXCJBZHZhbmNlZFwiKTtcclxuICAgIGV4dC53aWRnZXRDb2xvciA9IG1lbnUuYWRkQ29sb3IoXHJcbiAgICAgIFwiV2lkZ2V0XCIsXHJcbiAgICAgIEVkaXRTdHlsZS5fY3VyV2lkZ2V0Q29sb3IsXHJcbiAgICAgIGNiLmJpbmQodGhpcywgRWRpdFN0eWxlLmNoYW5nZVdpZGdldHNDb2xvcilcclxuICAgICk7XHJcbiAgICBleHQuYmFja0NvbG9yID0gbWVudS5hZGRDb2xvcihcclxuICAgICAgXCJCYWNrXCIsXHJcbiAgICAgIEVkaXRTdHlsZS5fY3VyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBjYi5iaW5kKHRoaXMsIEVkaXRTdHlsZS5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICApO1xyXG4gICAgZXh0LnRleHRDb2xvciA9IG1lbnUuYWRkQ29sb3IoXHJcbiAgICAgIFwiVGV4dFwiLFxyXG4gICAgICBFZGl0U3R5bGUuX2N1clRleHRDb2xvcixcclxuICAgICAgY2IuYmluZCh0aGlzLCBFZGl0U3R5bGUuY2hhbmdlVGV4dENvbG9yKVxyXG4gICAgKTtcclxuICAgIGV4dC5zaG93Qm9yZGVyID0gbWVudS5hZGRDaGVja2JveChcclxuICAgICAgXCJCb3JkZXJcIixcclxuICAgICAgRWRpdFN0eWxlLl9jdXJTaG93Qm9yZGVyLFxyXG4gICAgICBFZGl0U3R5bGUuY2hhbmdlRGlzcGxheUJvb3JkZXJcclxuICAgICk7XHJcbiAgICByZXR1cm4gbWVudTtcclxuICB9XHJcblxyXG4gIHNldFZpc2liaWxpdHkodmlzaWJsZSkge1xyXG4gICAgdGhpcy5kb21Ub3BiYXIuaGlkZGVuID0gIXZpc2libGU7XHJcbiAgICB0aGlzLmNhbGxiYWNrUmVzaXplKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BiYXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lcnMvVG9wYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZUNvbnRhaW5lciBmcm9tIFwiY29udGFpbmVycy9CYXNlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCJ3aWRnZXRzL01lbnVCdXR0b25cIjtcclxuXHJcbmNsYXNzIE1lbnUgZXh0ZW5kcyBCYXNlQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5kb21VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICB9XHJcblxyXG4gIGFkZEJ1dHRvbihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBzaG9ydGN1dE9yS2V5LCBzaG9ydGN1dCkge1xyXG4gICAgdmFyIHdpZGdldCA9IG5ldyBNZW51QnV0dG9uKGNhbGxiYWNrT3JPYmplY3QsIHNob3J0Y3V0T3JLZXksIHNob3J0Y3V0KTtcclxuICAgIHZhciBkb21MaW5lID0gdGhpcy5fYWRkTGluZShuYW1lKTtcclxuICAgIGRvbUxpbmUuYXBwZW5kQ2hpbGQod2lkZ2V0LmRvbVNwYW4pO1xyXG4gICAgd2lkZ2V0Ll9zZXREb21Db250YWluZXIoZG9tTGluZSk7XHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgYWRkU2xpZGVyKG5hbWUsIHZhbE9yT2JqZWN0LCBjYWxsYmFja09yS2V5LCBtaW4sIG1heCwgc3RlcCkge1xyXG4gICAgdmFyIHdpZCA9IHN1cGVyLmFkZFNsaWRlcihuYW1lLCB2YWxPck9iamVjdCwgY2FsbGJhY2tPcktleSwgbWluLCBtYXgsIHN0ZXApO1xyXG4gICAgLy8gbGFiZWwgMzYlICsgc2xpZGVyID8lICsgMiUgKyBpbnB1dCAxOCVcclxuICAgIHdpZC5kb21JbnB1dFRleHQuc3R5bGUud2lkdGggPSBcIjE4JVwiO1xyXG4gICAgd2lkLmRvbVNsaWRlci5zdHlsZS53aWR0aCA9IG5hbWUgPyBcIjQ0JVwiIDogXCI4MCVcIjtcclxuICAgIHJldHVybiB3aWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL01lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlV2lkZ2V0IGZyb20gJ3dpZGdldHMvQmFzZVdpZGdldCc7XG5cbmNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICBjb25zdHJ1Y3RvcihjYWxsYmFja09yT2JqZWN0LCBzaG9ydGN1dE9yS2V5LCBzaG9ydGN1dCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja09yT2JqZWN0O1xuICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gY2FsbGJhY2tPck9iamVjdFtzaG9ydGN1dE9yS2V5XS5iaW5kKGNhbGxiYWNrT3JPYmplY3QpO1xuICAgIGVsc2Ugc2hvcnRjdXQgPSBzaG9ydGN1dE9yS2V5O1xuXG4gICAgdGhpcy5kb21TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMuZG9tU3Bhbi5jbGFzc05hbWUgPSAnc2hvcnRjdXQnO1xuICAgIHRoaXMuZG9tU3Bhbi5pbm5lckhUTUwgPSBzaG9ydGN1dCB8fCAnJztcblxuICAgIHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgX3NldERvbUNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICB0aGlzLmRvbUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51QnV0dG9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvd2lkZ2V0cy9NZW51QnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR3VpVXRpbHMgZnJvbSAndXRpbHMvR3VpVXRpbHMnO1xuXG52YXIgRWRpdFN0eWxlID0ge307XG5cbkVkaXRTdHlsZS5yZWZSdWxlcyA9IHt9O1xuXG52YXIgeWFndWlTaGVldDtcbnZhciBmaW5kU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh5YWd1aVNoZWV0KSByZXR1cm4geWFndWlTaGVldDtcbiAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICBmb3IgKHZhciBpID0gMCwgbmIgPSBzaGVldHMubGVuZ3RoOyBpIDwgbmI7ICsraSkge1xuICAgIHZhciBocmVmID0gc2hlZXRzW2ldLmhyZWY7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKCd5YWd1aS5jc3MnKSAhPT0gLTEpIHtcbiAgICAgIHlhZ3VpU2hlZXQgPSBzaGVldHNbaV07XG4gICAgICByZXR1cm4geWFndWlTaGVldDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufTtcblxudmFyIGVkaXRTdHlsZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwga2V5LCB2YWx1ZSkge1xuICB2YXIgc2hlZXQgPSBmaW5kU2hlZXQoKTtcbiAgaWYgKCFzaGVldClcbiAgICByZXR1cm47XG4gIHZhciBydWxlcyA9IHNoZWV0LmNzc1J1bGVzIHx8IHNoZWV0LnJ1bGVzO1xuICB2YXIgcnVsZSA9IEVkaXRTdHlsZS5yZWZSdWxlc1tzZWxlY3Rvcl07XG4gIGlmICghcnVsZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gcnVsZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKHJ1bGVzW2ldLnNlbGVjdG9yVGV4dCA9PT0gc2VsZWN0b3IpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaSA9PT0gbGVuKSByZXR1cm4gZmFsc2U7XG4gICAgcnVsZSA9IEVkaXRTdHlsZS5yZWZSdWxlc1tzZWxlY3Rvcl0gPSBydWxlc1tpXTtcbiAgfVxuICBpZiAocnVsZSlcbiAgICBydWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcbn07XG5cbkVkaXRTdHlsZS5jaGFuZ2VXaWRnZXRzQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgdmFyIHN0ciA9IEd1aVV0aWxzLmdldFN0ckNvbG9yKGNvbG9yKTtcbiAgLy8gYnV0dG9uXG4gIGVkaXRTdHlsZSgnLmd1aS1idXR0b24nLCAnYmFja2dyb3VuZCcsIHN0cik7XG4gIC8vIHNlbGVjdFxuICBlZGl0U3R5bGUoJy5ndWktc2VsZWN0JywgJ2JhY2tncm91bmQnLCBzdHIpO1xuICAvLyBzbGlkZXJcbiAgZWRpdFN0eWxlKCcuZ3VpLXNsaWRlciA+IGRpdicsICdiYWNrZ3JvdW5kJywgc3RyKTtcbiAgRWRpdFN0eWxlLl9jdXJXaWRnZXRDb2xvciA9IGNvbG9yO1xufTtcblxuRWRpdFN0eWxlLmNoYW5nZURpc3BsYXlCb29yZGVyID0gZnVuY3Rpb24gKGJvb2wpIHtcbiAgdmFyIHN0ciA9IGJvb2wgPyAnMXB4IHNvbGlkICMwMDAnIDogJzAnO1xuICBlZGl0U3R5bGUoJy5ndWktYnV0dG9uJywgJ2JvcmRlcicsIHN0cik7XG4gIC8vIHNlbGVjdFxuICBlZGl0U3R5bGUoJy5ndWktc2VsZWN0JywgJ2JvcmRlcicsIHN0cik7XG4gIC8vIHNsaWRlclxuICBlZGl0U3R5bGUoJy5ndWktc2xpZGVyJywgJ2JvcmRlcicsIHN0cik7XG4gIGVkaXRTdHlsZSgnLmd1aS1pbnB1dC1udW1iZXInLCAnYm9yZGVyJywgc3RyKTtcbiAgLy8gZm9sZGVyXG4gIGVkaXRTdHlsZSgnLmd1aS1zaWRlYmFyID4gdWwgPiBsYWJlbCcsICdib3JkZXJUb3AnLCBzdHIpO1xuICBlZGl0U3R5bGUoJy5ndWktc2lkZWJhciA+IHVsID4gbGFiZWwnLCAnYm9yZGVyQm90dG9tJywgc3RyKTtcbiAgLy8gc2lkZSBiYXJcbiAgZWRpdFN0eWxlKCcuZ3VpLXNpZGViYXInLCAnYm9yZGVyTGVmdCcsIHN0cik7XG4gIGVkaXRTdHlsZSgnLmd1aS1zaWRlYmFyJywgJ2JvcmRlclJpZ2h0Jywgc3RyKTtcbiAgLy8gdG9wIGJhclxuICBlZGl0U3R5bGUoJy5ndWktdG9wYmFyJywgJ2JvcmRlckJvdHRvbScsIHN0cik7XG4gIEVkaXRTdHlsZS5fY3VyU2hvd0JvcmRlciA9IGJvb2w7XG59O1xuXG5FZGl0U3R5bGUuY2hhbmdlQmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gIC8vIHNpZGUgYmFyXG4gIGVkaXRTdHlsZSgnLmd1aS1zaWRlYmFyJywgJ2JhY2tncm91bmQnLCBHdWlVdGlscy5nZXRTdHJDb2xvcihjb2xvcikpO1xuICAvLyB0b3AgYmFyXG4gIHZhciBjb2xUb3AgPSBHdWlVdGlscy5nZXRTdHJDb2xvcihHdWlVdGlscy5nZXRDb2xvck11bHQoY29sb3IsIDAuNSkpO1xuICBlZGl0U3R5bGUoJy5ndWktdG9wYmFyJywgJ2JhY2tncm91bmQnLCBjb2xUb3ApO1xuICBlZGl0U3R5bGUoJy5ndWktdG9wYmFyIHVsID4gbGkgPiB1bCcsICdiYWNrZ3JvdW5kJywgY29sVG9wKTtcbiAgRWRpdFN0eWxlLl9jdXJCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbn07XG5cbkVkaXRTdHlsZS5jaGFuZ2VUZXh0Q29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgdmFyIHN0ckNvbG9yID0gR3VpVXRpbHMuZ2V0U3RyQ29sb3IoY29sb3IpO1xuICBlZGl0U3R5bGUoJyonLCAnY29sb3InLCBzdHJDb2xvcik7XG4gIGVkaXRTdHlsZSgnLmd1aS1zaWRlYmFyID4gdWwgPiBsYWJlbCcsICdjb2xvcicsIHN0ckNvbG9yKTtcbiAgRWRpdFN0eWxlLl9jdXJUZXh0Q29sb3IgPSBjb2xvcjtcbn07XG5cbkVkaXRTdHlsZS5jaGFuZ2VPdmVyYWxsQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgRWRpdFN0eWxlLmNoYW5nZVdpZGdldHNDb2xvcihjb2xvcik7XG4gIHZhciBiZ0NvbCA9IEd1aVV0aWxzLmdldENvbG9yTXVsdChjb2xvciwgMC41KTtcbiAgYmdDb2wubGVuZ3RoID0gMztcbiAgRWRpdFN0eWxlLmNoYW5nZUJhY2tncm91bmRDb2xvcihiZ0NvbCk7XG5cbiAgdmFyIHRleENvbCA9IEd1aVV0aWxzLmdldENvbG9yQWRkKGNvbG9yLCAwLjUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDM7ICsraSkgdGV4Q29sW2ldID0gTWF0aC5taW4oMC44LCB0ZXhDb2xbaV0pO1xuICBFZGl0U3R5bGUuY2hhbmdlVGV4dENvbG9yKHRleENvbCk7XG5cbiAgRWRpdFN0eWxlLl9jdXJXaWRnZXRDb2xvciA9IGNvbG9yO1xuICBFZGl0U3R5bGUuX2N1ckJhY2tncm91bmRDb2xvciA9IGJnQ29sO1xuICBFZGl0U3R5bGUuX2N1clRleHRDb2xvciA9IHRleENvbDtcbn07XG5cbi8vIGluaXQgdmFsdWVcbkVkaXRTdHlsZS5fY3VyVGV4dENvbG9yID0gWzAuNzMsIDAuNzMsIDAuNzMsIDEuMF07XG5FZGl0U3R5bGUuX2N1cldpZGdldENvbG9yID0gWzAuMTcsIDAuMDEsIDAuMzQsIDEuMF07XG4vLyBFZGl0U3R5bGUuX2N1ckJhY2tncm91bmRDb2xvciA9IFswLjE3LCAwLjAxLCAwLjM0LCAxLjBdO1xuRWRpdFN0eWxlLl9jdXJTaG93Qm9yZGVyID0gZmFsc2U7XG5cbi8vIEVkaXRTdHlsZS5jaGFuZ2VPdmVyYWxsQ29sb3IoWzAuMzQsIDAuMzQsIDAuMzRdKTtcbi8vIEVkaXRTdHlsZS5jaGFuZ2VXaWRnZXRzQ29sb3IoWzAuMTA1OCwgMC4xMjUsIDAuMzYwN10pO1xuLy8gRWRpdFN0eWxlLmNoYW5nZUJhY2tncm91bmRDb2xvcihbMC4zNCwgMC4zNCwgMC4zNF0pO1xuLy8gRWRpdFN0eWxlLmNoYW5nZVRleHRDb2xvcihbMC44LCAwLjgsIDAuOF0pO1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0U3R5bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9FZGl0U3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlV2lkZ2V0IGZyb20gXCJ3aWRnZXRzL0Jhc2VXaWRnZXRcIjtcclxuXHJcbmNsYXNzIHVuZG9CdXR0b24gZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrID0ga2V5XHJcbiAgICAgID8gY2FsbGJhY2tPck9iamVjdFtrZXldLmJpbmQoY2FsbGJhY2tPck9iamVjdClcclxuICAgICAgOiBjYWxsYmFja09yT2JqZWN0O1xyXG5cclxuICAgIHRoaXMuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRoaXMuZG9tQnV0dG9uLmNsYXNzTmFtZSA9IFwiZ3VpLXVuZG9idXR0b25cIjtcclxuICAgIHRoaXMuZG9tQnV0dG9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNldENhbGxiYWNrKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIHNldEVuYWJsZShib29sKSB7XHJcbiAgICB0aGlzLmRvbUJ1dHRvbi5kaXNhYmxlZCA9IGJvb2wgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogIWJvb2w7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bmRvQnV0dG9uO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL3VuZG9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlV2lkZ2V0IGZyb20gXCJ3aWRnZXRzL0Jhc2VXaWRnZXRcIjtcclxuXHJcbmNsYXNzIHJlZG9CdXR0b24gZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBjYWxsYmFja09yT2JqZWN0LCBrZXkpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrID0ga2V5XHJcbiAgICAgID8gY2FsbGJhY2tPck9iamVjdFtrZXldLmJpbmQoY2FsbGJhY2tPck9iamVjdClcclxuICAgICAgOiBjYWxsYmFja09yT2JqZWN0O1xyXG5cclxuICAgIHRoaXMuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRoaXMuZG9tQnV0dG9uLmNsYXNzTmFtZSA9IFwiZ3VpLXJlZG9idXR0b25cIjtcclxuICAgIHRoaXMuZG9tQnV0dG9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNldENhbGxiYWNrKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIHNldEVuYWJsZShib29sKSB7XHJcbiAgICB0aGlzLmRvbUJ1dHRvbi5kaXNhYmxlZCA9IGJvb2wgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogIWJvb2w7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWRvQnV0dG9uO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL3JlZG9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdE1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEhBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=