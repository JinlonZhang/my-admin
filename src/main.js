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
