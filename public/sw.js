/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


self.addEventListener('install', function (e) {
  e.waitUntil([openCache()]);
});

function openCache() {
  caches.open('instant-inspiration').then(function (cache) {
    return cache.addAll(['/', '/main.js', '/assets/css/main.css', '/assets/css/fonts/Roboto/RobotoSlab-Thin.woff', '/manifest.json', '/assets/icon/android-icon-144x144.png', '/assets/icon/android-icon-192x192.png', '/assets/icon/android-icon-36x36.png', '/assets/icon/android-icon-48x48.png', '/assets/icon/android-icon-72x72.png', '/assets/icon/android-icon-96x96.png', '/assets/icon/apple-icon-114x114.png', '/assets/icon/apple-icon-120x120.png', '/assets/icon/apple-icon-144x144.png', '/assets/icon/apple-icon-152x152.png', '/assets/icon/apple-icon-180x180.png', '/assets/icon/apple-icon-57x57.png', '/assets/icon/apple-icon-60x60.png', '/assets/icon/apple-icon-72x72.png', '/assets/icon/apple-icon-76x76.png', '/assets/icon/apple-icon-precomposed.png', '/assets/icon/apple-icon.png', '/assets/icon/browserconfig.xml', '/assets/icon/favicon-16x16.png', '/assets/icon/favicon-32x32.png', '/assets/icon/favicon-96x96.png', '/assets/icon/favicon.ico', '/assets/icon/ms-icon-144x144.png', '/assets/icon/ms-icon-150x150.png', '/assets/icon/ms-icon-310x310.png', '/assets/icon/ms-icon-70x70.png']);
  });
}

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});

/***/ })
/******/ ]);