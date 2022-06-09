import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>

                <h1>
                    Criar Conta
                </h1>
                <input type="email" placeholder='Número do celular ou Email' name="Email " size="40" />

                <input type="text" placeholder='Nome completo' name="Email " size="40" />

                <input type="text" placeholder='Nome de usuário' name="Email " size="40" />

                <input type="password" placeholder='Senha' name="Email " size="40" />
        
                        <button type="submit"> Cadastre-se</button>

                        <h4>
                        Ao se inscrever, você concorda com os Termos de Serviço e a Política de Privacidade, incluindo o Uso de Cookies.
                        </h4>

                        <h3> Já tem uma conta? 
                        <Link to="/login"> Entrar</Link>
                            </h3> 
            </div>
        )
    }
}
