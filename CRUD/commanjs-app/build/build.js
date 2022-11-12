/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const test = require(\"./modules/test\"); //  IMPORT\r\n\r\n// // const first = test(5, 10);\r\n\r\n// // console.log(first);\r\n// console.log(test(5, 2));\r\n\r\n\r\n// const obj = require(\"./modules/test\"); \r\n\r\n// const {calc, b} = obj;\r\n\r\n// console.log(calc(10, 50));\r\n// console.log(b);\r\n\r\n\r\n// const person = require(\"./modules/person\"); \r\n\r\n// person.say()\r\n// console.log(person);\r\n\r\n// const {username, password} = person;\r\n\r\n// console.log(username);\r\n// console.log(password);\r\n\r\n\r\n\r\n\r\n\r\nconst {persons, setRing} = __webpack_require__(/*! ./modules/game */ \"./src/js/modules/game.js\");\r\n\r\nsetRing(persons, \"Frodo\");\r\n\r\nfor (const person of persons) {\r\n        console.log(person);\r\n}\r\n    \r\n// const log = require(\"./modules/game\")\r\n\r\n// log();\r\n// const ex = 50;\r\n// module.exports = {ex}\r\n\r\n\r\nconst ui = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\n\r\ndocument.body.prepend(ui());\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/***/ ((module) => {

eval("// function rings (winner = \"\") {\r\n//     if(winner === \"frodo\") {\r\n//         console.log(\"ring go to Frodo\");\r\n//     } else if(winner === \"gandalf\") {\r\n//         console.log(\"ring go to Gandalf\");\r\n//     }\r\n// }\r\n\r\n// module.exports = rings;\r\n\r\nconst persons = [\r\n    {name: \"Frodo\", hasRing: false},\r\n    {name: \"Bilbo\", hasRing: false}\r\n]\r\n\r\nfunction setRing (persons, owner) {\r\n    return persons.map(person => {\r\n        if(person.name === owner) {\r\n            person.hasRing = true;\r\n        } else {\r\n            person.hasRing = false;\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = {persons, setRing}\r\n\r\n\r\n\r\n// module.exports = function log () {\r\n//     console.log(\"Hello\");\r\n// }\r\n\r\n\r\n// const {ex} = require(\"../index\");\r\n\n\n//# sourceURL=webpack:///./src/js/modules/game.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = function create () {\r\n    const root = document.createElement(\"div\")\r\n    const form = document.createElement(\"form\")\r\n    const input = document.createElement(\"input\")\r\n    const button = document.createElement(\"button\")\r\n\r\n    root.append(form);\r\n    form.append(input, button)\r\n    \r\n    return root;\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;