/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./ \\.(svg|png|ico|xml|json)$":
/*!***********************************************************************************************************!*\
  !*** ./app sync !./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext] \.(svg|png|ico|xml|json)$ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./icon/android-chrome-192x192.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-192x192.png\",\n\t\"./icon/android-chrome-384x384.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-384x384.png\",\n\t\"./icon/apple-touch-icon.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/apple-touch-icon.png\",\n\t\"./icon/browserconfig.xml\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/browserconfig.xml\",\n\t\"./icon/favicon-16x16.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-16x16.png\",\n\t\"./icon/favicon-32x32.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-32x32.png\",\n\t\"./icon/favicon.ico\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon.ico\",\n\t\"./icon/mstile-150x150.png\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/mstile-150x150.png\",\n\t\"./icon/safari-pinned-tab.svg\": \"./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/safari-pinned-tab.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./app sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./ \\\\.(svg|png|ico|xml|json)$\";\n\n//# sourceURL=webpack:///./node_modules/file-loader/dist/cjs.js?./app_sync_");

/***/ }),

/***/ "./app/app.vue":
/*!*********************!*\
  !*** ./app/app.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=f4728ed6&lang=pug& */ \"./app/app.vue?vue&type=template&id=f4728ed6&lang=pug&\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ \"./app/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=sass& */ \"./app/app.vue?vue&type=style&index=0&lang=sass&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/app.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/app.vue?");

/***/ }),

/***/ "./app/app.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./app/app.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/app.vue?");

/***/ }),

/***/ "./app/app.vue?vue&type=style&index=0&lang=sass&":
/*!*******************************************************!*\
  !*** ./app/app.vue?vue&type=style&index=0&lang=sass& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_0_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--0-oneOf-0-2!../node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-3!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=sass& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=sass&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_0_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_0_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_0_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_0_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./app/app.vue?");

/***/ }),

/***/ "./app/app.vue?vue&type=template&id=f4728ed6&lang=pug&":
/*!*************************************************************!*\
  !*** ./app/app.vue?vue&type=template&id=f4728ed6&lang=pug& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/pug-plain-loader!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=f4728ed6&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=template&id=f4728ed6&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/app.vue?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue */ \"./app/app.vue\");\n\n\n\nvar faviconsContext = __webpack_require__(\"./app sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./ \\\\.(svg|png|ico|xml|json)$\");\n\nfaviconsContext.keys().forEach(faviconsContext);\n\n__webpack_require__(\"./audio sync .wav$\");\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '.app',\n  render: function render(h) {\n    return h(_app_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./audio sync .wav$":
/*!***************************************!*\
  !*** ./audio sync nonrecursive .wav$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./do.wav\": \"./audio/do.wav\",\n\t\"./fa.wav\": \"./audio/fa.wav\",\n\t\"./mi.wav\": \"./audio/mi.wav\",\n\t\"./re.wav\": \"./audio/re.wav\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./audio sync .wav$\";\n\n//# sourceURL=webpack:///./audio_sync_nonrecursive_.wav$?");

/***/ }),

/***/ "./audio/do.wav":
/*!**********************!*\
  !*** ./audio/do.wav ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"do.wav\";\n\n//# sourceURL=webpack:///./audio/do.wav?");

/***/ }),

/***/ "./audio/fa.wav":
/*!**********************!*\
  !*** ./audio/fa.wav ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fa.wav\";\n\n//# sourceURL=webpack:///./audio/fa.wav?");

/***/ }),

/***/ "./audio/mi.wav":
/*!**********************!*\
  !*** ./audio/mi.wav ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mi.wav\";\n\n//# sourceURL=webpack:///./audio/mi.wav?");

/***/ }),

/***/ "./audio/re.wav":
/*!**********************!*\
  !*** ./audio/re.wav ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"re.wav\";\n\n//# sourceURL=webpack:///./audio/re.wav?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar notes = [new Audio('./do.wav'), new Audio('./re.wav'), new Audio('./mi.wav'), new Audio('./fa.wav')];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      buttons: ['r', 'g', 'b', 'o'],\n      round: 1,\n      finished: true,\n      sequence: [],\n      clientSequence: [],\n      buttonsElements: [],\n      promises: [],\n      delay: 1,\n      isWrong: false,\n      isPending: false,\n      stopped: false,\n      isChecking: false,\n      notes: notes\n    };\n  },\n  methods: {\n    restart: function restart() {\n      this.stopped = true;\n      this.isChecking = false;\n      this.round = 1;\n    },\n    start: function start() {\n      if (this.isPending || this.isChecking) return;\n      this.promises = [];\n      this.clientSequence = [];\n      this.stopped = false;\n      this.isWrong = false;\n      this.generateSequence();\n      this.execSequence();\n    },\n    generateSequence: function generateSequence() {\n      this.sequence = [];\n\n      for (var i = 0; i < this.round; i++) {\n        this.sequence.push(this.rand());\n      }\n    },\n    rand: function rand() {\n      return Math.round(Math.random() * 3);\n    },\n    execSound: function execSound(i) {\n      this.notes.forEach(function (el) {\n        el.pause();\n        el.currentTime = 0;\n      });\n      this.notes[i].play();\n    },\n    onClick: function onClick(i) {\n      var _this = this;\n\n      this.execSound(i);\n      if (this.isPending || this.isWrong || !this.isChecking) return;\n      this.clientSequence.push(i);\n      this.isWrong = this.clientSequence.some(function (el, i) {\n        return el !== _this.sequence[i];\n      });\n\n      if (this.isWrong) {\n        this.round = 1;\n        this.isChecking = false;\n      } else if (this.clientSequence.length == this.sequence.length) {\n        this.isChecking = false;\n        this.round++;\n      }\n    },\n    execSequence: function execSequence() {\n      var _this2 = this;\n\n      this.isPending = true;\n      this.sequence.forEach(function (el, i) {\n        var promise = function promise() {\n          return new Promise(function (res, rej) {\n            if (_this2.stopped) {\n              rej('err');\n              return;\n            }\n\n            _this2.buttonsElements[el].classList.add('button_active');\n\n            _this2.execSound(el);\n\n            setTimeout(function () {\n              _this2.buttonsElements[el].classList.remove('button_active');\n\n              setTimeout(function () {\n                res();\n              }, _this2.delay * 1000 / 2);\n            }, _this2.delay * 1000 / 2);\n          });\n        };\n\n        _this2.promises.push(promise);\n      });\n      this.promises.reduce(function (acc, current) {\n        return acc.then(current);\n      }, Promise.resolve()).then(function () {\n        _this2.isPending = false;\n        _this2.isChecking = true;\n      })[\"catch\"](function (e) {\n        _this2.isPending = false;\n        _this2.isChecking = false;\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.buttonsElements = this.$el.children[0].children;\n  }\n});\n\n//# sourceURL=webpack:///./app/app.vue?./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-192x192.png":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-192x192.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/android-chrome-192x192.png\";\n\n//# sourceURL=webpack:///./app/icon/android-chrome-192x192.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-384x384.png":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/android-chrome-384x384.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/android-chrome-384x384.png\";\n\n//# sourceURL=webpack:///./app/icon/android-chrome-384x384.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/apple-touch-icon.png":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/apple-touch-icon.png ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/apple-touch-icon.png\";\n\n//# sourceURL=webpack:///./app/icon/apple-touch-icon.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/browserconfig.xml":
/*!**************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/browserconfig.xml ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/browserconfig.xml\";\n\n//# sourceURL=webpack:///./app/icon/browserconfig.xml?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-16x16.png":
/*!**************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-16x16.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/favicon-16x16.png\";\n\n//# sourceURL=webpack:///./app/icon/favicon-16x16.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-32x32.png":
/*!**************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon-32x32.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/favicon-32x32.png\";\n\n//# sourceURL=webpack:///./app/icon/favicon-32x32.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon.ico":
/*!********************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/favicon.ico ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/favicon.ico\";\n\n//# sourceURL=webpack:///./app/icon/favicon.ico?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/mstile-150x150.png":
/*!***************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/mstile-150x150.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/mstile-150x150.png\";\n\n//# sourceURL=webpack:///./app/icon/mstile-150x150.png?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/safari-pinned-tab.svg":
/*!******************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=icon/[name].[ext]!./app/icon/safari-pinned-tab.svg ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon/safari-pinned-tab.svg\";\n\n//# sourceURL=webpack:///./app/icon/safari-pinned-tab.svg?./node_modules/file-loader/dist/cjs.js?name=icon/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=sass&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--0-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=style&index=0&lang=sass& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/app.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--0-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=template&id=f4728ed6&lang=pug&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=template&id=f4728ed6&lang=pug& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"main\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"buttons\" },\n      _vm._l(_vm.buttons, function(button, index) {\n        return _c(\"div\", {\n          key: index,\n          staticClass: \"button\",\n          class: button,\n          on: {\n            click: function($event) {\n              return _vm.onClick(index)\n            }\n          }\n        })\n      }),\n      0\n    ),\n    _c(\"div\", { staticClass: \"controls\" }, [\n      _c(\"div\", { staticClass: \"control\", on: { click: _vm.start } }, [\n        _vm._v(\"start\")\n      ]),\n      _c(\"div\", { staticClass: \"control\", on: { click: _vm.restart } }, [\n        _vm._v(\"restart\")\n      ]),\n      _c(\"div\", { staticClass: \"control\" }, [\n        _vm._v(\"round : \" + _vm._s(_vm.round))\n      ]),\n      _vm.isWrong\n        ? _c(\"div\", { staticClass: \"control control_error\" }, [\n            _vm._v(\"game over\")\n          ])\n        : _vm._e()\n    ]),\n    _c(\"div\", { staticClass: \"difficulty\" }, [\n      _c(\"label\", [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.delay,\n              expression: \"delay\"\n            }\n          ],\n          attrs: { type: \"radio\" },\n          domProps: { value: +1.5, checked: _vm._q(_vm.delay, +1.5) },\n          on: {\n            change: function($event) {\n              _vm.delay = +1.5\n            }\n          }\n        }),\n        _vm._v(\"легко\")\n      ]),\n      _c(\"label\", [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.delay,\n              expression: \"delay\"\n            }\n          ],\n          attrs: { type: \"radio\" },\n          domProps: { value: +1, checked: _vm._q(_vm.delay, +1) },\n          on: {\n            change: function($event) {\n              _vm.delay = +1\n            }\n          }\n        }),\n        _vm._v(\"средне\")\n      ]),\n      _c(\"label\", [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.delay,\n              expression: \"delay\"\n            }\n          ],\n          attrs: { type: \"radio\" },\n          domProps: { value: +0.4, checked: _vm._q(_vm.delay, +0.4) },\n          on: {\n            change: function($event) {\n              _vm.delay = +0.4\n            }\n          }\n        }),\n        _vm._v(\"сложно\")\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/app.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./app/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"./node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./app/index.js?");

/***/ })

/******/ });