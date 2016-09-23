/*! This file is created by zjl606 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// @description 主入口模块
	import React from 'react'
	import { render } from 'react-dom'

	// 引入React-Route模块
	import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

	//引入Antd的导航组件
	import { Menu, Icon, Switch } from 'antd'
	const SubMenu = Menu.SubMenu

	// 引入Ant-Design样式 & Animate.css
	import 'animate.css/animate.min.css'
	import 'font-awesome/css/font-awesome.min.css'

	// 引入主体样式文件
	import './main.css'

	// 引入单个页面（包括嵌套的子页面）
	import myTable from './components/table.js'
	import myForm from './components/form.js'


/***/ }
/******/ ]);