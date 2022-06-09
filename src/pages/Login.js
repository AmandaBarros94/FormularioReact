import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  render() {
    return (
  
      <div className='Login'>
        
      <h2>
     Bem vindo ao easy job
      </h2>
         <input type="text" placeholder='Email ou nome de usuário' name="Email " size="40" /> 
        
         <input type="password" placeholder='Senha' name="Email " size="40" /> 

         <button type="submit">Entrar</button>

         <h4>
           não tem uma conta? <Link to="/register">cadastre-se</Link>
         </h4>

              </div>
    )
  }
}
