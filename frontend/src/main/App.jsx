import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/header/Header'
import Navegacao from '../components/template/navegacao/Navegacao'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />
            <Navegacao />
            <Routes />
        </div>
    </BrowserRouter>
