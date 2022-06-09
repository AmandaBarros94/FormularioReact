import React, { Component } from 'react';
// import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <div className='fragment'>

      <div className='Login'>
        
        <h3>
         
        </h3>
      
      <h4>
     Bem vindo ao easy job
      </h4>
         <input type="text" placeholder='Email ou nome de usuário' name="Email " size="40" /> 
        
         <input type="password" placeholder='Senha' name="Email " size="40" /> 

         <button type="submit">submit</button>

         <button type="submit">Sign In</button>
      </div>
      </ div>
    )
  }
}
