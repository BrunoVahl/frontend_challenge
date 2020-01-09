import './Cadaster.css'
import React, { Component } from 'react'
import Main from '../template/main/Main'
import axios from 'axios'

const constants = require('../../constants/Constants')
const baseUrl = constants.baseUrl
const initialState = constants.initialState

export default class Cadaster extends Component {

    state = { 
        ...initialState 
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.push(user)
        return list
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    renderForm() {
        return (
            <React.Fragment>
            <h1 className="title">Formulário de Cadastro</h1>

            <hr /> 

            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" maxLength="30" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu nome ..." />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Vaga</label>
                            <input type="text" maxLength="20" className="form-control"
                                name="vaga"
                                value={this.state.user.vaga}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome da vaga pretendida ..."/>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data Nascimento</label>
                            <input type="text" maxLength="10" className="form-control"
                                name="data_nasc"
                                value={this.state.user.data_nasc}
                                onChange={e => this.updateField(e)}
                                placeholder="Data de nascimento: dd/mm/aaaa"/>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" maxLength="30" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu e-mail ..."/>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                                Enviar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                                Cancelar
                        </button>
                    </div>
                </div>
            </div>
            </React.Fragment>        
        )
    }

    render() {
        return(
            <Main>
                {this.renderForm()}
            </Main>
        )
    }
} 