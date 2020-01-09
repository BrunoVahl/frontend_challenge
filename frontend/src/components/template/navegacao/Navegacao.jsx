import './Navegacao.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/" className="inicio">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/cadaster" className="cadastro">
                <i className="fa fa-archive"></i> Cadastro
            </Link>
            <Link to="/users" className="usuarios">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>