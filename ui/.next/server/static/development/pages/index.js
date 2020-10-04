module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/postApi.ts":
/*!****************************!*\
  !*** ./src/api/postApi.ts ***!
  \****************************/
/*! exports provided: createfetchPostRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createfetchPostRequest", function() { return createfetchPostRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const createfetchPostRequest = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./src/api/svgApi.tsx":
/*!****************************!*\
  !*** ./src/api/svgApi.tsx ***!
  \****************************/
/*! exports provided: svgApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgApi", function() { return svgApi; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/pure */ "recompose/pure");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_pure__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\api\\svgApi.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // @ts-ignore

const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default.a;

function createSvgIcon(path, displayName) {
  let Icon = props => __jsx(SvgIconCustom, _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), path);

  Icon.displayName = displayName;
  Icon = recompose_pure__WEBPACK_IMPORTED_MODULE_1___default()(Icon);
  Icon.muiName = 'SvgIcon';
  return Icon;
}

;
const svgApi = {
  createSvgIcon
};

/***/ }),

/***/ "./src/api/userApi.ts":
/*!****************************!*\
  !*** ./src/api/userApi.ts ***!
  \****************************/
/*! exports provided: createUserSearchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserSearchRequest", function() { return createUserSearchRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const createUserSearchRequest = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./src/components/chat/chatComponent.tsx":
/*!***********************************************!*\
  !*** ./src/components/chat/chatComponent.tsx ***!
  \***********************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _chatStyles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chatStyles */ "./src/components/chat/chatStyles.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _createPost_createPostComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../createPost/createPostComponent */ "./src/components/createPost/createPostComponent.tsx");
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\components\\chat\\chatComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























class ChatComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleToggleMorePost", () => {
      this.setState({
        openMorePostDialog: !this.state.openMorePostDialog
      });
    });

    _defineProperty(this, "handleTogglePost", event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(this, "handleClickOpen", () => {
      this.setState({
        openDialog: !this.state.openDialog
      });
    });

    _defineProperty(this, "handleExpandClick", (index, e) => {
      this.setState({
        expanded: this.state.expanded === index ? null : index
      });
    });

    _defineProperty(this, "handleUploadClick", e => {});

    _defineProperty(this, "handleClose", message => () => {
      this.setState({
        anchorEl: null
      });
      console.log(message);
    });

    _defineProperty(this, "handleGalleryClick", event => {
      this.setState({
        mainState: "gallery"
      });
    });

    this.state = {
      expanded: null,
      activeIndex: null,
      openDialog: false,
      mainState: "initial",
      // initial, search, gallery, uploaded
      imageUploaded: 0,
      selectedFile: null,
      openVideoDialog: false,
      openMorePostDialog: false,
      openMorePost: false,
      anchorEl: null
    };
  }

  render() {
    let content;
    const {
      classes,
      theme
    } = this.props;
    const {
      anchorEl
    } = this.state;
    const posts = [{
      id: "1",
      avatar: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.avatar(),
      userName: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.userName()
    }, {
      id: "2",
      avatar: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.avatar(),
      userName: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.userName()
    }, {
      id: "3",
      avatar: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.avatar(),
      userName: faker__WEBPACK_IMPORTED_MODULE_17___default.a.internet.userName()
    }];
    const mainChat = content = posts.map((post, index) => {
      return __jsx("div", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default.a, {
        className: classes.postContent,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 29
        }
      }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_21___default.a, {
        avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_23___default.a, {
          "aria-label": "recipe",
          src: post.avatar,
          className: classes.avatar,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 41
          }
        }, "R"),
        action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
          "aria-label": "settings",
          onClick: this.handleTogglePost,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 41
          }
        }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 45
          }
        })),
        title: post.userName,
        subheader: "September 14, 2016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "fade-menu",
        open: Boolean(anchorEl),
        onClose: this.handleClose(null),
        anchorEl: anchorEl,
        style: {
          top: 100
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          vertical: 'center',
          horizontal: 'center'
        },
        getContentAnchorEl: null,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 33
        }
      }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
        p: 1,
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 41
        }
      }, "Edit")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
        p: 1,
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 41
        }
      }, "Delete")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
        p: 1,
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 41
        }
      }, "Disable Comments")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
        p: 1,
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 41
        }
      }, "Disable Sharing"))), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.media,
        image: faker__WEBPACK_IMPORTED_MODULE_17___default.a.image.imageUrl(),
        title: "Paella dish",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 33
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        variant: "body2",
        color: "textSecondary",
        component: "p",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 37
        }
      })), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11___default.a, {
        disableSpacing: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 33
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        "aria-label": "add to favorites",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 37
        }
      }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 41
        }
      })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        "aria-label": "share",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 37
        }
      }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 41
        }
      })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: clsx__WEBPACK_IMPORTED_MODULE_9___default()(classes.expand, {
          [classes.expandOpen]: this.state.expanded
        }),
        onClick: this.handleExpandClick.bind(this, index),
        "aria-expanded": this.state.expanded,
        "aria-label": "show more",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 37
        }
      }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 41
        }
      }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12___default.a, {
        in: this.state.expanded === index,
        timeout: "auto",
        unmountOnExit: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 33
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default.a, {
        fullWidth: true,
        className: classes.margin,
        variant: "outlined",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 41
        }
      }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 45
        }
      }, "Add Comment"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "standard-adornment-weight",
        "aria-describedby": "standard-weight-helper-text",
        inputProps: {
          'aria-label': 'weight'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 45
        }
      })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        style: {
          float: 'right',
          marginTop: '16px',
          marginBottom: '16px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 41
        }
      }, "Post")))));
    });
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 13
      }
    }, __jsx(_createPost_createPostComponent__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }), mainChat);
  }

}

async function getServerSideProps() {
  let post = {
    id: 5
  };
  return {
    props: {
      post
    }
  };
} // @ts-ignore

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(_chatStyles__WEBPACK_IMPORTED_MODULE_19__["chatStyles"])(ChatComponent));

/***/ }),

/***/ "./src/components/chat/chatStyles.tsx":
/*!********************************************!*\
  !*** ./src/components/chat/chatStyles.tsx ***!
  \********************************************/
/*! exports provided: chatStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatStyles", function() { return chatStyles; });
const chatStyles = theme => ({
  card: {},
  divider: {
    margin: `${theme.spacing.unit}px 0`
  },
  '.MuiCardHeader-subheader': {
    color: '#000'
  },
  context: {},
  expand: {},
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  expandOpen: {},
  typographyHeading: {
    width: '50%',
    textAlign: 'center',
    marginTop: '-29px'
  },
  postContent: {
    marginTop: '30px'
  },
  '.MuiDialog-paperWidthSm': {
    width: 600
  },
  menu: {
    top: 140,
    left: 931
  }
});

/***/ }),

/***/ "./src/components/createPost/createPostComponent.tsx":
/*!***********************************************************!*\
  !*** ./src/components/createPost/createPostComponent.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _createPostStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createPostStyle */ "./src/components/createPost/createPostStyle.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "@material-ui/icons/AddPhotoAlternate");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_VideoCall__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/VideoCall */ "@material-ui/icons/VideoCall");
/* harmony import */ var _material_ui_icons_VideoCall__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoCall__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23__);
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\components\\createPost\\createPostComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























class CreatePostComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClickToggle", () => {
      this.setState({
        openDialog: !this.state.openDialog
      });
    });

    _defineProperty(this, "handleToggleVideo", () => {
      this.setState({
        openVideoDialog: !this.state.openVideoDialog
      });
    });

    _defineProperty(this, "handleToggleMorePost", () => {
      this.setState({
        openMorePostDialog: !this.state.openMorePostDialog
      });
    });

    _defineProperty(this, "handleClose", message => () => {
      this.setState({
        anchorEl: null
      });
      console.log(message);
    });

    _defineProperty(this, "handleUploadClick", e => {});

    _defineProperty(this, "handleCloseVideo", () => {
      this.setState({
        openVideoDialog: !this.state.openVideoDialog
      });
    });

    this.state = {
      openDialog: false,
      anchorEl: null,
      mainState: "initial",
      // initial, search, gallery, uploaded
      imageUploaded: 0,
      selectedFile: null,
      openVideoDialog: false,
      openMorePostDialog: false,
      openMorePost: false
    };
  }

  render() {
    const {
      classes,
      theme
    } = this.props; // @ts-ignore

    const postDialog = __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
      open: this.state.openDialog,
      onClose: this.handleClose,
      "aria-labelledby": "form-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        width: 500
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      id: "form-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Comment"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
      style: {
        float: 'right',
        marginTop: '-52px'
      },
      onClick: () => this.handleToggleMorePost(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, "  ", __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 126
      }
    })), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_15___default.a, {
      open: this.state.openMorePostDialog,
      anchorReference: "anchorPosition",
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      anchorPosition: {
        top: 320,
        left: 785
      },
      onClose: this.handleToggleMorePost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
      p: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, "The content of the Popover."))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17___default.a, {
      autoFocus: true,
      margin: "dense",
      id: "name",
      label: "What's new with you ?",
      type: "email",
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
      container: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, __jsx("input", {
      accept: "image/*",
      className: classes.input,
      id: "contained-button-file",
      multiple: true,
      type: "file",
      onChange: this.handleUploadClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }), __jsx("label", {
      htmlFor: "contained-button-file",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_20___default.a, {
      component: "span",
      className: classes.addPhoto,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_20___default.a, {
      component: "span",
      color: "inherit",
      onClick: () => this.handleToggleVideo(),
      className: classes.addVideo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_VideoCall__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default.a, {
      onClick: this.handleClickToggle,
      color: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    }, "CANCEL"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default.a, {
      onClick: this.handleClickToggle,
      color: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, "POST"))));

    const addVideo = __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
      open: this.state.openVideoDialog,
      onClose: this.handleToggleVideo,
      "aria-labelledby": "form-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        width: 290
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      id: "form-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, " Add Video Link  "), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17___default.a, {
      autoFocus: true,
      margin: "dense",
      id: "name",
      label: "Add Video Link",
      type: "link",
      name: "link",
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default.a, {
      onClick: () => this.handleCloseVideo(),
      color: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }, "CANCEL"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default.a, {
      onClick: this.handleCloseVideo,
      color: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 25
      }
    }, "OK"))));

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.handleClickToggle(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      subheader: "Create Post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "inset",
      className: classes.divider,
      component: "li",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      src: faker__WEBPACK_IMPORTED_MODULE_9___default.a.internet.avatar(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.typographyHeading,
      variant: "subtitle2",
      gutterBottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    }, "Whats new with you ?"))), postDialog, addVideo);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(_createPostStyle__WEBPACK_IMPORTED_MODULE_7__["CreatePostStyle"])(CreatePostComponent));

/***/ }),

/***/ "./src/components/createPost/createPostStyle.tsx":
/*!*******************************************************!*\
  !*** ./src/components/createPost/createPostStyle.tsx ***!
  \*******************************************************/
/*! exports provided: CreatePostStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostStyle", function() { return CreatePostStyle; });
const CreatePostStyle = theme => ({
  divider: {
    margin: `${theme.spacing.unit}px 0`
  },
  '.MuiCardHeader-subheader': {
    color: '#000'
  },
  typographyHeading: {
    width: '50%',
    textAlign: 'center',
    marginTop: '-29px'
  },
  addVideo: {
    background: 'transparent !important',
    boxShadow: 'none !important'
  },
  addPhoto: {
    background: 'transparent !important',
    boxShadow: 'none !important'
  },
  input: {
    display: 'none'
  }
});

/***/ }),

/***/ "./src/components/homeHeader/homeHeader.tsx":
/*!**************************************************!*\
  !*** ./src/components/homeHeader/homeHeader.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_textLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/textLogo */ "./src/layouts/textLogo/index.tsx");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _homeHeaderStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homeHeaderStyle */ "./src/components/homeHeader/homeHeaderStyle.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _searchBox_searchBoxComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../searchBox/searchBoxComponent */ "./src/components/searchBox/searchBoxComponent.tsx");
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\components\\homeHeader\\homeHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class HomeHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerToggle", () => {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    });

    _defineProperty(this, "onToggleSidebar", () => {
      const {
        onToggleDrawer
      } = this.props;
      onToggleDrawer();
    });

    _defineProperty(this, "handleDrawerOpen", () => {
      this.setState({
        drawerOpen: !this.state.drawerOpen
      });
    });

    _defineProperty(this, "handleAccountOpen", event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(this, "handleClose", message => () => {
      this.setState({
        anchorEl: null
      });
      console.log(message);
    });

    _defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        drawerOpen: this.state.drawerOpen
      });
    });

    this.state = {
      menuId: 'primary-search-account-menu',
      mobileMenuId: 'primary-search-account-menu-mobile',
      isMenuOpen: false,
      drawerOpen: false,
      anchorEl: null
    };
  }

  render() {
    const {
      classes,
      theme
    } = this.props;
    const {
      anchorEl
    } = this.state;

    const popoverAccount = __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12___default.a, {
      anchorEl: anchorEl,
      id: "fade-menu",
      open: Boolean(anchorEl),
      onClose: this.handleClose(null),
      style: {
        left: -50,
        top: 50
      },
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'center',
        horizontal: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
      p: 1,
      style: {
        cursor: "pointer"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }, "Edit")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
      p: 1,
      style: {
        cursor: "pointer"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "Delete")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
      p: 1,
      style: {
        cursor: "pointer"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, "Disable Comments")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
      p: 1,
      style: {
        cursor: "pointer"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, "Disable Sharing")));

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "static",
      className: classes.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: classes.drawerHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 33
      }
    }, __jsx(_layouts_textLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      viewBox: "0 00 100 60",
      className: classes.logo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        color: 'rgb(117, 117, 117)',
        width: '113px',
        paddingTop: '0px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classes.homeTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 37
      }
    }, "Home")), __jsx(_searchBox_searchBoxComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 32
      }
    }), __jsx("div", {
      className: classes.grow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.sectionDesktop,
      style: {
        marginRight: 56
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-label": "show 17 new notifications",
      color: "inherit",
      style: {
        marginRight: 36
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 37
      }
    }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default.a, {
      badgeContent: 17,
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 41
      }
    }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 45
      }
    }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      edge: "end",
      "aria-label": "account of current user",
      "aria-controls": this.state.menuId,
      "aria-haspopup": "true",
      onClick: this.handleAccountOpen,
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 37
      }
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 41
      }
    })), popoverAccount), __jsx("div", {
      className: classes.sectionMobile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-label": "show more",
      "aria-haspopup": "true",
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 37
      }
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 41
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(_homeHeaderStyle__WEBPACK_IMPORTED_MODULE_10__["homeHeaderStyle"])(HomeHeader));

/***/ }),

/***/ "./src/components/homeHeader/homeHeaderStyle.ts":
/*!******************************************************!*\
  !*** ./src/components/homeHeader/homeHeaderStyle.ts ***!
  \******************************************************/
/*! exports provided: homeHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeHeaderStyle", function() { return homeHeaderStyle; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const drawerWidth = 220;
const homeHeaderStyle = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(3),
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%' // overflowY: 'auto'

  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: 'green',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    padding: '3px',
    width: '704px !important',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '0px',
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  palette: {
    backgroundColor: 'red !important'
  },
  drawerHeader: {
    //  backgroundColor: theme.palette.secondary.main,
    padding: 10,
    textAlign: 'center',
    marginLeft: '97px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  drawerPaper: {
    maxWidth: drawerWidth,
    marginTop: '70px',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  drawerPaperLarge: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      height: '100%'
    },
    top: 70,
    backgroundColor: '#fafafa',
    borderRight: 0
  },
  menu: {
    height: '100%'
  },
  content: {
    backgroundColor: 'transparent',
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 15,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 44,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 44,
      paddingTop: 15,
      marginLeft: drawerWidth
    },
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 44,
      paddingTop: 15,
      marginLeft: drawerWidth
    }
  },
  'MuiAppBar-colorPrimary': {
    backgroundColor: '#b50d1a !important'
  },
  'content-left': {
    marginLeft: 0
  },
  'content-right': {
    marginRight: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    }
  },
  'contentShift-right': {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: drawerWidth
    }
  },
  logo: {
    fill: 'currentColor',
    width: '100%',
    height: '2em',
    display: 'inline-block',
    fontSize: '17px',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
    flexShrink: 0
  },
  header: {
    background: '#5b5958',
    position: 'fixed',
    right: '0',
    top: '0'
  },
  homeTitle: {
    'color': '#fff',
    'margin-top': '5px',
    'left': '-9%',
    'border-left-color': '#fff',
    'border-left': '1px solid #fff',
    'padding-left': '24px'
  },
  'MuiPaper-root': {
    'borderRight': '0px !important'
  },
  'MuiDivider-root': {
    'backgroundColor': '#fff !important'
  }
});

/***/ }),

/***/ "./src/components/searchBox/searchBoxComponent.tsx":
/*!*********************************************************!*\
  !*** ./src/components/searchBox/searchBoxComponent.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _searchBoxStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBoxStyle */ "./src/components/searchBox/searchBoxStyle.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\components\\searchBox\\searchBoxComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class SearchBoxComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      classes,
      theme
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: classes.search,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: classes.searchIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: "Find your favorite posts and people ...",
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput
      },
      inputProps: {
        'aria-label': 'search'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: classes.searchMobile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: classes.searchIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }
    }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_searchBoxStyle__WEBPACK_IMPORTED_MODULE_3__["SearchBoxStyle"])(SearchBoxComponent));

/***/ }),

/***/ "./src/components/searchBox/searchBoxStyle.tsx":
/*!*****************************************************!*\
  !*** ./src/components/searchBox/searchBoxStyle.tsx ***!
  \*****************************************************/
/*! exports provided: SearchBoxStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxStyle", function() { return SearchBoxStyle; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const SearchBoxStyle = theme => ({
  search: {
    position: 'relative',
    padding: '3px',
    width: '704px !important',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '0px',
      width: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none !important'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none !important'
    }
  },
  searchMobile: {
    position: 'relative',
    padding: '3px',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '0px',
      width: 'auto',
      display: 'none !important'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block !important'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block !important'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '47'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
});

/***/ }),

/***/ "./src/containers/home/homeComponent.tsx":
/*!***********************************************!*\
  !*** ./src/containers/home/homeComponent.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_homeHeader_homeHeader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/homeHeader/homeHeader */ "./src/components/homeHeader/homeHeader.tsx");
/* harmony import */ var _components_chat_chatComponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/chat/chatComponent */ "./src/components/chat/chatComponent.tsx");
/* harmony import */ var _homeStyle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./homeStyle */ "./src/containers/home/homeStyle.ts");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24__);
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\containers\\home\\homeComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























class homeComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerOpen", () => {
      this.setState({
        drawerOpen: !this.state.drawerOpen
      });
    });

    _defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        drawerOpen: this.state.drawerOpen
      });
    });

    _defineProperty(this, "handleDrawerToggle", () => {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    });

    this.state = {
      menuId: 'primary-search-account-menu',
      mobileMenuId: 'primary-search-account-menu-mobile',
      isMenuOpen: false,
      drawerOpen: false
    };
    console.log(props);
  }

  render() {
    const {
      classes,
      theme,
      posts
    } = this.props;

    const renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      id: this.state.menuId,
      keepMounted: true,
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: this.state.isMenuOpen,
      onClose: this.handleDrawerToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, "Profile"));

    const userInfo = __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a, {
      className: classes.media,
      image: "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24___default.a, {
      className: classes.userImage,
      src: faker__WEBPACK_IMPORTED_MODULE_10___default.a.internet.avatar(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a, {
      className: classes.context,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.typographyHeading,
      variant: "h6",
      gutterBottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, faker__WEBPACK_IMPORTED_MODULE_10___default.a.internet.userName()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.Followers,
      variant: "caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, "Followers", __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    }, faker__WEBPACK_IMPORTED_MODULE_10___default.a.random.number())), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.Following,
      variant: "caption",
      align: 'center',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, "Following", __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, faker__WEBPACK_IMPORTED_MODULE_10___default.a.random.number())), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
      light: true,
      className: classes.divider,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18___default.a, {
      href: "/",
      className: classes.linkProfile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, "view Profile")));

    const peopleList = __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.peopleHeader,
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "Peoples", __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
      light: true,
      className: classes.divider,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.rootPeople,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, this.props.users.map(function (item, i) {
      return __jsx("div", {
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 31
        }
      }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
        alignItems: "flex-start",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 35
        }
      }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 39
        }
      }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24___default.a, {
        alt: "Remy Sharp",
        src: faker__WEBPACK_IMPORTED_MODULE_10___default.a.internet.avatar(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 43
        }
      })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default.a, {
        secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 47
          }
        }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
          component: "span",
          variant: "body2",
          className: classes.peopleUserName,
          color: "textPrimary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 51
          }
        }, item.username)),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 39
        }
      })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "inset",
        className: classes.divider,
        component: "li",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 35
        }
      }));
    })));

    const drawer = __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
      classes: {
        paper: classes.drawerPaperLarge
      },
      variant: "persistent",
      anchor: "left",
      open: this.state.drawerOpen,
      ModalProps: {
        keepMounted: true // Better open performance on mobile.

      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: classes.drawerHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: () => this.handleDrawerClose(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, ['Home', 'Profile', 'People'].map((text, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
      button: true,
      key: text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 29
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 62
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 78
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default.a, {
      primary: text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 29
      }
    })))));

    const main = __jsx("main", {
      className: classes.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }
    }, __jsx(_components_chat_chatComponent__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }));

    return __jsx("div", {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }
    }, __jsx(_components_homeHeader_homeHeader__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onToggleDrawer: this.handleDrawerOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      style: {
        paddingTop: '60px !important'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 12,
      lg: 3,
      className: "userInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 21
      }
    }, userInfo, peopleList), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 12,
      lg: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }, main)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(_homeStyle__WEBPACK_IMPORTED_MODULE_23__["homeStyle"])(homeComponent));

/***/ }),

/***/ "./src/containers/home/homeStyle.ts":
/*!******************************************!*\
  !*** ./src/containers/home/homeStyle.ts ***!
  \******************************************/
/*! exports provided: homeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeStyle", function() { return homeStyle; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const drawerWidth = 220;
const homeStyle = theme => ({
  root: {
    zIndex: 1,
    overflow: 'visible',
    backgroundColor: '#fafafa'
  },
  main: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(3)
  },
  rootPeople: {
    width: '100%',
    height: '100%',
    marginTop: '-17px',
    zIndex: 1,
    overflow: 'hidden',
    maxWidth: 345
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: "0"
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%' // overflowY: 'auto'

  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: 'green',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    padding: '3px',
    width: '704px !important',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '0px',
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    marginRight: 74
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  palette: {
    backgroundColor: 'red !important'
  },
  drawerHeader: {
    //  backgroundColor: theme.palette.secondary.main,
    padding: 10,
    textAlign: 'center',
    marginLeft: '97px'
  },
  drawerPaper: {
    maxWidth: drawerWidth,
    marginTop: '70px',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  drawerPaperLarge: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      height: '100%'
    },
    top: 70,
    backgroundColor: '#fafafa',
    borderRight: 0
  },
  menu: {
    height: '100%'
  },
  content: {
    backgroundColor: 'transparent',
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 15,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 90,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 17,
      paddingTop: 15,
      marginLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 44,
      paddingTop: 15,
      marginLeft: 0,
      padding: 0
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 64px)',
      marginTop: 44,
      paddingTop: 15,
      marginLeft: 0,
      padding: 0
    }
  },
  'MuiAppBar-colorPrimary': {
    backgroundColor: '#b50d1a !important'
  },
  'content-left': {
    marginLeft: 0
  },
  'content-right': {
    marginRight: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    }
  },
  'contentShift-right': {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: drawerWidth
    }
  },
  logo: {
    fill: 'currentColor',
    width: '100%',
    height: '2em',
    display: 'inline-block',
    fontSize: '17px',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
    flexShrink: 0
  },
  header: {
    background: '#5b5958',
    position: 'absolute',
    right: '0',
    top: '0'
  },
  homeTitle: {
    'color': '#fff',
    'margin-top': '5px',
    'left': '-9%',
    'border-left-color': '#fff',
    'border-left': '1px solid #fff',
    'padding-left': '24px'
  },
  'MuiPaper-root': {
    'borderRight': '0px !important'
  },
  'MuiDivider-root': {
    'backgroundColor': '#fff !important'
  },
  card: {
    marginTop: "30px",
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  context: {
    textAlign: "center",
    marginTop: "20px",
    padding: theme.spacing.unit * 3
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },
  'MuiTypography-h6': {
    textAlign: "center"
  },
  'MuiTypography-caption': {
    marginLeft: "50px"
  },
  'MuiTypography-gutterBottom': {
    marginBottom: '1.35em',
    textAlign: "center"
  },
  Followers: {
    paddingRight: "10px",
    width: '100px',
    display: 'inline flow-root list-item',
    listStyle: 'none',
    marginTop: '13px'
  },
  Following: {
    width: '100px',
    display: 'inline flow-root list-item',
    listStyle: 'none',
    borderLeft: "1px solid #000",
    marginTop: '13px'
  },
  userImage: {
    width: "80px",
    height: "80px"
  },
  linkProfile: {
    color: '#000',
    textDecoration: 'none'
  },
  // divider:{
  //     marginTop:'19px',
  //     marginBottom:'21px'
  // },
  peopleHeader: {
    marginTop: '16px',
    marginLeft: '10px'
  },
  peopleUserName: {
    marginTop: '20px'
  },
  typographyHeading: {
    marginTop: '-30px'
  }
});

/***/ }),

/***/ "./src/containers/home/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeComponent */ "./src/containers/home/homeComponent.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_homeComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/layouts/textLogo/index.tsx":
/*!****************************************!*\
  !*** ./src/layouts/textLogo/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_svgApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/svgApi */ "./src/api/svgApi.tsx");
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\layouts\\textLogo\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (_api_svgApi__WEBPACK_IMPORTED_MODULE_1__["svgApi"].createSvgIcon(__jsx("g", {
  "data-v-423bf9ae": "",
  id: "4c534ed8-4e27-4483-ac22-b4c7c7960151",
  transform: "matrix(0.6313940193586971,0,0,0.6313940193586971,-6.023900765138428,-1.5784850483967432)",
  stroke: "none",
  fill: "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M54.2 2.5c-5.5 0-10.8 1.2-15.5 3.5-12.4 5.8-21 18.3-21 32.8v6L10.3 59c-1.9 3.6-.1 6.5 3.9 6.5h3.5V78.9c0 4.2 3.4 7.6 7.6 7.6l10.5-1.6v10.6c0 1.3 1.2 2.2 2.6 2l37.7-6.7c1.4-.3 2.6-1.6 2.6-3.1V65.5c7.2-6.6 11.8-16.1 11.8-26.7-.1-20-16.3-36.3-36.3-36.3zm0 62.7c-14.7 0-26.6-12-26.6-26.6 0-14.7 12-26.6 26.6-26.6 14.7 0 26.6 12 26.6 26.6 0 14.7-11.9 26.6-26.6 26.6zm10.5-31.7l-.1-3.5c0-5.6-4.6-10.2-10.2-10.2S44.2 24.4 44.2 30v3.5H44c-1.5 0-2.7 1.2-2.7 2.7V51c0 1.5 1.2 2.7 2.7 2.7h20.7c1.5 0 2.7-1.2 2.7-2.7V36.2c0-1.5-1.2-2.7-2.7-2.7zm-8.8 10.8c-.2.1-.3.3-.3.5v3.3c0 .5-.2.9-.6 1.1-1 .5-1.9-.2-1.9-1.1v-3.3c0-.2 0-.4-.2-.5-1-.7-1.3-2-.8-3.1s1.6-1.7 2.8-1.5c1.2.2 2.1 1.2 2.1 2.5 0 .9-.4 1.6-1.1 2.1zm4.2-10.8H48.7V30c0-3.2 2.6-5.7 5.7-5.7s5.7 2.6 5.7 5.7v3.5z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 201
  }
})), 'TextLogo'));

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../containers/home */ "./src/containers/home/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\pages\\home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




class Home extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, "Read Sokcial")), __jsx(_containers_home__WEBPACK_IMPORTED_MODULE_0__["default"], {
      posts: this.props.posts,
      users: this.props.users,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_postApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/postApi */ "./src/api/postApi.ts");
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/userApi */ "./src/api/userApi.ts");
var _jsxFileName = "G:\\wamp\\www\\react-social-network\\ui\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps(ctx) {
    const posts = await Object(_api_postApi__WEBPACK_IMPORTED_MODULE_2__["createfetchPostRequest"])();
    const users = await Object(_api_userApi__WEBPACK_IMPORTED_MODULE_3__["createUserSearchRequest"])();
    return {
      posts,
      users
    };
  }

  render() {
    // @ts-ignore
    const {
      posts,
      users
    } = this.props;
    console.log(users); // @ts-ignore

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx(_home__WEBPACK_IMPORTED_MODULE_0__["default"], {
      posts: posts,
      users: users,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\wamp\www\react-social-network\ui\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/AddPhotoAlternate":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/AddPhotoAlternate" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddPhotoAlternate");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "@material-ui/icons/VideoCall":
/*!***********************************************!*\
  !*** external "@material-ui/icons/VideoCall" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VideoCall");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recompose/pure":
/*!*********************************!*\
  !*** external "recompose/pure" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/pure");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9wb3N0QXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvc3ZnQXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3VzZXJBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhdC9jaGF0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXRTdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVBvc3QvY3JlYXRlUG9zdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUG9zdC9jcmVhdGVQb3N0U3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVIZWFkZXIvaG9tZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZUhlYWRlci9ob21lSGVhZGVyU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoQm94L3NlYXJjaEJveENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoQm94L3NlYXJjaEJveFN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9ob21lL2hvbWVDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2hvbWUvaG9tZVN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3RleHRMb2dvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkUGhvdG9BbHRlcm5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZGVvQ2FsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb21wb3NlL3B1cmVcIiJdLCJuYW1lcyI6WyJjcmVhdGVmZXRjaFBvc3RSZXF1ZXN0IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIlN2Z0ljb25DdXN0b20iLCJnbG9iYWwiLCJfX01VSV9TdmdJY29uX18iLCJTdmdJY29uIiwiY3JlYXRlU3ZnSWNvbiIsInBhdGgiLCJkaXNwbGF5TmFtZSIsIkljb24iLCJwcm9wcyIsInB1cmUiLCJtdWlOYW1lIiwic3ZnQXBpIiwiY3JlYXRlVXNlclNlYXJjaFJlcXVlc3QiLCJDaGF0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzZXRTdGF0ZSIsIm9wZW5Nb3JlUG9zdERpYWxvZyIsInN0YXRlIiwiZXZlbnQiLCJhbmNob3JFbCIsImN1cnJlbnRUYXJnZXQiLCJvcGVuRGlhbG9nIiwiaW5kZXgiLCJlIiwiZXhwYW5kZWQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1haW5TdGF0ZSIsImFjdGl2ZUluZGV4IiwiaW1hZ2VVcGxvYWRlZCIsInNlbGVjdGVkRmlsZSIsIm9wZW5WaWRlb0RpYWxvZyIsIm9wZW5Nb3JlUG9zdCIsInJlbmRlciIsImNvbnRlbnQiLCJjbGFzc2VzIiwidGhlbWUiLCJwb3N0cyIsImlkIiwiYXZhdGFyIiwiRmFrZXIiLCJpbnRlcm5ldCIsInVzZXJOYW1lIiwibWFpbkNoYXQiLCJtYXAiLCJwb3N0IiwicG9zdENvbnRlbnQiLCJoYW5kbGVUb2dnbGVQb3N0IiwiQm9vbGVhbiIsImhhbmRsZUNsb3NlIiwidG9wIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiY3Vyc29yIiwibWVkaWEiLCJpbWFnZSIsImltYWdlVXJsIiwiY2xzeCIsImV4cGFuZCIsImV4cGFuZE9wZW4iLCJoYW5kbGVFeHBhbmRDbGljayIsImJpbmQiLCJtYXJnaW4iLCJmbG9hdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImdldFNlcnZlclNpZGVQcm9wcyIsIndpdGhTdHlsZXMiLCJjaGF0U3R5bGVzIiwiY2FyZCIsImRpdmlkZXIiLCJzcGFjaW5nIiwidW5pdCIsImNvbG9yIiwiY29udGV4dCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJ0eXBvZ3JhcGh5SGVhZGluZyIsIndpZHRoIiwidGV4dEFsaWduIiwibWVudSIsImxlZnQiLCJDcmVhdGVQb3N0Q29tcG9uZW50IiwicG9zdERpYWxvZyIsImhhbmRsZVRvZ2dsZU1vcmVQb3N0IiwiaW5wdXQiLCJoYW5kbGVVcGxvYWRDbGljayIsImFkZFBob3RvIiwiaGFuZGxlVG9nZ2xlVmlkZW8iLCJhZGRWaWRlbyIsImhhbmRsZUNsaWNrVG9nZ2xlIiwiaGFuZGxlQ2xvc2VWaWRlbyIsIkNyZWF0ZVBvc3RTdHlsZSIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiSG9tZUhlYWRlciIsImlzTWVudU9wZW4iLCJvblRvZ2dsZURyYXdlciIsImRyYXdlck9wZW4iLCJtZW51SWQiLCJtb2JpbGVNZW51SWQiLCJwb3BvdmVyQWNjb3VudCIsImhlYWRlciIsImRyYXdlckhlYWRlciIsImxvZ28iLCJob21lVGl0bGUiLCJncm93Iiwic2VjdGlvbkRlc2t0b3AiLCJtYXJnaW5SaWdodCIsImhhbmRsZUFjY291bnRPcGVuIiwic2VjdGlvbk1vYmlsZSIsImhvbWVIZWFkZXJTdHlsZSIsImRyYXdlcldpZHRoIiwicm9vdCIsInpJbmRleCIsIm92ZXJmbG93IiwiYXBwRnJhbWUiLCJwb3NpdGlvbiIsIm5hdkljb25IaWRlIiwiYnJlYWtwb2ludHMiLCJ1cCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsInRpdGxlIiwic2VhcmNoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJzZWFyY2hJY29uIiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImRvd24iLCJkcmF3ZXJQYXBlciIsIm1heFdpZHRoIiwiZHJhd2VyUGFwZXJMYXJnZSIsImJvcmRlclJpZ2h0IiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJjb250ZW50U2hpZnQiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJmaWxsIiwiZm9udFNpemUiLCJ1c2VyU2VsZWN0IiwiZmxleFNocmluayIsInJpZ2h0IiwiU2VhcmNoQm94Q29tcG9uZW50Iiwic2VhcmNoTW9iaWxlIiwiU2VhcmNoQm94U3R5bGUiLCJob21lQ29tcG9uZW50IiwicmVuZGVyTWVudSIsImhhbmRsZURyYXdlclRvZ2dsZSIsInVzZXJJbmZvIiwidXNlckltYWdlIiwiRm9sbG93ZXJzIiwicmFuZG9tIiwibnVtYmVyIiwiRm9sbG93aW5nIiwibGlua1Byb2ZpbGUiLCJwZW9wbGVMaXN0IiwicGVvcGxlSGVhZGVyIiwicm9vdFBlb3BsZSIsInVzZXJzIiwiaXRlbSIsImkiLCJwZW9wbGVVc2VyTmFtZSIsInVzZXJuYW1lIiwiZHJhd2VyIiwicGFwZXIiLCJrZWVwTW91bnRlZCIsImhhbmRsZURyYXdlckNsb3NlIiwidGV4dCIsIm1haW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaG9tZVN0eWxlIiwiaGVhZGluZyIsImZvbnRXZWlnaHQiLCJzdWJoZWFkaW5nIiwibGluZUhlaWdodCIsImJvcmRlciIsInBhZGRpbmdSaWdodCIsImxpc3RTdHlsZSIsImJvcmRlckxlZnQiLCJ0ZXh0RGVjb3JhdGlvbiIsIkhvbWVDb21wb25lbnQiLCJIb21lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNQSxzQkFBc0IsR0FBRyxZQUFZO0FBQzVDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFDLDRDQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUNBLFNBQU9ELElBQVA7QUFDRCxDQUpFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Q0FHQTs7QUFDQSxNQUFNRSxhQUFhLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDQyxlQUF4QyxJQUEyREMsZ0VBQWpGOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQWlDQyxXQUFqQyxFQUFxRDtBQUNqRCxNQUFJQyxJQUFRLEdBQUdDLEtBQUssSUFDaEIsTUFBQyxhQUFELGVBQW1CQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0NILElBREQsQ0FESjs7QUFLQUUsTUFBSSxDQUFDRCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBQyxNQUFJLEdBQUdFLHFEQUFJLENBQUNGLElBQUQsQ0FBWDtBQUNBQSxNQUFJLENBQUNHLE9BQUwsR0FBZSxTQUFmO0FBQ0EsU0FBT0gsSUFBUDtBQUNIOztBQUFBO0FBQ00sTUFBTUksTUFBTSxHQUFHO0FBQ2xCUDtBQURrQixDQUFmLEM7Ozs7Ozs7Ozs7OztBQ2pCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVEsdUJBQXVCLEdBQUcsWUFBVztBQUM5QyxRQUFNaEIsR0FBRyxHQUFHLE1BQU1DLHlEQUFLLENBQUMsNENBQUQsQ0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNILENBSk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFTQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBOztBQUdBLE1BQU1lLGFBQU4sU0FBNEJDLCtDQUE1QixDQUEwRDtBQUV0REMsYUFBVyxDQUFDUCxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOOztBQURlLGtEQW9CSSxNQUFNO0FBRXpCLFdBQUtRLFFBQUwsQ0FBYztBQUFFQywwQkFBa0IsRUFBQyxDQUFFLEtBQUtDLEtBQUwsQ0FBV0Q7QUFBbEMsT0FBZDtBQUNILEtBdkJrQjs7QUFBQSw4Q0F3QkFFLEtBQUssSUFBSTtBQUN4QixXQUFLSCxRQUFMLENBQWM7QUFBRUksZ0JBQVEsRUFBRUQsS0FBSyxDQUFDRTtBQUFsQixPQUFkO0FBQ0gsS0ExQmtCOztBQUFBLDZDQTRCRCxNQUFNO0FBQ3BCLFdBQUtMLFFBQUwsQ0FBYztBQUFFTSxrQkFBVSxFQUFFLENBQUMsS0FBS0osS0FBTCxDQUFXSTtBQUExQixPQUFkO0FBQ0gsS0E5QmtCOztBQUFBLCtDQStCQyxDQUFDQyxLQUFELEVBQVNDLENBQVQsS0FBZTtBQUMvQixXQUFLUixRQUFMLENBQWM7QUFBRVMsZ0JBQVEsRUFBRyxLQUFLUCxLQUFMLENBQVdPLFFBQVgsS0FBd0JGLEtBQXhCLEdBQWdDLElBQWhDLEdBQXNDQTtBQUFuRCxPQUFkO0FBQ0gsS0FqQ2tCOztBQUFBLCtDQWtDRUMsQ0FBRCxJQUFPLENBRzFCLENBckNrQjs7QUFBQSx5Q0FzQ0pFLE9BQUQsSUFBYSxNQUFNO0FBQzdCLFdBQUtWLFFBQUwsQ0FBYztBQUFFSSxnQkFBUSxFQUFFO0FBQVosT0FBZDtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNILEtBekNrQjs7QUFBQSxnREEwQ0VQLEtBQUssSUFBSTtBQUMxQixXQUFLSCxRQUFMLENBQWM7QUFDVmEsaUJBQVMsRUFBRTtBQURELE9BQWQ7QUFHSCxLQTlDa0I7O0FBRWYsU0FBS1gsS0FBTCxHQUFhO0FBQ1RPLGNBQVEsRUFBRSxJQUREO0FBRVRLLGlCQUFXLEVBQUUsSUFGSjtBQUdUUixnQkFBVSxFQUFFLEtBSEg7QUFJVE8sZUFBUyxFQUFFLFNBSkY7QUFJYTtBQUN0QkUsbUJBQWEsRUFBRSxDQUxOO0FBTVRDLGtCQUFZLEVBQUUsSUFOTDtBQU9UQyxxQkFBZSxFQUFFLEtBUFI7QUFRVGhCLHdCQUFrQixFQUFFLEtBUlg7QUFTVGlCLGtCQUFZLEVBQUUsS0FUTDtBQVVUZCxjQUFRLEVBQUU7QUFWRCxLQUFiO0FBZ0JIOztBQTZCRGUsUUFBTSxHQUFFO0FBQ0osUUFBSUMsT0FBSjtBQUNDLFVBQU07QUFBQ0MsYUFBRDtBQUFVQztBQUFWLFFBQXFCLEtBQUs5QixLQUFoQztBQUNELFVBQU07QUFBRVk7QUFBRixRQUFlLEtBQUtGLEtBQTFCO0FBRUEsVUFBTXFCLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFFBQUUsRUFBQyxHQURQO0FBRUlDLFlBQU0sRUFBRUMsNkNBQUssQ0FBQ0MsUUFBTixDQUFlRixNQUFmLEVBRlo7QUFHSUcsY0FBUSxFQUFHRiw2Q0FBSyxDQUFDQyxRQUFOLENBQWVDLFFBQWY7QUFIZixLQURVLEVBT1Y7QUFDSUosUUFBRSxFQUFDLEdBRFA7QUFFSUMsWUFBTSxFQUFFQyw2Q0FBSyxDQUFDQyxRQUFOLENBQWVGLE1BQWYsRUFGWjtBQUdJRyxjQUFRLEVBQUdGLDZDQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFBZjtBQUhmLEtBUFUsRUFZVjtBQUNJSixRQUFFLEVBQUMsR0FEUDtBQUVJQyxZQUFNLEVBQUVDLDZDQUFLLENBQUNDLFFBQU4sQ0FBZUYsTUFBZixFQUZaO0FBR0lHLGNBQVEsRUFBR0YsNkNBQUssQ0FBQ0MsUUFBTixDQUFlQyxRQUFmO0FBSGYsS0FaVSxDQUFkO0FBdUJBLFVBQU1DLFFBQVEsR0FFVlQsT0FBTyxHQUFHRyxLQUFLLENBQUNPLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU14QixLQUFOLEtBQWdCO0FBQ2hDLGFBQ1E7QUFBSyxXQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsOERBQUQ7QUFBTSxpQkFBUyxFQUFFYyxPQUFPLENBQUNXLFdBQXpCO0FBQXNDLFdBQUcsRUFBRXpCLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG9FQUFEO0FBQ0ksY0FBTSxFQUNGLE1BQUMsZ0VBQUQ7QUFBUSx3QkFBVyxRQUFuQjtBQUNRLGFBQUcsRUFDQ3dCLElBQUksQ0FBQ04sTUFGakI7QUFLUSxtQkFBUyxFQUFFSixPQUFPLENBQUNJLE1BTDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQVdJLGNBQU0sRUFDRixNQUFDLG1FQUFEO0FBQVksd0JBQVcsVUFBdkI7QUFBa0MsaUJBQU8sRUFBRSxLQUFLUSxnQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBWlI7QUFnQkksYUFBSyxFQUFFRixJQUFJLENBQUNILFFBaEJoQjtBQWlCSSxpQkFBUyxFQUFDLG9CQWpCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFvQkksTUFBQyxnRUFBRDtBQUNJLFVBQUUsRUFBQyxXQURQO0FBRUksWUFBSSxFQUFFTSxPQUFPLENBQUM5QixRQUFELENBRmpCO0FBR0ksZUFBTyxFQUFFLEtBQUsrQixXQUFMLENBQWlCLElBQWpCLENBSGI7QUFJSSxnQkFBUSxFQUFFL0IsUUFKZDtBQUtJLGFBQUssRUFBRTtBQUFDZ0MsYUFBRyxFQUFDO0FBQUwsU0FMWDtBQU1JLG9CQUFZLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxRQUFaO0FBQXNCQyxvQkFBVSxFQUFFO0FBQWxDLFNBTmxCO0FBT0ksdUJBQWUsRUFBRTtBQUNiRCxrQkFBUSxFQUFFLFFBREc7QUFFYkMsb0JBQVUsRUFBRTtBQUZDLFNBUHJCO0FBV0ksMEJBQWtCLEVBQUUsSUFYeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWNJLE1BQUMsNERBQUQ7QUFBSyxTQUFDLEVBQUUsQ0FBUjtBQUFXLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFDO0FBQVIsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQWRKLEVBaUJJLE1BQUMsNERBQUQ7QUFBSyxTQUFDLEVBQUUsQ0FBUjtBQUFXLGFBQUssRUFBRTtBQUFDQSxnQkFBTSxFQUFDO0FBQVIsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixDQWpCSixFQW9CSSxNQUFDLDREQUFEO0FBQUssU0FBQyxFQUFFLENBQVI7QUFBVyxhQUFLLEVBQUU7QUFBQ0EsZ0JBQU0sRUFBQztBQUFSLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosQ0FwQkosRUF1QkksTUFBQyw0REFBRDtBQUFLLFNBQUMsRUFBRSxDQUFSO0FBQVcsYUFBSyxFQUFFO0FBQUNBLGdCQUFNLEVBQUM7QUFBUixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLENBdkJKLENBcEJKLEVBZ0RJLE1BQUMsbUVBQUQ7QUFDSSxpQkFBUyxFQUFFbEIsT0FBTyxDQUFDbUIsS0FEdkI7QUFFSSxhQUFLLEVBQUVkLDZDQUFLLENBQUNlLEtBQU4sQ0FBWUMsUUFBWixFQUZYO0FBR0ksYUFBSyxFQUFDLGFBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhESixFQXFESSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQUssRUFBQyxlQUFsQztBQUFrRCxpQkFBUyxFQUFDLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQXJESixFQTBESSxNQUFDLHFFQUFEO0FBQWEsc0JBQWMsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUVBQUQ7QUFBWSxzQkFBVyxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSSxNQUFDLG1FQUFEO0FBQVksc0JBQVcsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosRUFPSSxNQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBRUMsMkNBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3VCLE1BQVQsRUFBaUI7QUFDNUIsV0FBQ3ZCLE9BQU8sQ0FBQ3dCLFVBQVQsR0FBc0IsS0FBSzNDLEtBQUwsQ0FBV087QUFETCxTQUFqQixDQURuQjtBQUlJLGVBQU8sRUFBRSxLQUFLcUMsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLEVBQWtDeEMsS0FBbEMsQ0FKYjtBQUtJLHlCQUFlLEtBQUtMLEtBQUwsQ0FBV08sUUFMOUI7QUFNSSxzQkFBVyxXQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixDQVBKLENBMURKLEVBNEVJLE1BQUMsa0VBQUQ7QUFBVSxVQUFFLEVBQUUsS0FBS1AsS0FBTCxDQUFXTyxRQUFYLEtBQXdCRixLQUF0QztBQUE2QyxlQUFPLEVBQUMsTUFBckQ7QUFBNEQscUJBQWEsTUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0VBQUQ7QUFBYSxpQkFBUyxNQUF0QjtBQUF1QixpQkFBUyxFQUFFYyxPQUFPLENBQUMyQixNQUExQztBQUFrRCxlQUFPLEVBQUMsVUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVJLE1BQUMsOERBQUQ7QUFDSSxVQUFFLEVBQUMsMkJBRFA7QUFFSSw0QkFBaUIsNkJBRnJCO0FBR0ksa0JBQVUsRUFBRTtBQUNSLHdCQUFjO0FBRE4sU0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBREosRUFZSSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLFVBQWhCO0FBQTJCLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUMsT0FBUDtBQUFlQyxtQkFBUyxFQUFFLE1BQTFCO0FBQzlCQyxzQkFBWSxFQUFDO0FBRGlCLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkosQ0FESixDQTVFSixDQURKLENBRFI7QUFrR0MsS0FuR0ssQ0FGZDtBQXVHQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVLdEIsUUFGTCxDQURKO0FBT0g7O0FBM0xxRDs7QUE4TG5ELGVBQWV1QixrQkFBZixHQUFvQztBQUN2QyxNQUFJckIsSUFBSSxHQUFDO0FBQUNQLE1BQUUsRUFBQztBQUFKLEdBQVQ7QUFDQSxTQUFPO0FBQ0hoQyxTQUFLLEVBQUc7QUFDSnVDO0FBREk7QUFETCxHQUFQO0FBTUgsQyxDQUNEOztBQUVlc0IsMElBQVUsQ0FBQ0MsdURBQUQsQ0FBVixDQUE4QnpELGFBQTlCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDMVFBO0FBQUE7QUFBTyxNQUFNeUQsVUFBVSxHQUFJaEMsS0FBRCxLQUFpQjtBQUd2Q2lDLE1BQUksRUFBQyxFQUhrQztBQU12Q0MsU0FBTyxFQUFFO0FBQ0xSLFVBQU0sRUFBRyxHQUFFMUIsS0FBSyxDQUFDbUMsT0FBTixDQUFjQyxJQUFNO0FBRDFCLEdBTjhCO0FBU25DLDhCQUEyQjtBQUMzQkMsU0FBSyxFQUFDO0FBRHFCLEdBVFE7QUFZdkNDLFNBQU8sRUFBQyxFQVorQjtBQWV2Q2hCLFFBQU0sRUFBQyxFQWZnQztBQWtCdkNKLE9BQUssRUFBQztBQUNGcUIsVUFBTSxFQUFFLENBRE47QUFFRkMsY0FBVSxFQUFFLFFBRlYsQ0FFb0I7O0FBRnBCLEdBbEJpQztBQXNCdkNqQixZQUFVLEVBQUMsRUF0QjRCO0FBeUJ2Q2tCLG1CQUFpQixFQUFDO0FBQ2RDLFNBQUssRUFBRSxLQURPO0FBRWRDLGFBQVMsRUFBRSxRQUZHO0FBR2RmLGFBQVMsRUFBQztBQUhJLEdBekJxQjtBQThCdkNsQixhQUFXLEVBQUM7QUFDUmtCLGFBQVMsRUFBQztBQURGLEdBOUIyQjtBQWlDdkMsNkJBQTBCO0FBQ3ZCYyxTQUFLLEVBQUM7QUFEaUIsR0FqQ2E7QUFzQ3ZDRSxNQUFJLEVBQUM7QUFDRDlCLE9BQUcsRUFBQyxHQURIO0FBRUQrQixRQUFJLEVBQUM7QUFGSjtBQXRDa0MsQ0FBakIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsbUJBQU4sU0FBa0N0RSwrQ0FBbEMsQ0FBNEU7QUFDeEVDLGFBQVcsQ0FBQ1AsS0FBRCxFQUF3QjtBQUMvQixVQUFNQSxLQUFOOztBQUQrQiwrQ0FhZixNQUFNO0FBQ3RCLFdBQUtRLFFBQUwsQ0FBYztBQUFFTSxrQkFBVSxFQUFFLENBQUMsS0FBS0osS0FBTCxDQUFXSTtBQUExQixPQUFkO0FBQ0gsS0Fma0M7O0FBQUEsK0NBZ0JmLE1BQU07QUFDdEIsV0FBS04sUUFBTCxDQUFjO0FBQUVpQix1QkFBZSxFQUFDLENBQUUsS0FBS2YsS0FBTCxDQUFXZTtBQUEvQixPQUFkO0FBQ0gsS0FsQmtDOztBQUFBLGtEQW1CWixNQUFNO0FBRXpCLFdBQUtqQixRQUFMLENBQWM7QUFBRUMsMEJBQWtCLEVBQUMsQ0FBRSxLQUFLQyxLQUFMLENBQVdEO0FBQWxDLE9BQWQ7QUFDSCxLQXRCa0M7O0FBQUEseUNBdUJwQlMsT0FBRCxJQUFhLE1BQU07QUFDN0IsV0FBS1YsUUFBTCxDQUFjO0FBQUVJLGdCQUFRLEVBQUU7QUFBWixPQUFkO0FBQ0FPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0gsS0ExQmtDOztBQUFBLCtDQTJCZEYsQ0FBRCxJQUFPLENBRzFCLENBOUJrQzs7QUFBQSw4Q0ErQmhCLE1BQU07QUFDckIsV0FBS1IsUUFBTCxDQUFjO0FBQUVpQix1QkFBZSxFQUFDLENBQUUsS0FBS2YsS0FBTCxDQUFXZTtBQUEvQixPQUFkO0FBQ0gsS0FqQ2tDOztBQUUvQixTQUFLZixLQUFMLEdBQWE7QUFDVEksZ0JBQVUsRUFBQyxLQURGO0FBRVRGLGNBQVEsRUFBQyxJQUZBO0FBR1RTLGVBQVMsRUFBRSxTQUhGO0FBR2E7QUFDdEJFLG1CQUFhLEVBQUUsQ0FKTjtBQUtUQyxrQkFBWSxFQUFFLElBTEw7QUFNVEMscUJBQWUsRUFBRSxLQU5SO0FBT1RoQix3QkFBa0IsRUFBRSxLQVBYO0FBUVRpQixrQkFBWSxFQUFFO0FBUkwsS0FBYjtBQVVIOztBQXNCREMsUUFBTSxHQUFFO0FBQ0osVUFBTTtBQUFDRSxhQUFEO0FBQVVDO0FBQVYsUUFBbUIsS0FBSzlCLEtBQTlCLENBREksQ0FFSjs7QUFDQSxVQUFNNkUsVUFBVSxHQUNaLE1BQUMsZ0VBQUQ7QUFBUSxVQUFJLEVBQUUsS0FBS25FLEtBQUwsQ0FBV0ksVUFBekI7QUFBdUMsYUFBTyxFQUFFLEtBQUs2QixXQUFyRDtBQUFrRSx5QkFBZ0IsbUJBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFdBQUssRUFBRTtBQUFDNkIsYUFBSyxFQUFFO0FBQVIsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFhLFFBQUUsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJLE1BQUMsb0VBQUQ7QUFBYSxXQUFLLEVBQUU7QUFBQ2YsYUFBSyxFQUFDLE9BQVA7QUFBZUMsaUJBQVMsRUFBQztBQUF6QixPQUFwQjtBQUF1RCxhQUFPLEVBQUUsTUFBTSxLQUFLb0Isb0JBQUwsRUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFxRyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBckcsQ0FGSixFQUlJLE1BQUMsaUVBQUQ7QUFDSSxVQUFJLEVBQUUsS0FBS3BFLEtBQUwsQ0FBV0Qsa0JBRHJCO0FBRUkscUJBQWUsRUFBQyxnQkFGcEI7QUFHSSxrQkFBWSxFQUFFO0FBQ1ZvQyxnQkFBUSxFQUFFLEtBREE7QUFFVkMsa0JBQVUsRUFBRTtBQUZGLE9BSGxCO0FBT0ksb0JBQWMsRUFBRTtBQUFFRixXQUFHLEVBQUUsR0FBUDtBQUFZK0IsWUFBSSxFQUFFO0FBQWxCLE9BUHBCO0FBUUksYUFBTyxFQUFFLEtBQUtHLG9CQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BV0ksTUFBQyw2REFBRDtBQUFLLE9BQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREosQ0FYSixDQUpKLEVBbUJJLE1BQUMsbUVBQUQ7QUFDSSxlQUFTLE1BRGI7QUFFSSxZQUFNLEVBQUMsT0FGWDtBQUdJLFFBQUUsRUFBQyxNQUhQO0FBSUksV0FBSyxFQUFDLHVCQUpWO0FBS0ksVUFBSSxFQUFDLE9BTFQ7QUFNSSxlQUFTLE1BTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CSixDQURKLEVBNkJJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOERBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJO0FBQ0ksWUFBTSxFQUFDLFNBRFg7QUFFSSxlQUFTLEVBQUVqRCxPQUFPLENBQUNrRCxLQUZ2QjtBQUdJLFFBQUUsRUFBQyx1QkFIUDtBQUlJLGNBQVEsTUFKWjtBQUtJLFVBQUksRUFBQyxNQUxUO0FBTUksY0FBUSxFQUFFLEtBQUtDLGlCQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFVSTtBQUFPLGFBQU8sRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw2REFBRDtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLGVBQVMsRUFBRW5ELE9BQU8sQ0FBQ29ELFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLENBVkosRUFlSSxNQUFDLDZEQUFEO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFDLFNBQTVCO0FBQXNDLGFBQU8sRUFBRSxNQUFNLEtBQUtDLGlCQUFMLEVBQXJEO0FBQStFLGVBQVMsRUFBRXJELE9BQU8sQ0FBQ3NELFFBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQWZKLENBREosRUFzQkksTUFBQyxnRUFBRDtBQUFRLGFBQU8sRUFBRSxLQUFLQyxpQkFBdEI7QUFBeUMsV0FBSyxFQUFDLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKLEVBeUJJLE1BQUMsZ0VBQUQ7QUFBUSxhQUFPLEVBQUUsS0FBS0EsaUJBQXRCO0FBQXlDLFdBQUssRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJKLENBN0JKLENBREosQ0FESjs7QUFnRUEsVUFBTUQsUUFBUSxHQUNWLE1BQUMsZ0VBQUQ7QUFBUSxVQUFJLEVBQUUsS0FBS3pFLEtBQUwsQ0FBV2UsZUFBekI7QUFBNEMsYUFBTyxFQUFFLEtBQUt5RCxpQkFBMUQ7QUFBNkUseUJBQWdCLG1CQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUU7QUFBQ1YsYUFBSyxFQUFFO0FBQVIsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFhLFFBQUUsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJLE1BQUMsbUVBQUQ7QUFDSSxlQUFTLE1BRGI7QUFFSSxZQUFNLEVBQUMsT0FGWDtBQUdJLFFBQUUsRUFBQyxNQUhQO0FBSUksV0FBSyxFQUFDLGdCQUpWO0FBS0ksVUFBSSxFQUFDLE1BTFQ7QUFNSSxVQUFJLEVBQUMsTUFOVDtBQU9JLGVBQVMsTUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FESixFQWFJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsZ0VBQUQ7QUFBUSxhQUFPLEVBQUUsTUFBTSxLQUFLYSxnQkFBTCxFQUF2QjtBQUFnRCxXQUFLLEVBQUMsU0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQUtJLE1BQUMsZ0VBQUQ7QUFBUSxhQUFPLEVBQUUsS0FBS0EsZ0JBQXRCO0FBQXdDLFdBQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosQ0FiSixDQURKLENBREo7O0FBNEJBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNkRBQUQ7QUFBUSxhQUFPLEVBQUUsTUFBTSxLQUFLRCxpQkFBTCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtRUFBRDtBQUNJLGVBQVMsRUFBQyxhQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUtJLE1BQUMsZ0VBQUQ7QUFBUyxhQUFPLEVBQUMsT0FBakI7QUFBeUIsZUFBUyxFQUFFdkQsT0FBTyxDQUFDbUMsT0FBNUM7QUFBcUQsZUFBUyxFQUFDLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixFQU1JLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsK0RBQUQ7QUFDSSxTQUFHLEVBQ0M5Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVGLE1BQWYsRUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFNSSxNQUFDLG1FQUFEO0FBQ0ksZUFBUyxFQUFFSixPQUFPLENBQUMwQyxpQkFEdkI7QUFFSSxhQUFPLEVBQUUsV0FGYjtBQUdJLGtCQUFZLE1BSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkosQ0FOSixDQURKLEVBdUJLTSxVQXZCTCxFQXdCS00sUUF4QkwsQ0FESjtBQTRCSDs7QUE5SnVFOztBQWlLN0R0QiwwSUFBVSxDQUFDeUIsZ0VBQUQsQ0FBVixDQUFtQ1YsbUJBQW5DLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQUE7QUFBTyxNQUFNVSxlQUFlLEdBQUl4RCxLQUFELEtBQWlCO0FBRTVDa0MsU0FBTyxFQUFFO0FBQ0xSLFVBQU0sRUFBRyxHQUFFMUIsS0FBSyxDQUFDbUMsT0FBTixDQUFjQyxJQUFNO0FBRDFCLEdBRm1DO0FBSzVDLDhCQUEyQjtBQUN2QkMsU0FBSyxFQUFDO0FBRGlCLEdBTGlCO0FBUTVDSSxtQkFBaUIsRUFBQztBQUNkQyxTQUFLLEVBQUUsS0FETztBQUVkQyxhQUFTLEVBQUUsUUFGRztBQUdkZixhQUFTLEVBQUM7QUFISSxHQVIwQjtBQWE1Q3lCLFVBQVEsRUFBQztBQUVMSSxjQUFVLEVBQUMsd0JBRk47QUFHTEMsYUFBUyxFQUFDO0FBSEwsR0FibUM7QUFrQjVDUCxVQUFRLEVBQUM7QUFDTE0sY0FBVSxFQUFDLHdCQUROO0FBRUxDLGFBQVMsRUFBQztBQUZMLEdBbEJtQztBQXNCNUNULE9BQUssRUFBQztBQUNGVSxXQUFPLEVBQUM7QUFETjtBQXRCc0MsQ0FBakIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQSxNQUFNQyxVQUFOLFNBQXlCcEYsK0NBQXpCLENBQW1FO0FBQy9EQyxhQUFXLENBQUNQLEtBQUQsRUFBd0I7QUFDL0IsVUFBTUEsS0FBTjs7QUFEK0IsZ0RBVWQsTUFBTTtBQUN2QixXQUFLUSxRQUFMLENBQWM7QUFBRW1GLGtCQUFVLEVBQUUsQ0FBQyxLQUFLakYsS0FBTCxDQUFXaUY7QUFBMUIsT0FBZDtBQUNILEtBWmtDOztBQUFBLDZDQWFqQixNQUFNO0FBQ3BCLFlBQU07QUFBRUM7QUFBRixVQUFxQixLQUFLNUYsS0FBaEM7QUFDQTRGLG9CQUFjO0FBQ2pCLEtBaEJrQzs7QUFBQSw4Q0FpQmhCLE1BQU07QUFDckIsV0FBS3BGLFFBQUwsQ0FBYztBQUFFcUYsa0JBQVUsRUFBRSxDQUFDLEtBQUtuRixLQUFMLENBQVdtRjtBQUExQixPQUFkO0FBQ0gsS0FuQmtDOztBQUFBLCtDQXFCZmxGLEtBQUssSUFBSTtBQUV6QixXQUFLSCxRQUFMLENBQWM7QUFBRUksZ0JBQVEsRUFBRUQsS0FBSyxDQUFDRTtBQUFsQixPQUFkO0FBRUgsS0F6QmtDOztBQUFBLHlDQTBCcEJLLE9BQUQsSUFBYSxNQUFNO0FBQzdCLFdBQUtWLFFBQUwsQ0FBYztBQUFFSSxnQkFBUSxFQUFFO0FBQVosT0FBZDtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNILEtBN0JrQzs7QUFBQSwrQ0E4QmYsTUFBTTtBQUN0QixXQUFLVixRQUFMLENBQWM7QUFBRXFGLGtCQUFVLEVBQUUsS0FBS25GLEtBQUwsQ0FBV21GO0FBQXpCLE9BQWQ7QUFDSCxLQWhDa0M7O0FBRS9CLFNBQUtuRixLQUFMLEdBQWE7QUFDVG9GLFlBQU0sRUFBQyw2QkFERTtBQUVUQyxrQkFBWSxFQUFHLG9DQUZOO0FBR1RKLGdCQUFVLEVBQUMsS0FIRjtBQUlURSxnQkFBVSxFQUFDLEtBSkY7QUFLVGpGLGNBQVEsRUFBRTtBQUxELEtBQWI7QUFPSDs7QUF3Qk9lLFFBQU0sR0FBRTtBQUNKLFVBQU07QUFBQ0UsYUFBRDtBQUFVQztBQUFWLFFBQW1CLEtBQUs5QixLQUE5QjtBQUNBLFVBQU07QUFBRVk7QUFBRixRQUFlLEtBQUtGLEtBQTFCOztBQUVBLFVBQU1zRixjQUFjLEdBRWhCLE1BQUMsaUVBQUQ7QUFDSSxjQUFRLEVBQUVwRixRQURkO0FBRUksUUFBRSxFQUFDLFdBRlA7QUFHSSxVQUFJLEVBQUU4QixPQUFPLENBQUM5QixRQUFELENBSGpCO0FBSUksYUFBTyxFQUFFLEtBQUsrQixXQUFMLENBQWlCLElBQWpCLENBSmI7QUFLSSxXQUFLLEVBQUU7QUFBQ2dDLFlBQUksRUFBQyxDQUFDLEVBQVA7QUFBVy9CLFdBQUcsRUFBQztBQUFmLE9BTFg7QUFNSSxrQkFBWSxFQUFFO0FBQUVDLGdCQUFRLEVBQUUsS0FBWjtBQUFtQkMsa0JBQVUsRUFBRTtBQUEvQixPQU5sQjtBQU9JLHFCQUFlLEVBQUU7QUFDYkQsZ0JBQVEsRUFBRSxRQURHO0FBRWJDLGtCQUFVLEVBQUU7QUFGQyxPQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BY0ksTUFBQyw2REFBRDtBQUFLLE9BQUMsRUFBRSxDQUFSO0FBQVcsV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBQztBQUFSLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQWRKLEVBaUJJLE1BQUMsNkRBQUQ7QUFBSyxPQUFDLEVBQUUsQ0FBUjtBQUFhLFdBQUssRUFBRTtBQUFDQSxjQUFNLEVBQUM7QUFBUixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBakJKLEVBb0JJLE1BQUMsNkRBQUQ7QUFBSyxPQUFDLEVBQUUsQ0FBUjtBQUFXLFdBQUssRUFBRTtBQUFDQSxjQUFNLEVBQUM7QUFBUixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBcEJKLEVBdUJJLE1BQUMsNkRBQUQ7QUFBSyxPQUFDLEVBQUUsQ0FBUjtBQUFXLFdBQUssRUFBRTtBQUFDQSxjQUFNLEVBQUM7QUFBUixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBdkJKLENBRko7O0FBZ0NBLFdBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsK0RBQUQ7QUFBUSxjQUFRLEVBQUMsUUFBakI7QUFBMEIsZUFBUyxFQUFFbEIsT0FBTyxDQUFDb0UsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVJO0FBQUssZUFBUyxFQUFFcEUsT0FBTyxDQUFDcUUsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMseURBQUQ7QUFBVSxhQUFPLEVBQUMsYUFBbEI7QUFBZ0MsZUFBUyxFQUFFckUsT0FBTyxDQUFDc0UsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBVkosRUFhSSxNQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFFO0FBQUVoQyxhQUFLLEVBQUUsb0JBQVQ7QUFBK0JLLGFBQUssRUFBRSxPQUF0QztBQUErQ0Ysa0JBQVUsRUFBRTtBQUEzRCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUV6QyxPQUFPLENBQUN1RSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FiSixFQW9CRyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwQkgsRUFxQkk7QUFBSyxlQUFTLEVBQUV2RSxPQUFPLENBQUN3RSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BckJKLEVBc0JJO0FBQUssZUFBUyxFQUFFeEUsT0FBTyxDQUFDeUUsY0FBeEI7QUFBeUMsV0FBSyxFQUFFO0FBQUNDLG1CQUFXLEVBQUM7QUFBYixPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUksTUFBQyxtRUFBRDtBQUFZLG9CQUFXLDJCQUF2QjtBQUFtRCxXQUFLLEVBQUMsU0FBekQ7QUFBbUUsV0FBSyxFQUFFO0FBQUNBLG1CQUFXLEVBQUM7QUFBYixPQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw4REFBRDtBQUFPLGtCQUFZLEVBQUUsRUFBckI7QUFBeUIsV0FBSyxFQUFDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLENBRkosRUFPSSxNQUFDLG1FQUFEO0FBQ0ksVUFBSSxFQUFDLEtBRFQ7QUFFSSxvQkFBVyx5QkFGZjtBQUdJLHVCQUFlLEtBQUs3RixLQUFMLENBQVdvRixNQUg5QjtBQUlJLHVCQUFjLE1BSmxCO0FBS0ksYUFBTyxFQUFFLEtBQUtVLGlCQUxsQjtBQU1JLFdBQUssRUFBQyxTQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSixDQVBKLEVBbUJLUixjQW5CTCxDQXRCSixFQTRDSTtBQUFLLGVBQVMsRUFBRW5FLE9BQU8sQ0FBQzRFLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG1FQUFEO0FBQ0ksb0JBQVcsV0FEZjtBQUdJLHVCQUFjLE1BSGxCO0FBS0ksV0FBSyxFQUFDLFNBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9JLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBKLENBREosQ0E1Q0osQ0FESixDQUZKLENBRko7QUFrRUg7O0FBeElzRDs7QUEySXBENUMsMklBQVUsQ0FBQzZDLGlFQUFELENBQVYsQ0FBbUNoQixVQUFuQyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTWlCLFdBQVcsR0FBRyxHQUFwQjtBQUNPLE1BQU1ELGVBQWUsR0FBSTVFLEtBQUQsS0FBaUI7QUFDNUM4RSxNQUFJLEVBQUU7QUFDRnBDLFNBQUssRUFBRSxNQURMO0FBRUZILFVBQU0sRUFBRSxNQUZOO0FBR0ZYLGFBQVMsRUFBRTVCLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBSFQ7QUFJRjRDLFVBQU0sRUFBRSxDQUpOO0FBS0ZDLFlBQVEsRUFBRTtBQUxSLEdBRHNDO0FBUTVDQyxVQUFRLEVBQUU7QUFDTkMsWUFBUSxFQUFFLFVBREo7QUFFTnZCLFdBQU8sRUFBRSxNQUZIO0FBR05qQixTQUFLLEVBQUUsTUFIRDtBQUlOSCxVQUFNLEVBQUUsTUFKRixDQUtOOztBQUxNLEdBUmtDO0FBZTVDNEMsYUFBVyxFQUFFO0FBQ1QsS0FBQ25GLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIxQixhQUFPLEVBQUU7QUFEaUI7QUFEckIsR0FmK0I7QUFvQjVDWSxNQUFJLEVBQUU7QUFDRmUsWUFBUSxFQUFFO0FBRFIsR0FwQnNDO0FBdUI1Q0MsWUFBVSxFQUFFO0FBQ1JkLGVBQVcsRUFBRXpFLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkO0FBREwsR0F2QmdDO0FBMEI1Q3FELE9BQUssRUFBRTtBQUNIbkQsU0FBSyxFQUFDLE9BREg7QUFFSHNCLFdBQU8sRUFBRSxNQUZOO0FBR0gsS0FBQzNELEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIxQixhQUFPLEVBQUU7QUFEaUI7QUFIM0IsR0ExQnFDO0FBaUM1QzhCLFFBQU0sRUFBRTtBQUNKUCxZQUFRLEVBQUUsVUFETjtBQUVKUSxXQUFPLEVBQUUsS0FGTDtBQUdKaEQsU0FBSyxFQUFFLGtCQUhIO0FBSUppRCxnQkFBWSxFQUFFM0YsS0FBSyxDQUFDNEYsS0FBTixDQUFZRCxZQUp0QjtBQUtKRSxtQkFBZSxFQUFFQyxxRUFBSSxDQUFDOUYsS0FBSyxDQUFDK0YsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QixDQUxqQjtBQU1KLGVBQVc7QUFDUEoscUJBQWUsRUFBRUMscUVBQUksQ0FBQzlGLEtBQUssQ0FBQytGLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FBdEIsRUFBNkIsSUFBN0I7QUFEZCxLQU5QO0FBU0p4QixlQUFXLEVBQUV6RSxLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxDQVRUO0FBVUorRCxjQUFVLEVBQUUsQ0FWUjtBQVlKLEtBQUNsRyxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCYSxnQkFBVSxFQUFFLEtBRGM7QUFFMUJ4RCxXQUFLLEVBQUU7QUFGbUI7QUFaMUIsR0FqQ29DO0FBa0Q1Q3lELFlBQVUsRUFBRTtBQUNSVCxXQUFPLEVBQUUxRixLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUREO0FBRVJJLFVBQU0sRUFBRSxNQUZBO0FBR1IyQyxZQUFRLEVBQUUsVUFIRjtBQUlSa0IsaUJBQWEsRUFBRSxNQUpQO0FBS1J6QyxXQUFPLEVBQUUsTUFMRDtBQU1SMEMsY0FBVSxFQUFFLFFBTko7QUFPUkMsa0JBQWMsRUFBRTtBQVBSLEdBbERnQztBQTJENUNDLFdBQVMsRUFBRTtBQUNQbEUsU0FBSyxFQUFFO0FBREEsR0EzRGlDO0FBOEQ1Q21FLFlBQVUsRUFBRTtBQUNSZCxXQUFPLEVBQUUxRixLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUREO0FBRVI7QUFDQXNFLGVBQVcsRUFBRyxjQUFhekcsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQsQ0FBaUIsS0FIcEM7QUFJUnVFLGNBQVUsRUFBRTFHLEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCLENBSko7QUFLUmxFLFNBQUssRUFBRSxNQUxDO0FBTVIsS0FBQzFDLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIzQyxXQUFLLEVBQUU7QUFEbUI7QUFOdEIsR0E5RGdDO0FBd0U1QzhCLGdCQUFjLEVBQUU7QUFDWmIsV0FBTyxFQUFFLE1BREc7QUFFWixLQUFDM0QsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQjFCLGFBQU8sRUFBRTtBQURpQjtBQUZsQixHQXhFNEI7QUE4RTVDZ0IsZUFBYSxFQUFFO0FBQ1hoQixXQUFPLEVBQUUsTUFERTtBQUVYLEtBQUMzRCxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCMUIsYUFBTyxFQUFFO0FBRGlCO0FBRm5CLEdBOUU2QjtBQW9GNUNvQyxTQUFPLEVBQUU7QUFDTEYsbUJBQWUsRUFBQztBQURYLEdBcEZtQztBQXdGNUN6QixjQUFZLEVBQUU7QUFDVjtBQUNBc0IsV0FBTyxFQUFFLEVBRkM7QUFHVi9DLGFBQVMsRUFBRSxRQUhEO0FBSVZ1RCxjQUFVLEVBQUMsTUFKRDtBQUtWLEtBQUNsRyxLQUFLLENBQUNvRixXQUFOLENBQWtCeUIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM1QlgsZ0JBQVUsRUFBQztBQURpQjtBQUx0QixHQXhGOEI7QUFpRzVDWSxhQUFXLEVBQUU7QUFDVEMsWUFBUSxFQUFFbEMsV0FERDtBQUVUakQsYUFBUyxFQUFFLE1BRkY7QUFHVGMsU0FBSyxFQUFFbUMsV0FIRTtBQUlULEtBQUM3RSxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCM0MsV0FBSyxFQUFFbUMsV0FEbUI7QUFFMUJLLGNBQVEsRUFBRSxVQUZnQjtBQUcxQjNDLFlBQU0sRUFBRTtBQUhrQjtBQUpyQixHQWpHK0I7QUEyRzVDTCxTQUFPLEVBQUU7QUFDTFIsVUFBTSxFQUFHLEdBQUUxQixLQUFLLENBQUNtQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBRTtBQUQ3QixHQTNHbUM7QUE4RzVDNEUsa0JBQWdCLEVBQUU7QUFDZHRFLFNBQUssRUFBRW1DLFdBRE87QUFFZCxLQUFDN0UsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQjNDLFdBQUssRUFBRW1DLFdBRG1CO0FBRTFCdEMsWUFBTSxFQUFFO0FBRmtCLEtBRmhCO0FBTWR6QixPQUFHLEVBQUUsRUFOUztBQU9kK0UsbUJBQWUsRUFBRSxTQVBIO0FBUWRvQixlQUFXLEVBQUU7QUFSQyxHQTlHMEI7QUF3SDVDckUsTUFBSSxFQUFFO0FBQ0ZMLFVBQU0sRUFBRTtBQUROLEdBeEhzQztBQTJINUN6QyxTQUFPLEVBQUU7QUFDTCtGLG1CQUFlLEVBQUUsYUFEWjtBQUVMbkQsU0FBSyxFQUFFLE1BRkY7QUFHTDRDLFlBQVEsRUFBRSxDQUhMO0FBSUxJLFdBQU8sRUFBRTFGLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBSko7QUFLTEssY0FBVSxFQUFFLEVBTFA7QUFNTGtFLGNBQVUsRUFBRTFHLEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCLEVBQW1DO0FBQzNDTSxZQUFNLEVBQUVsSCxLQUFLLENBQUMyRyxXQUFOLENBQWtCTyxNQUFsQixDQUF5QkMsS0FEVTtBQUUzQ0MsY0FBUSxFQUFFcEgsS0FBSyxDQUFDMkcsV0FBTixDQUFrQlMsUUFBbEIsQ0FBMkJDO0FBRk0sS0FBbkMsQ0FOUDtBQVVMOUUsVUFBTSxFQUFFLG1CQVZIO0FBV0xYLGFBQVMsRUFBRSxFQVhOO0FBWUxzRSxjQUFVLEVBQUNyQixXQVpOO0FBYUwsS0FBQzdFLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUI5QyxZQUFNLEVBQUUsbUJBRGtCO0FBRTFCWCxlQUFTLEVBQUUsRUFGZTtBQUcxQlksZ0JBQVUsRUFBRSxFQUhjO0FBSTFCMEQsZ0JBQVUsRUFBQ3JCO0FBSmUsS0FiekI7QUFtQkwsS0FBQzdFLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0J5QixJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzVCdEUsWUFBTSxFQUFFLG1CQURvQjtBQUU1QlgsZUFBUyxFQUFFLEVBRmlCO0FBRzVCWSxnQkFBVSxFQUFFLEVBSGdCO0FBSTVCMEQsZ0JBQVUsRUFBQ3JCO0FBSmlCO0FBbkIzQixHQTNIbUM7QUFxSjVDLDRCQUEyQjtBQUN2QmdCLG1CQUFlLEVBQUU7QUFETSxHQXJKaUI7QUF3SjVDLGtCQUFnQjtBQUNaSyxjQUFVLEVBQUU7QUFEQSxHQXhKNEI7QUEySjVDLG1CQUFpQjtBQUNiekIsZUFBVyxFQUFFO0FBREEsR0EzSjJCO0FBOEo1QzZDLGNBQVksRUFBRTtBQUNWWixjQUFVLEVBQUUxRyxLQUFLLENBQUMyRyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QixFQUFtQztBQUMzQ00sWUFBTSxFQUFFbEgsS0FBSyxDQUFDMkcsV0FBTixDQUFrQk8sTUFBbEIsQ0FBeUJLLE9BRFU7QUFFM0NILGNBQVEsRUFBRXBILEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JTLFFBQWxCLENBQTJCSTtBQUZNLEtBQW5DO0FBREYsR0E5SjhCO0FBb0s1Qyx1QkFBcUI7QUFDakJ0QixjQUFVLEVBQUUsQ0FESztBQUVqQixLQUFDbEcsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQmEsZ0JBQVUsRUFBRXJCO0FBRGM7QUFGYixHQXBLdUI7QUEwSzVDLHdCQUFzQjtBQUNsQkosZUFBVyxFQUFFLENBREs7QUFFbEIsS0FBQ3pFLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUJaLGlCQUFXLEVBQUVJO0FBRGE7QUFGWixHQTFLc0I7QUFnTDVDUixNQUFJLEVBQUU7QUFDRm9ELFFBQUksRUFBRSxjQURKO0FBRUYvRSxTQUFLLEVBQUUsTUFGTDtBQUdGSCxVQUFNLEVBQUUsS0FITjtBQUlGb0IsV0FBTyxFQUFFLGNBSlA7QUFLRitELFlBQVEsRUFBRSxNQUxSO0FBTUZoQixjQUFVLEVBQUUsNkNBTlY7QUFPRmlCLGNBQVUsRUFBRSxNQVBWO0FBUUZDLGNBQVUsRUFBRTtBQVJWLEdBaExzQztBQTBMNUN6RCxRQUFNLEVBQUc7QUFDTFYsY0FBVSxFQUFDLFNBRE47QUFFTHlCLFlBQVEsRUFBRSxPQUZMO0FBR0wyQyxTQUFLLEVBQUUsR0FIRjtBQUlML0csT0FBRyxFQUFFO0FBSkEsR0ExTG1DO0FBaU01Q3dELFdBQVMsRUFBQztBQUNOLGFBQVMsTUFESDtBQUVOLGtCQUFjLEtBRlI7QUFHTixZQUFRLEtBSEY7QUFJTix5QkFBcUIsTUFKZjtBQUtOLG1CQUFlLGdCQUxUO0FBTU4sb0JBQWdCO0FBTlYsR0FqTWtDO0FBeU01QyxtQkFBZ0I7QUFDWixtQkFBYztBQURGLEdBek00QjtBQTRNNUMscUJBQWtCO0FBQ2QsdUJBQWtCO0FBREo7QUE1TTBCLENBQWpCLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUEsTUFBTXdELGtCQUFOLFNBQWlDdEosK0NBQWpDLENBQTBFO0FBRXRFcUIsUUFBTSxHQUFFO0FBQ0osVUFBTTtBQUFDRSxhQUFEO0FBQVVDO0FBQVYsUUFBbUIsS0FBSzlCLEtBQTlCO0FBQ0EsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUg7QUFBSyxlQUFTLEVBQUU2QixPQUFPLENBQUMwRixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBSyxlQUFTLEVBQUUxRixPQUFPLENBQUNvRyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESCxFQUlHLE1BQUMsa0VBQUQ7QUFDSSxpQkFBVyxFQUFDLHlDQURoQjtBQUVJLGFBQU8sRUFBRTtBQUNMckIsWUFBSSxFQUFFL0UsT0FBTyxDQUFDd0csU0FEVDtBQUVMdEQsYUFBSyxFQUFFbEQsT0FBTyxDQUFDeUc7QUFGVixPQUZiO0FBTUksZ0JBQVUsRUFBRTtBQUFFLHNCQUFjO0FBQWhCLE9BTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSCxDQUZHLEVBZ0JIO0FBQUssZUFBUyxFQUFFekcsT0FBTyxDQUFDZ0ksWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFaEksT0FBTyxDQUFDb0csVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNXLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURYLENBREosQ0FoQkcsQ0FESjtBQTJCSDs7QUEvQnFFOztBQW1DM0RwRSwwSUFBVSxDQUFDaUcsOERBQUQsQ0FBVixDQUFrQ0Ysa0JBQWxDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNRSxjQUFjLEdBQUloSSxLQUFELEtBQWlCO0FBQzNDeUYsUUFBTSxFQUFFO0FBQ0pQLFlBQVEsRUFBRSxVQUROO0FBRUpRLFdBQU8sRUFBRSxLQUZMO0FBR0poRCxTQUFLLEVBQUUsa0JBSEg7QUFJSmlELGdCQUFZLEVBQUUzRixLQUFLLENBQUM0RixLQUFOLENBQVlELFlBSnRCO0FBS0pFLG1CQUFlLEVBQUVDLHFFQUFJLENBQUM5RixLQUFLLENBQUMrRixPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBQXRCLEVBQTZCLElBQTdCLENBTGpCO0FBTUosZUFBVztBQUNQSixxQkFBZSxFQUFFQyxxRUFBSSxDQUFDOUYsS0FBSyxDQUFDK0YsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QjtBQURkLEtBTlA7QUFTSnhCLGVBQVcsRUFBRXpFLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBVFQ7QUFVSitELGNBQVUsRUFBRSxDQVZSO0FBV0osS0FBQ2xHLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUJhLGdCQUFVLEVBQUUsS0FEYztBQUUxQnhELFdBQUssRUFBRTtBQUZtQixLQVgxQjtBQWVKLEtBQUMxQyxLQUFLLENBQUNvRixXQUFOLENBQWtCeUIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM1QmxELGFBQU8sRUFBQztBQURvQixLQWY1QjtBQWtCSixLQUFDM0QsS0FBSyxDQUFDb0YsV0FBTixDQUFrQnlCLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDNUJsRCxhQUFPLEVBQUM7QUFEb0I7QUFsQjVCLEdBRG1DO0FBdUIzQ29FLGNBQVksRUFBQztBQUNUN0MsWUFBUSxFQUFFLFVBREQ7QUFFVFEsV0FBTyxFQUFFLEtBRkE7QUFHVGpCLGVBQVcsRUFBRXpFLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBSEo7QUFJVCtELGNBQVUsRUFBRSxDQUpIO0FBS1QsS0FBQ2xHLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUJhLGdCQUFVLEVBQUUsS0FEYztBQUUxQnhELFdBQUssRUFBRSxNQUZtQjtBQUcxQmlCLGFBQU8sRUFBQztBQUhrQixLQUxyQjtBQVVULEtBQUMzRCxLQUFLLENBQUNvRixXQUFOLENBQWtCeUIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM1QmxELGFBQU8sRUFBQztBQURvQixLQVZ2QjtBQWFULEtBQUMzRCxLQUFLLENBQUNvRixXQUFOLENBQWtCeUIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM1QmxELGFBQU8sRUFBQztBQURvQjtBQWJ2QixHQXZCOEI7QUF3QzNDd0MsWUFBVSxFQUFFO0FBQ1JULFdBQU8sRUFBRTFGLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREQ7QUFFUkksVUFBTSxFQUFFLE1BRkE7QUFHUjJDLFlBQVEsRUFBRSxVQUhGO0FBSVJrQixpQkFBYSxFQUFFLE1BSlA7QUFLUnpDLFdBQU8sRUFBRSxNQUxEO0FBTVIwQyxjQUFVLEVBQUUsUUFOSjtBQU9SQyxrQkFBYyxFQUFFLFFBUFI7QUFRUjVELFNBQUssRUFBRTtBQVJDLEdBeEMrQjtBQWtEM0M2RCxXQUFTLEVBQUU7QUFDUGxFLFNBQUssRUFBRTtBQURBLEdBbERnQztBQXFEM0NtRSxZQUFVLEVBQUU7QUFDUmQsV0FBTyxFQUFFMUYsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERDtBQUVSO0FBQ0FzRSxlQUFXLEVBQUcsY0FBYXpHLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBQWlCLEtBSHBDO0FBSVJ1RSxjQUFVLEVBQUUxRyxLQUFLLENBQUMyRyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QixDQUpKO0FBS1JsRSxTQUFLLEVBQUUsTUFMQztBQU1SLEtBQUMxQyxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCM0MsV0FBSyxFQUFFO0FBRG1CO0FBTnRCO0FBckQrQixDQUFqQixDQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBT0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLE1BQU11RixhQUFOLFNBQTRCekosK0NBQTVCLENBQW1GO0FBQy9FQyxhQUFXLENBQUNQLEtBQUQsRUFBNkI7QUFDcEMsVUFBTUEsS0FBTjs7QUFEb0MsOENBVXJCLE1BQU07QUFDckIsV0FBS1EsUUFBTCxDQUFjO0FBQUVxRixrQkFBVSxFQUFFLENBQUMsS0FBS25GLEtBQUwsQ0FBV21GO0FBQTFCLE9BQWQ7QUFDSCxLQVp1Qzs7QUFBQSwrQ0FhcEIsTUFBTTtBQUN0QixXQUFLckYsUUFBTCxDQUFjO0FBQUVxRixrQkFBVSxFQUFFLEtBQUtuRixLQUFMLENBQVdtRjtBQUF6QixPQUFkO0FBQ0gsS0FmdUM7O0FBQUEsZ0RBZ0JuQixNQUFNO0FBQ3ZCLFdBQUtyRixRQUFMLENBQWM7QUFBRW1GLGtCQUFVLEVBQUUsQ0FBQyxLQUFLakYsS0FBTCxDQUFXaUY7QUFBMUIsT0FBZDtBQUNILEtBbEJ1Qzs7QUFFcEMsU0FBS2pGLEtBQUwsR0FBYTtBQUNUb0YsWUFBTSxFQUFFLDZCQURDO0FBRVRDLGtCQUFZLEVBQUUsb0NBRkw7QUFHVEosZ0JBQVUsRUFBRSxLQUhIO0FBSVRFLGdCQUFVLEVBQUU7QUFKSCxLQUFiO0FBTUExRSxXQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEtBQVo7QUFDSDs7QUFVRDJCLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBQ0UsYUFBRDtBQUFVQyxXQUFWO0FBQWdCQztBQUFoQixRQUF5QixLQUFLL0IsS0FBcEM7O0FBQ0EsVUFBTWdLLFVBQVUsR0FDWixNQUFDLDZEQUFEO0FBQ0ksa0JBQVksRUFBRTtBQUFFbkgsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CQyxrQkFBVSxFQUFFO0FBQS9CLE9BRGxCO0FBRUksUUFBRSxFQUFFLEtBQUtwQyxLQUFMLENBQVdvRixNQUZuQjtBQUdJLGlCQUFXLE1BSGY7QUFJSSxxQkFBZSxFQUFFO0FBQUVqRCxnQkFBUSxFQUFFLEtBQVo7QUFBbUJDLGtCQUFVLEVBQUU7QUFBL0IsT0FKckI7QUFLSSxVQUFJLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV2lGLFVBTHJCO0FBTUksYUFBTyxFQUFFLEtBQUtzRSxrQkFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixDQURKOztBQVlBLFVBQU1DLFFBQVEsR0FDVixNQUFDLDhEQUFEO0FBQU0sZUFBUyxFQUFFckksT0FBTyxDQUFDa0MsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbUVBQUQ7QUFDSSxlQUFTLEVBQUVsQyxPQUFPLENBQUNtQixLQUR2QjtBQUVJLFdBQUssRUFDRCxtRkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUksTUFBQyxnRUFBRDtBQUNJLGVBQVMsRUFBRW5CLE9BQU8sQ0FBQ3NJLFNBRHZCO0FBRUksU0FBRyxFQUNDakksNkNBQUssQ0FBQ0MsUUFBTixDQUFlRixNQUFmLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KLENBREosRUFlSSxNQUFDLHFFQUFEO0FBQWEsZUFBUyxFQUFFSixPQUFPLENBQUN1QyxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtRUFBRDtBQUNJLGVBQVMsRUFBRXZDLE9BQU8sQ0FBQzBDLGlCQUR2QjtBQUVJLGFBQU8sRUFBRSxJQUZiO0FBR0ksa0JBQVksTUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtLckMsNkNBQUssQ0FBQ0MsUUFBTixDQUFlQyxRQUFmLEVBTEwsQ0FESixFQVNJLE1BQUMsbUVBQUQ7QUFDSSxlQUFTLEVBQUVQLE9BQU8sQ0FBQ3VJLFNBRHZCO0FBRUksYUFBTyxFQUFFLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlsSSw2Q0FBSyxDQUFDbUksTUFBTixDQUFhQyxNQUFiLEVBQUosQ0FOSixDQVRKLEVBbUJJLE1BQUMsbUVBQUQ7QUFDSSxlQUFTLEVBQUV6SSxPQUFPLENBQUMwSSxTQUR2QjtBQUVJLGFBQU8sRUFBRSxTQUZiO0FBR0ksV0FBSyxFQUFFLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlySSw2Q0FBSyxDQUFDbUksTUFBTixDQUFhQyxNQUFiLEVBQUosQ0FQSixDQW5CSixFQTZCSSxNQUFDLGdFQUFEO0FBQVMsV0FBSyxNQUFkO0FBQWUsZUFBUyxFQUFFekksT0FBTyxDQUFDbUMsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTdCSixFQStCSSxNQUFDLDhEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBZ0IsZUFBUyxFQUFFbkMsT0FBTyxDQUFDMkksV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQkosQ0FmSixDQURKOztBQXFEQSxVQUFNQyxVQUFVLEdBRVosTUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRTVJLE9BQU8sQ0FBQ2tDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLG1FQUFEO0FBQ0ksZUFBUyxFQUFFbEMsT0FBTyxDQUFDNkksWUFEdkI7QUFFSSxhQUFPLEVBQUUsSUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtJLE1BQUMsZ0VBQUQ7QUFBUyxXQUFLLE1BQWQ7QUFBZSxlQUFTLEVBQUU3SSxPQUFPLENBQUNtQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEosQ0FGSixFQVdJLE1BQUMsOERBQUQ7QUFBTSxlQUFTLEVBQUVuQyxPQUFPLENBQUM4SSxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR1EsS0FBSzNLLEtBQUwsQ0FBVzRLLEtBQVgsQ0FBaUJ0SSxHQUFqQixDQUFxQixVQUFTdUksSUFBVCxFQUFjQyxDQUFkLEVBQWdCO0FBRXZDLGFBQ1E7QUFBSyxXQUFHLEVBQUVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsa0VBQUQ7QUFBVSxrQkFBVSxFQUFDLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdFQUFEO0FBQVEsV0FBRyxFQUFDLFlBQVo7QUFBeUIsV0FBRyxFQUFFNUksNkNBQUssQ0FBQ0MsUUFBTixDQUFlRixNQUFmLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBSUksTUFBQyxzRUFBRDtBQUNJLGlCQUFTLEVBQ0wsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJLE1BQUMsbUVBQUQ7QUFDSSxtQkFBUyxFQUFDLE1BRGQ7QUFFSSxpQkFBTyxFQUFDLE9BRlo7QUFHSSxtQkFBUyxFQUFFSixPQUFPLENBQUNrSixjQUh2QjtBQUlJLGVBQUssRUFBQyxhQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNS0YsSUFBSSxDQUFDRyxRQU5WLENBREosQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosQ0FESixFQXFCSSxNQUFDLGdFQUFEO0FBQVMsZUFBTyxFQUFDLE9BQWpCO0FBQXlCLGlCQUFTLEVBQUVuSixPQUFPLENBQUNtQyxPQUE1QztBQUFxRCxpQkFBUyxFQUFDLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFyQkosQ0FEUjtBQThCRyxLQWhDRCxDQUhSLENBWEosQ0FGSjs7QUF1REEsVUFBTWlILE1BQU0sR0FFUixNQUFDLCtEQUFEO0FBQ0ksYUFBTyxFQUFFO0FBQ0xDLGFBQUssRUFBRXJKLE9BQU8sQ0FBQ2lIO0FBRFYsT0FEYjtBQUlJLGFBQU8sRUFBQyxZQUpaO0FBS0ksWUFBTSxFQUFDLE1BTFg7QUFNSSxVQUFJLEVBQUUsS0FBS3BJLEtBQUwsQ0FBV21GLFVBTnJCO0FBT0ksZ0JBQVUsRUFBRTtBQUNSc0YsbUJBQVcsRUFBRSxJQURMLENBQ1c7O0FBRFgsT0FQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVdJO0FBQUssZUFBUyxFQUFFdEosT0FBTyxDQUFDcUUsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbUVBQUQ7QUFBWSxhQUFPLEVBQUUsTUFBSSxLQUFLa0YsaUJBQUwsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBWEosRUFpQkksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixRQUFwQixFQUE4QjlJLEdBQTlCLENBQWtDLENBQUMrSSxJQUFELEVBQU90SyxLQUFQLEtBQy9CLE1BQUMsa0VBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLFNBQUcsRUFBRXNLLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZXRLLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEIsR0FBa0MsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpELENBREosRUFFSSxNQUFDLHNFQUFEO0FBQWMsYUFBTyxFQUFFc0ssSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREgsQ0FETCxDQWpCSixDQUZKOztBQWdDQSxVQUFNQyxJQUFJLEdBQ047QUFBUSxlQUFTLEVBQUV6SixPQUFPLENBQUNELE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKOztBQUtBLFdBQ0k7QUFBSyxlQUFTLEVBQUVDLE9BQU8sQ0FBQytFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDBFQUFEO0FBQVksb0JBQWMsRUFBRSxLQUFLMkUsZ0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMsNkRBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBa0IsV0FBSyxFQUFFO0FBQUNqSCxrQkFBVSxFQUFDO0FBQVosT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsNkRBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsRUFBdkI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQWtDLGVBQVMsRUFBQyxVQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s0RixRQURMLEVBRUtPLFVBRkwsQ0FGSixFQU1JLE1BQUMsNkRBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsRUFBdkI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2EsSUFETCxDQU5KLENBRkosQ0FESjtBQW1CSDs7QUF0TThFOztBQTBNcEV6SCwwSUFBVSxDQUFDMkgscURBQUQsQ0FBVixDQUE2QnpCLGFBQTdCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDNVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNcEQsV0FBVyxHQUFHLEdBQXBCO0FBQ08sTUFBTTZFLFNBQVMsR0FBSTFKLEtBQUQsS0FBaUI7QUFDdEM4RSxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLENBRE47QUFFRkMsWUFBUSxFQUFFLFNBRlI7QUFHRmEsbUJBQWUsRUFBRTtBQUhmLEdBRGdDO0FBTXRDMkQsTUFBSSxFQUFDO0FBQ0R6RSxVQUFNLEVBQUUsQ0FEUDtBQUVEckMsU0FBSyxFQUFFLE1BRk47QUFHREgsVUFBTSxFQUFFLE1BSFA7QUFJRFgsYUFBUyxFQUFFNUIsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQ7QUFKVixHQU5pQztBQVl0QzBHLFlBQVUsRUFBQztBQUNQbkcsU0FBSyxFQUFFLE1BREE7QUFFUEgsVUFBTSxFQUFFLE1BRkQ7QUFHUFgsYUFBUyxFQUFDLE9BSEg7QUFJUG1ELFVBQU0sRUFBRSxDQUpEO0FBS1BDLFlBQVEsRUFBRSxRQUxIO0FBTVArQixZQUFRLEVBQUU7QUFOSCxHQVoyQjtBQW9CdEM3RixPQUFLLEVBQUU7QUFDSHlDLFdBQU8sRUFBQyxNQURMO0FBRUgyQyxrQkFBYyxFQUFFLFFBRmI7QUFHSDlELGNBQVUsRUFBRTtBQUhULEdBcEIrQjtBQXlCdEN5QyxVQUFRLEVBQUU7QUFDTkMsWUFBUSxFQUFFLFVBREo7QUFFTnZCLFdBQU8sRUFBRSxNQUZIO0FBR05qQixTQUFLLEVBQUUsTUFIRDtBQUlOSCxVQUFNLEVBQUUsTUFKRixDQUtOOztBQUxNLEdBekI0QjtBQWdDdEM0QyxhQUFXLEVBQUU7QUFDVCxLQUFDbkYsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQjFCLGFBQU8sRUFBRTtBQURpQjtBQURyQixHQWhDeUI7QUFxQ3RDWSxNQUFJLEVBQUU7QUFDRmUsWUFBUSxFQUFFO0FBRFIsR0FyQ2dDO0FBd0N0Q0MsWUFBVSxFQUFFO0FBQ1JkLGVBQVcsRUFBRXpFLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkO0FBREwsR0F4QzBCO0FBMkN0Q3FELE9BQUssRUFBRTtBQUNIbkQsU0FBSyxFQUFDLE9BREg7QUFFSHNCLFdBQU8sRUFBRSxNQUZOO0FBR0gsS0FBQzNELEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIxQixhQUFPLEVBQUU7QUFEaUI7QUFIM0IsR0EzQytCO0FBa0R0QzhCLFFBQU0sRUFBRTtBQUNKUCxZQUFRLEVBQUUsVUFETjtBQUVKUSxXQUFPLEVBQUUsS0FGTDtBQUdKaEQsU0FBSyxFQUFFLGtCQUhIO0FBSUppRCxnQkFBWSxFQUFFM0YsS0FBSyxDQUFDNEYsS0FBTixDQUFZRCxZQUp0QjtBQUtKRSxtQkFBZSxFQUFFQyxxRUFBSSxDQUFDOUYsS0FBSyxDQUFDK0YsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QixDQUxqQjtBQU1KLGVBQVc7QUFDUEoscUJBQWUsRUFBRUMscUVBQUksQ0FBQzlGLEtBQUssQ0FBQytGLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FBdEIsRUFBNkIsSUFBN0I7QUFEZCxLQU5QO0FBU0p4QixlQUFXLEVBQUV6RSxLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxDQVRUO0FBVUorRCxjQUFVLEVBQUUsQ0FWUjtBQVlKLEtBQUNsRyxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCYSxnQkFBVSxFQUFFLEtBRGM7QUFFMUJ4RCxXQUFLLEVBQUU7QUFGbUI7QUFaMUIsR0FsRDhCO0FBbUV0Q3lELFlBQVUsRUFBRTtBQUNSVCxXQUFPLEVBQUUxRixLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUREO0FBRVJJLFVBQU0sRUFBRSxNQUZBO0FBR1IyQyxZQUFRLEVBQUUsVUFIRjtBQUlSa0IsaUJBQWEsRUFBRSxNQUpQO0FBS1J6QyxXQUFPLEVBQUUsTUFMRDtBQU1SMEMsY0FBVSxFQUFFLFFBTko7QUFPUkMsa0JBQWMsRUFBRTtBQVBSLEdBbkUwQjtBQTRFdENDLFdBQVMsRUFBRTtBQUNQbEUsU0FBSyxFQUFFO0FBREEsR0E1RTJCO0FBK0V0Q21FLFlBQVUsRUFBRTtBQUNSZCxXQUFPLEVBQUUxRixLQUFLLENBQUNtQyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUREO0FBRVI7QUFDQXNFLGVBQVcsRUFBRyxjQUFhekcsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQsQ0FBaUIsS0FIcEM7QUFJUnVFLGNBQVUsRUFBRTFHLEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCLENBSko7QUFLUmxFLFNBQUssRUFBRSxNQUxDO0FBTVIsS0FBQzFDLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIzQyxXQUFLLEVBQUU7QUFEbUI7QUFOdEIsR0EvRTBCO0FBeUZ0QzhCLGdCQUFjLEVBQUU7QUFDWmIsV0FBTyxFQUFFLE1BREc7QUFFWixLQUFDM0QsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQjFCLGFBQU8sRUFBRTtBQURpQixLQUZsQjtBQUtaYyxlQUFXLEVBQUM7QUFMQSxHQXpGc0I7QUFnR3RDRSxlQUFhLEVBQUU7QUFDWGhCLFdBQU8sRUFBRSxNQURFO0FBRVgsS0FBQzNELEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIxQixhQUFPLEVBQUU7QUFEaUI7QUFGbkIsR0FoR3VCO0FBc0d0Q29DLFNBQU8sRUFBRTtBQUNMRixtQkFBZSxFQUFDO0FBRFgsR0F0RzZCO0FBMEd0Q3pCLGNBQVksRUFBRTtBQUNaO0FBQ0VzQixXQUFPLEVBQUUsRUFGQztBQUdWL0MsYUFBUyxFQUFFLFFBSEQ7QUFJVnVELGNBQVUsRUFBQztBQUpELEdBMUd3QjtBQWdIdENZLGFBQVcsRUFBRTtBQUNUQyxZQUFRLEVBQUVsQyxXQUREO0FBRVRqRCxhQUFTLEVBQUUsTUFGRjtBQUdUYyxTQUFLLEVBQUVtQyxXQUhFO0FBSVQsS0FBQzdFLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUIzQyxXQUFLLEVBQUVtQyxXQURtQjtBQUUxQkssY0FBUSxFQUFFLFVBRmdCO0FBRzFCM0MsWUFBTSxFQUFFO0FBSGtCO0FBSnJCLEdBaEh5QjtBQTBIdEN5RSxrQkFBZ0IsRUFBRTtBQUNkdEUsU0FBSyxFQUFFbUMsV0FETztBQUVkLEtBQUM3RSxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCM0MsV0FBSyxFQUFFbUMsV0FEbUI7QUFFMUJ0QyxZQUFNLEVBQUU7QUFGa0IsS0FGaEI7QUFNZHpCLE9BQUcsRUFBRSxFQU5TO0FBT2QrRSxtQkFBZSxFQUFFLFNBUEg7QUFRZG9CLGVBQVcsRUFBRTtBQVJDLEdBMUhvQjtBQW9JdENyRSxNQUFJLEVBQUU7QUFDRkwsVUFBTSxFQUFFO0FBRE4sR0FwSWdDO0FBdUl0Q3pDLFNBQU8sRUFBRTtBQUVMK0YsbUJBQWUsRUFBRSxhQUZaO0FBR0xuRCxTQUFLLEVBQUUsTUFIRjtBQUlMNEMsWUFBUSxFQUFFLENBSkw7QUFNTEksV0FBTyxFQUFFMUYsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQsQ0FOSjtBQU9MSyxjQUFVLEVBQUUsRUFQUDtBQVNMa0UsY0FBVSxFQUFFMUcsS0FBSyxDQUFDMkcsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekIsRUFBbUM7QUFDM0NNLFlBQU0sRUFBRWxILEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JPLE1BQWxCLENBQXlCQyxLQURVO0FBRTNDQyxjQUFRLEVBQUVwSCxLQUFLLENBQUMyRyxXQUFOLENBQWtCUyxRQUFsQixDQUEyQkM7QUFGTSxLQUFuQyxDQVRQO0FBYUw5RSxVQUFNLEVBQUUsbUJBYkg7QUFjTFgsYUFBUyxFQUFFLEVBZE47QUFlTHNFLGNBQVUsRUFBQyxDQWZOO0FBZ0JMLEtBQUNsRyxLQUFLLENBQUNvRixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCOUMsWUFBTSxFQUFFLG1CQURrQjtBQUUxQlgsZUFBUyxFQUFFLEVBRmU7QUFHMUJZLGdCQUFVLEVBQUUsRUFIYztBQUkxQjBELGdCQUFVLEVBQUM7QUFKZSxLQWhCekI7QUF1QkwsS0FBQ2xHLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0J5QixJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzVCdEUsWUFBTSxFQUFFLG1CQURvQjtBQUU1QlgsZUFBUyxFQUFFLEVBRmlCO0FBRzVCWSxnQkFBVSxFQUFFLEVBSGdCO0FBSTVCMEQsZ0JBQVUsRUFBQyxDQUppQjtBQUs1QlIsYUFBTyxFQUFDO0FBTG9CLEtBdkIzQjtBQThCTCxLQUFDMUYsS0FBSyxDQUFDb0YsV0FBTixDQUFrQnlCLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDNUJ0RSxZQUFNLEVBQUUsbUJBRG9CO0FBRTVCWCxlQUFTLEVBQUUsRUFGaUI7QUFHNUJZLGdCQUFVLEVBQUUsRUFIZ0I7QUFJNUIwRCxnQkFBVSxFQUFDLENBSmlCO0FBSzVCUixhQUFPLEVBQUM7QUFMb0I7QUE5QjNCLEdBdkk2QjtBQTZLdEMsNEJBQTJCO0FBQ3ZCRyxtQkFBZSxFQUFFO0FBRE0sR0E3S1c7QUFnTHRDLGtCQUFnQjtBQUNaSyxjQUFVLEVBQUU7QUFEQSxHQWhMc0I7QUFtTHRDLG1CQUFpQjtBQUNiekIsZUFBVyxFQUFFO0FBREEsR0FuTHFCO0FBc0x0QzZDLGNBQVksRUFBRTtBQUNWWixjQUFVLEVBQUUxRyxLQUFLLENBQUMyRyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QixFQUFtQztBQUMzQ00sWUFBTSxFQUFFbEgsS0FBSyxDQUFDMkcsV0FBTixDQUFrQk8sTUFBbEIsQ0FBeUJLLE9BRFU7QUFFM0NILGNBQVEsRUFBRXBILEtBQUssQ0FBQzJHLFdBQU4sQ0FBa0JTLFFBQWxCLENBQTJCSTtBQUZNLEtBQW5DO0FBREYsR0F0THdCO0FBNEx0Qyx1QkFBcUI7QUFDakJ0QixjQUFVLEVBQUUsQ0FESztBQUVqQixLQUFDbEcsS0FBSyxDQUFDb0YsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQmEsZ0JBQVUsRUFBRXJCO0FBRGM7QUFGYixHQTVMaUI7QUFrTXRDLHdCQUFzQjtBQUNsQkosZUFBVyxFQUFFLENBREs7QUFFbEIsS0FBQ3pFLEtBQUssQ0FBQ29GLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDMUJaLGlCQUFXLEVBQUVJO0FBRGE7QUFGWixHQWxNZ0I7QUF3TXRDUixNQUFJLEVBQUU7QUFDRm9ELFFBQUksRUFBRSxjQURKO0FBRUYvRSxTQUFLLEVBQUUsTUFGTDtBQUdGSCxVQUFNLEVBQUUsS0FITjtBQUlGb0IsV0FBTyxFQUFFLGNBSlA7QUFLRitELFlBQVEsRUFBRSxNQUxSO0FBTUZoQixjQUFVLEVBQUUsNkNBTlY7QUFPRmlCLGNBQVUsRUFBRSxNQVBWO0FBUUZDLGNBQVUsRUFBRTtBQVJWLEdBeE1nQztBQWtOdEN6RCxRQUFNLEVBQUc7QUFDTFYsY0FBVSxFQUFDLFNBRE47QUFFTHlCLFlBQVEsRUFBRSxVQUZMO0FBR0wyQyxTQUFLLEVBQUUsR0FIRjtBQUlML0csT0FBRyxFQUFFO0FBSkEsR0FsTjZCO0FBeU50Q3dELFdBQVMsRUFBQztBQUNOLGFBQVMsTUFESDtBQUVOLGtCQUFjLEtBRlI7QUFHTixZQUFRLEtBSEY7QUFJTix5QkFBcUIsTUFKZjtBQUtOLG1CQUFlLGdCQUxUO0FBTU4sb0JBQWdCO0FBTlYsR0F6TjRCO0FBaU90QyxtQkFBZ0I7QUFDWixtQkFBYztBQURGLEdBak9zQjtBQW9PdEMscUJBQWtCO0FBQ2QsdUJBQWtCO0FBREosR0FwT29CO0FBdU90Q3JDLE1BQUksRUFBRTtBQUNGTCxhQUFTLEVBQUMsTUFEUjtBQUdGRixVQUFNLEVBQUUsTUFITjtBQUlGZ0YsY0FBVSxFQUFFLE1BSlY7QUFLRmhELGFBQVMsRUFBRSxrQ0FMVDtBQU1GLGVBQVc7QUFDUEEsZUFBUyxFQUFFO0FBREo7QUFOVCxHQXZPZ0M7QUFrUHRDcEIsU0FBTyxFQUFFO0FBQ0xLLGFBQVMsRUFBRSxRQUROO0FBRUxmLGFBQVMsRUFBQyxNQUZMO0FBR0w4RCxXQUFPLEVBQUUxRixLQUFLLENBQUNtQyxPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFIekIsR0FsUDZCO0FBdVB0Q0YsU0FBTyxFQUFFO0FBQ0xSLFVBQU0sRUFBRyxHQUFFMUIsS0FBSyxDQUFDbUMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQUU7QUFEN0IsR0F2UDZCO0FBMFB0Q3VILFNBQU8sRUFBRTtBQUNMQyxjQUFVLEVBQUU7QUFEUCxHQTFQNkI7QUE2UHRDQyxZQUFVLEVBQUU7QUFDUkMsY0FBVSxFQUFFO0FBREosR0E3UDBCO0FBZ1F0QzNKLFFBQU0sRUFBRTtBQUNKd0QsV0FBTyxFQUFFLGNBREw7QUFFSm9HLFVBQU0sRUFBRSxpQkFGSjtBQUdKLDZCQUF5QjtBQUNyQjdELGdCQUFVLEVBQUUsQ0FBQ2xHLEtBQUssQ0FBQ21DLE9BQU4sQ0FBY0M7QUFETjtBQUhyQixHQWhROEI7QUF1UXRDLHNCQUFtQjtBQUNmTyxhQUFTLEVBQUM7QUFESyxHQXZRbUI7QUEwUXRDLDJCQUF3QjtBQUNyQnVELGNBQVUsRUFBQztBQURVLEdBMVFjO0FBNlF0QyxnQ0FBNkI7QUFDekJyRSxnQkFBWSxFQUFDLFFBRFk7QUFFekJjLGFBQVMsRUFBQztBQUZlLEdBN1FTO0FBaVJ0QzJGLFdBQVMsRUFBQztBQUVOMEIsZ0JBQVksRUFBQyxNQUZQO0FBR050SCxTQUFLLEVBQUUsT0FIRDtBQUlOaUIsV0FBTyxFQUFFLDRCQUpIO0FBS05zRyxhQUFTLEVBQUUsTUFMTDtBQU1OckksYUFBUyxFQUFDO0FBTkosR0FqUjRCO0FBeVJ0QzZHLFdBQVMsRUFBQztBQUNOL0YsU0FBSyxFQUFFLE9BREQ7QUFFTmlCLFdBQU8sRUFBRSw0QkFGSDtBQUdOc0csYUFBUyxFQUFFLE1BSEw7QUFJTkMsY0FBVSxFQUFDLGdCQUpMO0FBS050SSxhQUFTLEVBQUM7QUFMSixHQXpSNEI7QUFnU3RDeUcsV0FBUyxFQUFDO0FBQ04zRixTQUFLLEVBQUMsTUFEQTtBQUVOSCxVQUFNLEVBQUM7QUFGRCxHQWhTNEI7QUFvU3RDbUcsYUFBVyxFQUFDO0FBQ1JyRyxTQUFLLEVBQUMsTUFERTtBQUVSOEgsa0JBQWMsRUFBQztBQUZQLEdBcFMwQjtBQXdTdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQXZCLGNBQVksRUFBQztBQUNUaEgsYUFBUyxFQUFDLE1BREQ7QUFFVHNFLGNBQVUsRUFBQztBQUZGLEdBNVN5QjtBQWdUdEMrQyxnQkFBYyxFQUFDO0FBQ1hySCxhQUFTLEVBQUU7QUFEQSxHQWhUdUI7QUFtVHRDYSxtQkFBaUIsRUFBQztBQUNkYixhQUFTLEVBQUM7QUFESTtBQW5Ub0IsQ0FBakIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQ2V3SSxxSEFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFZS9MLGlIQUFNLENBQUNQLGFBQVAsQ0FFUDtBQUFHLHFCQUFnQixFQUFuQjtBQUFzQixJQUFFLEVBQUMsc0NBQXpCO0FBQWdFLFdBQVMsRUFBQywwRkFBMUU7QUFBcUssUUFBTSxFQUFDLE1BQTVLO0FBQW1MLE1BQUksRUFBQyxPQUF4TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWdNO0FBQU0sR0FBQyxFQUFDLHV2QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhNLENBRk8sRUFHVCxVQUhTLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTXVNLElBQU4sU0FBbUI3TCwrQ0FBbkIsQ0FBbUM7QUFDL0JDLGFBQVcsQ0FBQ1AsS0FBRCxFQUFjO0FBQ3JCLFVBQU1BLEtBQU47QUFDSDs7QUFDRDJCLFFBQU0sR0FBRztBQUNMLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FESixFQUlJLE1BQUMsd0RBQUQ7QUFBZSxXQUFLLEVBQUUsS0FBSzNCLEtBQUwsQ0FBVytCLEtBQWpDO0FBQXdDLFdBQUssRUFBRSxLQUFLL0IsS0FBTCxDQUFXNEssS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLENBREo7QUFRSDs7QUFiOEI7O0FBZXBCdUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsTUFBTUEsSUFBTixTQUFtQjdMLCtDQUFuQixDQUFtQztBQUMvQixlQUFhOEwsZUFBYixDQUE2QkMsR0FBN0IsRUFBc0M7QUFDbEMsVUFBTXRLLEtBQUssR0FBRyxNQUFNNUMsMkVBQXNCLEVBQTFDO0FBQ0EsVUFBTXlMLEtBQUssR0FBRyxNQUFNeEssNEVBQXVCLEVBQTNDO0FBQ0EsV0FBTztBQUNDMkIsV0FERDtBQUVDNkk7QUFGRCxLQUFQO0FBSUg7O0FBQ0RqSixRQUFNLEdBQUc7QUFDTDtBQUNBLFVBQU07QUFBRUksV0FBRjtBQUFRNkk7QUFBUixRQUFrQixLQUFLNUssS0FBN0I7QUFDQW1CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZd0osS0FBWixFQUhLLENBSUw7O0FBQ0EsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw2Q0FBRDtBQUFVLFdBQUssRUFBRTdJLEtBQWpCO0FBQXlCLFdBQUssRUFBRTZJLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKO0FBTUg7O0FBcEI4Qjs7QUFzQnBCdUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZWZldGNoUG9zdFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBwdXJlIGZyb20gJ3JlY29tcG9zZS9wdXJlJztcclxuaW1wb3J0IFN2Z0ljb24sIHsgU3ZnSWNvblByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IFN2Z0ljb25DdXN0b20gPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuX19NVUlfU3ZnSWNvbl9fIHx8IFN2Z0ljb247XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdmdJY29uKHBhdGg6YW55LCBkaXNwbGF5TmFtZTpzdHJpbmcpIHtcclxuICAgIGxldCBJY29uOmFueSA9IHByb3BzID0+IChcclxuICAgICAgICA8U3ZnSWNvbkN1c3RvbSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtwYXRofVxyXG4gICAgICAgIDwvU3ZnSWNvbkN1c3RvbT5cclxuICAgICk7XHJcbiAgICBJY29uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICBJY29uID0gcHVyZShJY29uKTtcclxuICAgIEljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcclxuICAgIHJldHVybiBJY29uO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc3ZnQXBpID0ge1xyXG4gICAgY3JlYXRlU3ZnSWNvblxyXG59IiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCdcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJTZWFyY2hSZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iLCJpbXBvcnQgUmVhY3QgLHtDb21wb25lbnQsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuXHJcbmltcG9ydCBWaWRlb0NhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWRlb0NhbGwnO1xyXG5pbXBvcnQgQ29sbGVjdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29sbGVjdGlvbnNcIjtcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgd2l0aFdpZHRoLCB7IGlzV2lkdGhEb3duIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XHJcbmltcG9ydCBFbW9qaUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbnRpbWVudFNhdGlzZmllZCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQWRkUGhvdG9BbHRlcm5hdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkUGhvdG9BbHRlcm5hdGVcIjtcclxuXHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XHJcblxyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xyXG5cclxuaW1wb3J0IHtDaGF0UHJvcHN9IGZyb20gJy4vY2hhdFByb3BzJztcclxuaW1wb3J0IEZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHtDaGF0U3RhdGV9IGZyb20gJy4vY2hhdFN0YXRlJztcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0ICB7Y2hhdFN0eWxlc30gZnJvbSAnLi9jaGF0U3R5bGVzJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcic7XHJcbmltcG9ydCB7SG9tZUhlYWRlclByb3BzfSBmcm9tIFwiLi4vaG9tZUhlYWRlci9ob21lSGVhZGVyUHJvcHNcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gXCIuLi9jcmVhdGVQb3N0L2NyZWF0ZVBvc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCdcclxuXHJcbmNsYXNzIENoYXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8Q2hhdFByb3BzLENoYXRTdGF0ZT57XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogbnVsbCxcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IG51bGwsXHJcbiAgICAgICAgICAgIG9wZW5EaWFsb2c6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWluU3RhdGU6IFwiaW5pdGlhbFwiLCAvLyBpbml0aWFsLCBzZWFyY2gsIGdhbGxlcnksIHVwbG9hZGVkXHJcbiAgICAgICAgICAgIGltYWdlVXBsb2FkZWQ6IDAsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcclxuICAgICAgICAgICAgb3BlblZpZGVvRGlhbG9nOiBmYWxzZSxcclxuICAgICAgICAgICAgb3Blbk1vcmVQb3N0RGlhbG9nOiBmYWxzZSxcclxuICAgICAgICAgICAgb3Blbk1vcmVQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwsXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVNb3JlUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb3JlUG9zdERpYWxvZzohIHRoaXMuc3RhdGUub3Blbk1vcmVQb3N0RGlhbG9nIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUb2dnbGVQb3N0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5EaWFsb2c6ICF0aGlzLnN0YXRlLm9wZW5EaWFsb2cgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUV4cGFuZENsaWNrID0gKGluZGV4ICwgZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIHRoaXMuc3RhdGUuZXhwYW5kZWQgPT09IGluZGV4ID8gbnVsbCA6aW5kZXh9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVXBsb2FkQ2xpY2sgPSAoZSkgPT4ge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZSA9IChtZXNzYWdlKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUdhbGxlcnlDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFpblN0YXRlOiBcImdhbGxlcnlcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG4gICAgICAgICBjb25zdCB7Y2xhc3NlcywgdGhlbWUgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc3RzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDpcIjFcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogRmFrZXIuaW50ZXJuZXQuYXZhdGFyKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IEZha2VyLmludGVybmV0LnVzZXJOYW1lKClcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOlwiMlwiLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBGYWtlci5pbnRlcm5ldC5hdmF0YXIoKSxcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogRmFrZXIuaW50ZXJuZXQudXNlck5hbWUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDpcIjNcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogRmFrZXIuaW50ZXJuZXQuYXZhdGFyKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IEZha2VyLmludGVybmV0LnVzZXJOYW1lKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBdO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBtYWluQ2hhdCA9IChcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwb3N0cy5tYXAoKHBvc3QsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucG9zdENvbnRlbnR9IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuYXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZVBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPVwiU2VwdGVtYmVyIDE0LCAyMDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmFkZS1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2UobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0b3A6MTAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcD17MX0gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkVkaXQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezF9IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EZWxldGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezF9IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EaXNhYmxlIENvbW1lbnRzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXsxfSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RGlzYWJsZSBTaGFyaW5nPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17RmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQYWVsbGEgZGlzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImFkZCB0byBmYXZvcml0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZXhwYW5kLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuZXhwYW5kT3Blbl06IHRoaXMuc3RhdGUuZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXhwYW5kQ2xpY2suYmluZCh0aGlzLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt0aGlzLnN0YXRlLmV4cGFuZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e3RoaXMuc3RhdGUuZXhwYW5kZWQgPT09IGluZGV4fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgID5BZGQgQ29tbWVudDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtd2VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInN0YW5kYXJkLXdlaWdodC1oZWxwZXItdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ3dlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2Zsb2F0OidyaWdodCcsbWFyZ2luVG9wOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOicxNnB4J319PlBvc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVBvc3QgLz5cclxuICAgICAgICAgICAgICAgIHttYWluQ2hhdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGxldCBwb3N0PXtpZDo1fVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICAgcG9zdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuLy8gQHRzLWlnbm9yZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjaGF0U3R5bGVzIGFzIGFueSkoQ2hhdENvbXBvbmVudClcclxuXHJcbiIsImV4cG9ydCBjb25zdCBjaGF0U3R5bGVzID0gKHRoZW1lOiBhbnkpID0+ICh7XHJcblxyXG5cclxuICAgIGNhcmQ6e1xyXG5cclxuICAgIH0sXHJcbiAgICBkaXZpZGVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgfXB4IDBgXHJcbiAgICB9LFxyXG4gICAgICAgICcuTXVpQ2FyZEhlYWRlci1zdWJoZWFkZXInOntcclxuICAgICAgICBjb2xvcjonIzAwMCdcclxuICAgICAgICB9LFxyXG4gICAgY29udGV4dDp7XHJcblxyXG4gICAgfSxcclxuICAgIGV4cGFuZDp7XHJcblxyXG4gICAgfSxcclxuICAgIG1lZGlhOntcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcclxuICAgIH0sXHJcbiAgICBleHBhbmRPcGVuOntcclxuXHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeUhlYWRpbmc6e1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpblRvcDonLTI5cHgnXHJcbiAgICB9LFxyXG4gICAgcG9zdENvbnRlbnQ6e1xyXG4gICAgICAgIG1hcmdpblRvcDonMzBweCdcclxuICAgIH0sXHJcbiAgICAnLk11aURpYWxvZy1wYXBlcldpZHRoU20nOntcclxuICAgICAgIHdpZHRoOjYwMCxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG1lbnU6e1xyXG4gICAgICAgIHRvcDoxNDAsXHJcbiAgICAgICAgbGVmdDo5MzFcclxuICAgIH1cclxufSkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQge0NyZWF0ZVBvc3RTdGF0ZX0gZnJvbSBcIi4vY3JlYXRlUG9zdFN0YXRlXCI7XHJcbmltcG9ydCB7Q3JlYXRlUG9zdFByb3BzfSBmcm9tIFwiLi9jcmVhdGVQb3N0UHJvcHNcIlxyXG5pbXBvcnQgIHtDcmVhdGVQb3N0U3R5bGV9IGZyb20gXCIuL2NyZWF0ZVBvc3RTdHlsZVwiO1xyXG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgRmFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIjtcclxuaW1wb3J0IEFkZFBob3RvQWx0ZXJuYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFBob3RvQWx0ZXJuYXRlXCI7XHJcbmltcG9ydCBWaWRlb0NhbGxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlkZW9DYWxsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5jbGFzcyBDcmVhdGVQb3N0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PENyZWF0ZVBvc3RQcm9wcyxDcmVhdGVQb3N0U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q3JlYXRlUG9zdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5EaWFsb2c6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFuY2hvckVsOm51bGwsXHJcbiAgICAgICAgICAgIG1haW5TdGF0ZTogXCJpbml0aWFsXCIsIC8vIGluaXRpYWwsIHNlYXJjaCwgZ2FsbGVyeSwgdXBsb2FkZWRcclxuICAgICAgICAgICAgaW1hZ2VVcGxvYWRlZDogMCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxyXG4gICAgICAgICAgICBvcGVuVmlkZW9EaWFsb2c6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVuTW9yZVBvc3REaWFsb2c6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVuTW9yZVBvc3Q6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuRGlhbG9nOiAhdGhpcy5zdGF0ZS5vcGVuRGlhbG9nIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUb2dnbGVWaWRlbyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlblZpZGVvRGlhbG9nOiEgdGhpcy5zdGF0ZS5vcGVuVmlkZW9EaWFsb2cgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVRvZ2dsZU1vcmVQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vcmVQb3N0RGlhbG9nOiEgdGhpcy5zdGF0ZS5vcGVuTW9yZVBvc3REaWFsb2cgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NlID0gKG1lc3NhZ2UpID0+ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVXBsb2FkQ2xpY2sgPSAoZSkgPT4ge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuVmlkZW9EaWFsb2c6ISB0aGlzLnN0YXRlLm9wZW5WaWRlb0RpYWxvZyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NsYXNzZXMsIHRoZW1lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IHBvc3REaWFsb2cgPSAoXHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17dGhpcy5zdGF0ZS5vcGVuRGlhbG9nfSAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDUwMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPkNvbW1lbnQ8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiAgc3R5bGU9e3tmbG9hdDoncmlnaHQnLG1hcmdpblRvcDonLTUycHgnfX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVNb3JlUG9zdCgpfT4gIDxNb3JlSWNvbiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9yZVBvc3REaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JSZWZlcmVuY2U9XCJhbmNob3JQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclBvc2l0aW9uPXt7IHRvcDogMzIwLCBsZWZ0OiA3ODUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlVG9nZ2xlTW9yZVBvc3R9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRoZSBjb250ZW50IG9mIHRoZSBQb3BvdmVyLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hhdCdzIG5ldyB3aXRoIHlvdSA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFpbmVkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVcGxvYWRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgY29tcG9uZW50PVwic3BhblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRQaG90b30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkUGhvdG9BbHRlcm5hdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaWRlbygpfSBjbGFzc05hbWU9e2NsYXNzZXMuYWRkVmlkZW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWRlb0NhbGxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1RvZ2dsZX0gY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQU5DRUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1RvZ2dsZX0gY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQT1NUXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhZGRWaWRlbyA9IChcclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXt0aGlzLnN0YXRlLm9wZW5WaWRlb0RpYWxvZ30gICBvbkNsb3NlPXt0aGlzLmhhbmRsZVRvZ2dsZVZpZGVvfSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAyOTB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj4gQWRkIFZpZGVvIExpbmsgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkIFZpZGVvIExpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlVmlkZW8oKX0gY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQU5DRUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZVZpZGVvfSBjb2xvcj1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2tUb2dnbGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWtlci5pbnRlcm5ldC5hdmF0YXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHlIZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJzdWJ0aXRsZTJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0cyBuZXcgd2l0aCB5b3UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdERpYWxvZ31cclxuICAgICAgICAgICAgICAgIHthZGRWaWRlb31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKENyZWF0ZVBvc3RTdHlsZSBhcyBhbnkpKENyZWF0ZVBvc3RDb21wb25lbnQpIiwiZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3RTdHlsZSA9ICh0aGVtZTogYW55KSA9PiAoe1xyXG5cclxuICAgIGRpdmlkZXI6IHtcclxuICAgICAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcudW5pdCB9cHggMGBcclxuICAgIH0sXHJcbiAgICAnLk11aUNhcmRIZWFkZXItc3ViaGVhZGVyJzp7XHJcbiAgICAgICAgY29sb3I6JyMwMDAnXHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeUhlYWRpbmc6e1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpblRvcDonLTI5cHgnXHJcbiAgICB9LFxyXG4gICAgYWRkVmlkZW86e1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOid0cmFuc3BhcmVudCAhaW1wb3J0YW50JyxcclxuICAgICAgICBib3hTaGFkb3c6J25vbmUgIWltcG9ydGFudCdcclxuICAgIH0sXHJcbiAgICBhZGRQaG90bzp7XHJcbiAgICAgICAgYmFja2dyb3VuZDondHJhbnNwYXJlbnQgIWltcG9ydGFudCcsXHJcbiAgICAgICAgYm94U2hhZG93Oidub25lICFpbXBvcnRhbnQnXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6e1xyXG4gICAgICAgIGRpc3BsYXk6J25vbmUnXHJcbiAgICB9LFxyXG5cclxufSkiLCJpbXBvcnQgUmVhY3QgLHtDb21wb25lbnQsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0hvbWVIZWFkZXJQcm9wc30gZnJvbSBcIi4vaG9tZUhlYWRlclByb3BzXCI7XHJcbmltcG9ydCB7SG9tZUhlYWRlclN0YXRlfSBmcm9tIFwiLi9ob21lSGVhZGVyU3RhdGVcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IFRleHRMb2dvIGZyb20gXCIuLi8uLi9sYXlvdXRzL3RleHRMb2dvXCI7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcclxuaW1wb3J0IHtpbkhvbWVDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvaG9tZS9pbkhvbWVDb21wb25lbnRQcm9wc1wiO1xyXG5pbXBvcnQge2hvbWVIZWFkZXJTdHlsZX0gZnJvbSBcIi4vaG9tZUhlYWRlclN0eWxlXCI7XHJcbmltcG9ydCB7d2l0aFN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9zZWFyY2hCb3gvc2VhcmNoQm94Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBIb21lSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50PEhvbWVIZWFkZXJQcm9wcyxIb21lSGVhZGVyU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6SG9tZUhlYWRlclByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVudUlkOidwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnLFxyXG4gICAgICAgICAgICBtb2JpbGVNZW51SWQgOiAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZScsXHJcbiAgICAgICAgICAgIGlzTWVudU9wZW46ZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlck9wZW46ZmFsc2UsXHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNZW51T3BlbjogIXRoaXMuc3RhdGUuaXNNZW51T3BlbiB9KVxyXG4gICAgfVxyXG4gICAgb25Ub2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgb25Ub2dnbGVEcmF3ZXIgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBvblRvZ2dsZURyYXdlcigpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJPcGVuOiAhdGhpcy5zdGF0ZS5kcmF3ZXJPcGVuIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFjY291bnRPcGVuID0gZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xvc2UgPSAobWVzc2FnZSkgPT4gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyT3BlbjogdGhpcy5zdGF0ZS5kcmF3ZXJPcGVuIH0pXHJcbiAgICB9O1xyXG4gICAgICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtjbGFzc2VzLCB0aGVtZX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcG92ZXJBY2NvdW50ID0gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmFkZS1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2UobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bGVmdDotNTAsIHRvcDo1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezF9IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5FZGl0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXsxfSAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EZWxldGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezF9IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EaXNhYmxlIENvbW1lbnRzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXsxfSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RGlzYWJsZSBTaGFyaW5nPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJY29uQnV0dG9uKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGVkZ2U9XCJzdGFydFwiKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGNsYXNzTmFtZT0nJyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICBvbkNsaWNrPXsoKT0+dGhpcy5vblRvZ2dsZVNpZGViYXIoKX0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgY29sb3I9XCJpbmhlcml0XCIqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCIqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxNZW51SWNvbiAvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvSWNvbkJ1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRMb2dvIHZpZXdCb3g9JzAgMDAgMTAwIDYwJyBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCBzdHlsZT17eyBjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsIHdpZHRoOiAnMTEzcHgnLCBwYWRkaW5nVG9wOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZVRpdGxlfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0gIHN0eWxlPXt7bWFyZ2luUmlnaHQ6NTZ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCIgY29sb3I9XCJpbmhlcml0XCIgc3R5bGU9e3ttYXJnaW5SaWdodDozNn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXt0aGlzLnN0YXRlLm1lbnVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWNjb3VudE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvcG92ZXJBY2NvdW50fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoaG9tZUhlYWRlclN0eWxlIGFzIGFueSkoSG9tZUhlYWRlcik7XHJcbiIsImltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIyMFxyXG5leHBvcnQgY29uc3QgaG9tZUhlYWRlclN0eWxlID0gKHRoZW1lOiBhbnkpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBhcHBGcmFtZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIC8vIG92ZXJmbG93WTogJ2F1dG8nXHJcbiAgICB9LFxyXG4gICAgbmF2SWNvbkhpZGU6IHtcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGdyb3c6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjonZ3JlZW4nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnM3B4JyxcclxuICAgICAgICB3aWR0aDogJzcwNHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxyXG5cclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoSWNvbjoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgaW5wdXRSb290OiB7XHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgIH0sXHJcbiAgICBpbnB1dElucHV0OiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjBjaCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidyZWQgIWltcG9ydGFudCdcclxuICAgIH0sXHJcblxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgLy8gIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6Jzk3cHgnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OjAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgICAgIG1heFdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICBtYXJnaW5Ub3A6ICc3MHB4JyxcclxuICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRpdmlkZXI6IHtcclxuICAgICAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggMGBcclxuICAgIH0sXHJcbiAgICBkcmF3ZXJQYXBlckxhcmdlOiB7XHJcbiAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvcDogNzAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6IDBcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgcGFkZGluZ1RvcDogMTUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA1NnB4KScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA0NCxcclxuICAgICAgICBtYXJnaW5MZWZ0OmRyYXdlcldpZHRoLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnY2FsYygxMDAlIC0gNjRweCknLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDQ0LFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAxNSxcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDpkcmF3ZXJXaWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDY0cHgpJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA0NCxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMTUsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ZHJhd2VyV2lkdGhcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICdNdWlBcHBCYXItY29sb3JQcmltYXJ5JyA6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYjUwZDFhICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICdjb250ZW50LWxlZnQnOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgIH0sXHJcbiAgICAnY29udGVudC1yaWdodCc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgIH0sXHJcbiAgICBjb250ZW50U2hpZnQ6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgICdjb250ZW50U2hpZnQtbGVmdCc6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGhcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2NvbnRlbnRTaGlmdC1yaWdodCc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBkcmF3ZXJXaWR0aFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTdweCcsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2ZpbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcclxuICAgICAgICBmbGV4U2hyaW5rOiAwXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyIDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6JyM1YjU5NTgnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICB9LFxyXG5cclxuICAgIGhvbWVUaXRsZTp7XHJcbiAgICAgICAgJ2NvbG9yJzogJyNmZmYnLFxyXG4gICAgICAgICdtYXJnaW4tdG9wJzogJzVweCcsXHJcbiAgICAgICAgJ2xlZnQnOiAnLTklJyxcclxuICAgICAgICAnYm9yZGVyLWxlZnQtY29sb3InOiAnI2ZmZicsXHJcbiAgICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjZmZmJyxcclxuICAgICAgICAncGFkZGluZy1sZWZ0JzogJzI0cHgnLFxyXG4gICAgfSxcclxuICAgICdNdWlQYXBlci1yb290Jzp7XHJcbiAgICAgICAgJ2JvcmRlclJpZ2h0JzonMHB4ICFpbXBvcnRhbnQnXHJcbiAgICB9LFxyXG4gICAgJ011aURpdmlkZXItcm9vdCc6e1xyXG4gICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOicjZmZmICFpbXBvcnRhbnQnXHJcbiAgICB9XHJcblxyXG5cclxufSkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IHtTZWFyY2hCb3hQcm9wc30gZnJvbSAnLi9zZWFyY2hCb3hQcm9wcyc7XHJcbmltcG9ydCB7U2VhcmNoQm94U3RhdGV9IGZyb20gXCIuL3NlYXJjaEJveFN0YXRlXCI7XHJcbmltcG9ydCB7U2VhcmNoQm94U3R5bGV9IGZyb20gXCIuL3NlYXJjaEJveFN0eWxlXCJcclxuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8U2VhcmNoQm94UHJvcHMsIFNlYXJjaEJveFN0YXRlPntcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2xhc3NlcywgdGhlbWV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbmQgeW91ciBmYXZvcml0ZSBwb3N0cyBhbmQgcGVvcGxlIC4uLlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIHsvKlNlYXJjaCBNb2JpbGUqL31cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoTW9iaWxlfT5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoU2VhcmNoQm94U3R5bGUgYXMgYW55KShTZWFyY2hCb3hDb21wb25lbnQpOyIsImltcG9ydCB7ZmFkZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEJveFN0eWxlID0gKHRoZW1lOiBhbnkpID0+ICh7XHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnM3B4JyxcclxuICAgICAgICB3aWR0aDogJzcwNHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTonbm9uZSAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6J25vbmUgIWltcG9ydGFudCdcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlYXJjaE1vYmlsZTp7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogJzNweCcsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBkaXNwbGF5Oidub25lICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTonYmxvY2sgIWltcG9ydGFudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OidibG9jayAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoSWNvbjoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGg6ICc0NydcclxuICAgIH0sXHJcbiAgICBpbnB1dFJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0SW5wdXQ6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbn0pIiwiaW1wb3J0IFJlYWN0ICx7Q29tcG9uZW50LHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuXHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBGYWtlciBmcm9tICdmYWtlcidcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcclxuaW1wb3J0IHtpbkhvbWVDb21wb25lbnRQcm9wc30gZnJvbSAnLi9pbkhvbWVDb21wb25lbnRQcm9wcydcclxuaW1wb3J0IHtpbkhvbWVDb21wb25lbnRTdGF0ZX0gZnJvbSAnLi9pbkhvbWVDb21wb25lbnRTdGF0ZSdcclxuaW1wb3J0IEhvbWVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZUhlYWRlci9ob21lSGVhZGVyXCI7XHJcbmltcG9ydCBDaGF0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NoYXQvY2hhdENvbXBvbmVudFwiO1xyXG5pbXBvcnQge2hvbWVTdHlsZX0gZnJvbSAnLi9ob21lU3R5bGUnXHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgVGV4dExvZ28gZnJvbSBcIi4uLy4uL2xheW91dHMvdGV4dExvZ29cIjtcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0JztcclxuXHJcbmNsYXNzIGhvbWVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8aW5Ib21lQ29tcG9uZW50UHJvcHMsIGluSG9tZUNvbXBvbmVudFN0YXRlPiAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6aW5Ib21lQ29tcG9uZW50UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZW51SWQ6ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnLFxyXG4gICAgICAgICAgICBtb2JpbGVNZW51SWQ6ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUtbW9iaWxlJyxcclxuICAgICAgICAgICAgaXNNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlck9wZW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlck9wZW46ICF0aGlzLnN0YXRlLmRyYXdlck9wZW4gfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyT3BlbjogdGhpcy5zdGF0ZS5kcmF3ZXJPcGVuIH0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiAhdGhpcy5zdGF0ZS5pc01lbnVPcGVuIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NsYXNzZXMsIHRoZW1lLHBvc3RzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCByZW5kZXJNZW51ID0gKFxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUubWVudUlkfVxyXG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gID5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSAoXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS1waG90by9yaXZlci1mb2dneS1tb3VudGFpbnMtbGFuZHNjYXBlXzEyMDQtNTExLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZha2VyLmludGVybmV0LmF2YXRhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkTWVkaWE+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeUhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiaDZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7RmFrZXIuaW50ZXJuZXQudXNlck5hbWUoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiY2FwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93ZXJzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57RmFrZXIucmFuZG9tLm51bWJlcigpfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRm9sbG93aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImNhcHRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249eydjZW50ZXInfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93aW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57RmFrZXIucmFuZG9tLm51bWJlcigpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGxpZ2h0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiICBjbGFzc05hbWU9e2NsYXNzZXMubGlua1Byb2ZpbGV9PnZpZXcgUHJvZmlsZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGVvcGxlTGlzdCA9IChcclxuXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wZW9wbGVIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJoNlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBlb3BsZXNcclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBsaWdodCBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RQZW9wbGV9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcnMubWFwKGZ1bmN0aW9uKGl0ZW0saSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9e0Zha2VyLmludGVybmV0LmF2YXRhcigpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGVvcGxlVXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSBjb21wb25lbnQ9XCJsaVwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkcmF3ZXIgPShcclxuXHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlckxhcmdlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJzaXN0ZW50XCJcclxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZURyYXdlckNsb3NlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyp7dGhlbWUuZGlyZWN0aW9uID09PSAnbHRyJyA/IDxDaGV2cm9uTGVmdEljb24gLz4gOiA8Q2hldnJvblJpZ2h0SWNvbiAvPn0qL31cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7WydIb21lJywgJ1Byb2ZpbGUnLCAnUGVvcGxlJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW4gPSAoXHJcbiAgICAgICAgICAgIDxtYWluICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPENoYXRDb21wb25lbnQgICAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxIb21lSGVhZGVyIG9uVG9nZ2xlRHJhd2VyPXt0aGlzLmhhbmRsZURyYXdlck9wZW59Lz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciAgIHN0eWxlPXt7cGFkZGluZ1RvcDonNjBweCAhaW1wb3J0YW50J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBsZz17M30gY2xhc3NOYW1lPSd1c2VySW5mbycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZW9wbGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttYWlufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoaG9tZVN0eWxlIGFzIGFueSkoaG9tZUNvbXBvbmVudCkiLCJpbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMjBcclxuZXhwb3J0IGNvbnN0IGhvbWVTdHlsZSA9ICh0aGVtZTogYW55KSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmYWZhZmEnLFxyXG4gICAgfSxcclxuICAgIG1haW46e1xyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICByb290UGVvcGxlOntcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDonLTE3cHgnLFxyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIGFwcEZyYW1lOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgLy8gb3ZlcmZsb3dZOiAnYXV0bydcclxuICAgIH0sXHJcbiAgICBuYXZJY29uSGlkZToge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZ3Jvdzoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOidncmVlbicsXHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICczcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnNzA0cHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcblxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hJY29uOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dFJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0SW5wdXQ6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6NzRcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoncmVkICFpbXBvcnRhbnQnXHJcbiAgICB9LFxyXG5cclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luTGVmdDonOTdweCcsXHJcbiAgICB9LFxyXG4gICAgZHJhd2VyUGFwZXI6IHtcclxuICAgICAgICBtYXhXaWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNzBweCcsXHJcbiAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkcmF3ZXJQYXBlckxhcmdlOiB7XHJcbiAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvcDogNzAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6IDBcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBwYWRkaW5nVG9wOiAxNSxcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA1NnB4KScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA5MCxcclxuICAgICAgICBtYXJnaW5MZWZ0OjAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA2NHB4KScsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTcsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDE1LFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OjAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDY0cHgpJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA0NCxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMTUsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6MCxcclxuICAgICAgICAgICAgcGFkZGluZzowLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDY0cHgpJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA0NCxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMTUsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6MCxcclxuICAgICAgICAgICAgcGFkZGluZzowLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ011aUFwcEJhci1jb2xvclByaW1hcnknIDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiNTBkMWEgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgJ2NvbnRlbnQtbGVmdCc6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICdjb250ZW50LXJpZ2h0Jzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRTaGlmdDoge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgJ2NvbnRlbnRTaGlmdC1sZWZ0Jzoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnY29udGVudFNoaWZ0LXJpZ2h0Jzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGRyYXdlcldpZHRoXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzJlbScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnZmlsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcycsXHJcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgICAgIGZsZXhTaHJpbms6IDBcclxuICAgIH0sXHJcbiAgICBoZWFkZXIgOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDonIzViNTk1OCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgICB0b3A6ICcwJyxcclxuICAgIH0sXHJcblxyXG4gICAgaG9tZVRpdGxlOntcclxuICAgICAgICAnY29sb3InOiAnI2ZmZicsXHJcbiAgICAgICAgJ21hcmdpbi10b3AnOiAnNXB4JyxcclxuICAgICAgICAnbGVmdCc6ICctOSUnLFxyXG4gICAgICAgICdib3JkZXItbGVmdC1jb2xvcic6ICcjZmZmJyxcclxuICAgICAgICAnYm9yZGVyLWxlZnQnOiAnMXB4IHNvbGlkICNmZmYnLFxyXG4gICAgICAgICdwYWRkaW5nLWxlZnQnOiAnMjRweCcsXHJcbiAgICB9LFxyXG4gICAgJ011aVBhcGVyLXJvb3QnOntcclxuICAgICAgICAnYm9yZGVyUmlnaHQnOicwcHggIWltcG9ydGFudCdcclxuICAgIH0sXHJcbiAgICAnTXVpRGl2aWRlci1yb290Jzp7XHJcbiAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6JyNmZmYgIWltcG9ydGFudCdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOlwiMzBweFwiLFxyXG5cclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDhweCA0MHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4zKVwiLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDE2cHggNzBweCAtMTIuMTI1cHggcmdiYSgwLDAsMCwwLjMpXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbnRleHQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOlwiMjBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDNcclxuICAgIH0sXHJcbiAgICBkaXZpZGVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4IDBgXHJcbiAgICB9LFxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcbiAgICB9LFxyXG4gICAgc3ViaGVhZGluZzoge1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuOFxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCB3aGl0ZVwiLFxyXG4gICAgICAgIFwiJjpub3QoOmZpcnN0LW9mLXR5cGUpXCI6IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXRoZW1lLnNwYWNpbmcudW5pdFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnTXVpVHlwb2dyYXBoeS1oNic6e1xyXG4gICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiXHJcbiAgICB9LFxyXG4gICAgJ011aVR5cG9ncmFwaHktY2FwdGlvbic6e1xyXG4gICAgICAgbWFyZ2luTGVmdDpcIjUwcHhcIlxyXG4gICAgfSxcclxuICAgICdNdWlUeXBvZ3JhcGh5LWd1dHRlckJvdHRvbSc6e1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTonMS4zNWVtJyxcclxuICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxyXG4gICAgfSxcclxuICAgIEZvbGxvd2Vyczp7XHJcblxyXG4gICAgICAgIHBhZGRpbmdSaWdodDpcIjEwcHhcIixcclxuICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lIGZsb3ctcm9vdCBsaXN0LWl0ZW0nLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1hcmdpblRvcDonMTNweCdcclxuICAgIH0sXHJcbiAgICBGb2xsb3dpbmc6e1xyXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUgZmxvdy1yb290IGxpc3QtaXRlbScsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyTGVmdDpcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOicxM3B4J1xyXG4gICAgfSxcclxuICAgIHVzZXJJbWFnZTp7XHJcbiAgICAgICAgd2lkdGg6XCI4MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OlwiODBweFwiXHJcbiAgICB9LFxyXG4gICAgbGlua1Byb2ZpbGU6e1xyXG4gICAgICAgIGNvbG9yOicjMDAwJyxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjonbm9uZScsXHJcbiAgICAgICB9LFxyXG4gICAgLy8gZGl2aWRlcjp7XHJcbiAgICAvLyAgICAgbWFyZ2luVG9wOicxOXB4JyxcclxuICAgIC8vICAgICBtYXJnaW5Cb3R0b206JzIxcHgnXHJcbiAgICAvLyB9LFxyXG4gICAgcGVvcGxlSGVhZGVyOntcclxuICAgICAgICBtYXJnaW5Ub3A6JzE2cHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzEwcHgnXHJcbiAgICB9LFxyXG4gICAgcGVvcGxlVXNlck5hbWU6e1xyXG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeUhlYWRpbmc6e1xyXG4gICAgICAgIG1hcmdpblRvcDonLTMwcHgnXHJcbiAgICB9XHJcblxyXG59KSIsImltcG9ydCBIb21lQ29tcG9uZW50IGZyb20gJy4vaG9tZUNvbXBvbmVudCdcclxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbXBvbmVudFxyXG4iLCJcclxuaW1wb3J0IHtzdmdBcGl9IGZyb20gJy4uLy4uL2FwaS9zdmdBcGknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdmdBcGkuY3JlYXRlU3ZnSWNvbihcclxuXHJcbiAgICAgICAgPGcgZGF0YS12LTQyM2JmOWFlPVwiXCIgaWQ9XCI0YzUzNGVkOC00ZTI3LTQ0ODMtYWMyMi1iNGM3Yzc5NjAxNTFcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC42MzEzOTQwMTkzNTg2OTcxLDAsMCwwLjYzMTM5NDAxOTM1ODY5NzEsLTYuMDIzOTAwNzY1MTM4NDI4LC0xLjU3ODQ4NTA0ODM5Njc0MzIpXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJ3aGl0ZVwiPjxwYXRoIGQ9XCJNNTQuMiAyLjVjLTUuNSAwLTEwLjggMS4yLTE1LjUgMy41LTEyLjQgNS44LTIxIDE4LjMtMjEgMzIuOHY2TDEwLjMgNTljLTEuOSAzLjYtLjEgNi41IDMuOSA2LjVoMy41Vjc4LjljMCA0LjIgMy40IDcuNiA3LjYgNy42bDEwLjUtMS42djEwLjZjMCAxLjMgMS4yIDIuMiAyLjYgMmwzNy43LTYuN2MxLjQtLjMgMi42LTEuNiAyLjYtMy4xVjY1LjVjNy4yLTYuNiAxMS44LTE2LjEgMTEuOC0yNi43LS4xLTIwLTE2LjMtMzYuMy0zNi4zLTM2LjN6bTAgNjIuN2MtMTQuNyAwLTI2LjYtMTItMjYuNi0yNi42IDAtMTQuNyAxMi0yNi42IDI2LjYtMjYuNiAxNC43IDAgMjYuNiAxMiAyNi42IDI2LjYgMCAxNC43LTExLjkgMjYuNi0yNi42IDI2LjZ6bTEwLjUtMzEuN2wtLjEtMy41YzAtNS42LTQuNi0xMC4yLTEwLjItMTAuMlM0NC4yIDI0LjQgNDQuMiAzMHYzLjVINDRjLTEuNSAwLTIuNyAxLjItMi43IDIuN1Y1MWMwIDEuNSAxLjIgMi43IDIuNyAyLjdoMjAuN2MxLjUgMCAyLjctMS4yIDIuNy0yLjdWMzYuMmMwLTEuNS0xLjItMi43LTIuNy0yLjd6bS04LjggMTAuOGMtLjIuMS0uMy4zLS4zLjV2My4zYzAgLjUtLjIuOS0uNiAxLjEtMSAuNS0xLjktLjItMS45LTEuMXYtMy4zYzAtLjIgMC0uNC0uMi0uNS0xLS43LTEuMy0yLS44LTMuMXMxLjYtMS43IDIuOC0xLjVjMS4yLjIgMi4xIDEuMiAyLjEgMi41IDAgLjktLjQgMS42LTEuMSAyLjF6bTQuMi0xMC44SDQ4LjdWMzBjMC0zLjIgMi42LTUuNyA1LjctNS43czUuNyAyLjYgNS43IDUuN3YzLjV6XCI+PC9wYXRoPjwvZz5cclxuICAgICwgJ1RleHRMb2dvJykiLCJpbXBvcnQgSG9tZUNvbXBvbmVudCBmcm9tICcuLy4uLy4uL2NvbnRhaW5lcnMvaG9tZSdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2luSG9tZUNvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9ob21lL2luSG9tZUNvbXBvbmVudFByb3BzXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBwb3N0cz86YW55O1xyXG4gICAgdXNlcnM/OmFueTtcclxufVxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5SZWFkIFNva2NpYWw8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEhvbWVDb21wb25lbnQgcG9zdHM9e3RoaXMucHJvcHMucG9zdHN9IHVzZXJzPXt0aGlzLnByb3BzLnVzZXJzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vaG9tZSdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIHtjcmVhdGVmZXRjaFBvc3RSZXF1ZXN0fSBmcm9tIFwiLi4vYXBpL3Bvc3RBcGlcIjtcbmltcG9ydCAge2NyZWF0ZVVzZXJTZWFyY2hSZXF1ZXN0fSBmcm9tIFwiLi4vYXBpL3VzZXJBcGlcIjtcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcG9zdHM/OmFueTtcbiAgICB1c2Vycz86YW55O1xufVxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz57XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6YW55KSB7XG4gICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgY3JlYXRlZmV0Y2hQb3N0UmVxdWVzdCgpO1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGNyZWF0ZVVzZXJTZWFyY2hSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcG9zdHMsXG4gICAgICAgICAgICAgICAgdXNlcnNcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBwb3N0cyx1c2VycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIb21lUGFnZSBwb3N0cz17cG9zdHN9ICB1c2Vycz17dXNlcnN9ICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFBob3RvQWx0ZXJuYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaWRlb0NhbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29tcG9zZS9wdXJlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=