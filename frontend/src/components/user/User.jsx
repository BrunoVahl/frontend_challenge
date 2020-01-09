import './User.css'
import React, { Component } from 'react'
import Main from '../template/main/Main'
import axios from 'axios'

const constants = require('../../constants/Constants')
const baseUrl = constants.baseUrl
const initialState = constants.initialState
var className = 'titulo'

export default class User extends Component {

    state = { 
        ...initialState 
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    load(user) {
        this.setState({ user })
        className = 'titulo2'
    }

    
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.push(user)
        return list
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
        className = 'titulo'
    }

    clear() {
        this.setState({ user: initialState.user })
        className = 'titulo'
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Vaga</th>
                        <th>Data de Nascimento</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.vaga}</td>
                    <td>{user.data_nasc}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                                <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2 update"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    
    renderForm() {
        return (
            <React.Fragment>
            <h1 className={className}>Alterando Cadastro</h1>

            <hr /> 

            <div className={className}>
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
            <React.Fragment>
                <Main>
                    {this.renderTable()}
                    {this.renderForm()}
                </Main>
            </React.Fragment>
        )
    }
} 