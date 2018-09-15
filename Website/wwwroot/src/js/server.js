﻿import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['ReactDOMServer'] = ReactDOMServer;


//React Components
import Global_Header from './components/global/header'
import Module_FeaturedContent from './components/modules/Module_FeaturedContent'
import Module_Jumbotron from './components/modules/Module_Jumbotron'

global['Components'] = {
    Global_Header,
    Module_FeaturedContent,
    Module_Jumbotron
}