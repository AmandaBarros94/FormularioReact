import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>

                <h1>
                    Criar Conta
                </h1>
                <input type="text" placeholder='Número do celular ou Email' name="Email " size="40" />

                <input type="text" placeholder='Nome completo' name="Email " size="40" />

                <input type="text" placeholder='Nome de usuário' name="Email " size="40" />

                <input type="password" placeholder='Senha' name="Email " size="40" />
        
                        <button type="submit"> Cadastre-se</button>
            </div>
        )
    }
}
