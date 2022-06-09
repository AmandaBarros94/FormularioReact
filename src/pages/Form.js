import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Cadastre seu curricúlo</h1>
          <h2> Dados Pessoais</h2>
          <input type="text" placeholder="Name: " size="40" />
          <input type="text" placeholder="Endereço: " size="40" />
          <input type="text" placeholder="Bairro: " size="40" />
          <input type="text" placeholder="Cidade: " size="40" />
          <input type="text" placeholder="UF: " size="40" />
          <input type="number" placeholder="Fone: " size="40" />
          <input type="number" placeholder="Celular: " size="40" />
          <input type="text" placeholder="Estado Civil: " size="40" />
          <input type="date" placeholder="Data de Nasciemento: " size="40" />
          <input type="number" placeholder="Idade: " size="40" />
          <input type="text" placeholder="Natural: " size="40" />
          <input type="text" placeholder="UF: " size="40" />
          <input type="email" placeholder="e-mail: " size="40" />
          <input type="number" placeholder="RG: " size="40" />
          <input type="text" placeholder="Órgão Emissor: " size="40" />
          <input type="text" placeholder="CPF:" size="40" />
          <input type="number" placeholder="CTPS N°: " size="40" />
          <input type="number" placeholder="série: " size="40" />
          <input type="number" placeholder="TITULO: " size="40" />
          <input type="number" placeholder="Zona: " size="40" />
          <input type="number" placeholder="Sessão: " size="40" />
          <input type="number" placeholder="CNH N°: " size="40" />
          <input type="text" placeholder="Categoria: " size="40" />
          <h2> Sobre você:</h2>
          <input type="text" placeholder="Sessão: " size="100" />
          <h2> Escolaridade</h2>

          <select placeholder="select">
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo"> Ensino Médio Completo</option>
            <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
            <option value="Ensino Fundamental Completo"> Ensino Fundamental Completo</option>
            <option value="Ensino Sperior Incompleto">Ensino Sperior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>

          </select>

          <h2> Cursos</h2>

          <input type="text" placeholder="Instuição: " size="40" />
          <input type="date" placeholder="Ano de Conclusão: " size="40" />
          <input type="text" placeholder="Descrição: " size="40" />

          <h2> Experiências Profissionais</h2>

          <input type="text" placeholder="Empresa: " size="40" />
          <input type="date" placeholder="Data de Admissão: " size="40" />
          <input type="date" placeholder="Data de Demissão: " size="40" />
          <input type="text" placeholder="Cargo: " size="40" />

          <h2> Objetivo</h2>

          <select placeholder="select">
            <option value="Ensino Médio Incompleto">Valor 1</option>
            <option value="Ensino Médio Completo" selected>Valor 2</option>
            <option value="Ensino Fundamental Incompleto">Valor 1</option>
            <option value="Ensino Fundamental Completo" selected>Valor 2</option>
            <option value="Ensino Sperior Incompleto">Valor 3</option>
            <option value="Ensino Superior Completo">Valor 1</option>

          </select>
          
          <input type="number" placeholder="Pretensão salarial: " size="40" />
          

        </div>
      </div>
    )
  }
}
