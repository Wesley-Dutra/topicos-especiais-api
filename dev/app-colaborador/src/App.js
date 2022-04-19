import './App.css'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ColaboradorList from './ColaboradorList'
import ColaboradorForm from './ColaboradorForm'

function App() {

  //definição da lista na variavel colaboradoresList
  let colaboradoresList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
  ]

  const [colaboradores, setColaboradores] = useState(colaboradoresList) //criação do hook useState com os valores de colaboradoresList
  const initialState = { id: null, nome: '', email: '', celular: '' } // variavel para usar no hook para inserir/alterar algum item
  const [colaborador, setColaborador] = useState(initialState) //hook para inserir ou alterar algum item da lista
  const [editando, setEditando] = useState(false) //hook para determinar se está sendo esecutado algum comando

  //comando para atualizar a tabela
  const onClickAtualizar = () => {
    colaboradoresList = [
      { id: 1, nome: 'fulano alterado', email: 'fulano@teste', idade: 30 },
      { id: 2, nome: 'beltrano', email: 'beltrano@teste', idade: 20 },
      { id: 3, nome: 'Ciclano', email: 'email3@teste', celular: '54 6565 5454' },
    ]
    setColaboradores(colaboradoresList)
  }

  //comando para editar um item da tabela
  const editar = (id) => {
    setColaborador(colaboradores.filter((colaborador) => colaborador.id === id)[0])
    setEditando(true)
  }

  //comando para excluir algum item da lista
  const excluir = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
  }

  //comando para inserir um novo item na lista
  const inserir = () => {
    setColaborador(initialState)
    setEditando(true)
  }

  //comando para salvar os dados do formulário
  const salvar = () => {
    console.log('Salvar ...');
    if (colaborador.id == null){ // inclussão
      colaborador.id = colaboradores.length + 1
      setColaboradores([...colaboradores, colaborador])
    } else { // alteração
      setColaboradores(colaboradores.map((find) => (find.id === colaborador.id ? colaborador : find)))
    }
    setEditando(false)
  }

  //comando para cancelar a tela de inserção/edição
  const cancelar = () => {
    console.log('Cancelou ...')
    setEditando(false)
  }

  //chamada do axios para requisições
  


  //if para decidir qual tela ira aparecer
  if (!editando) {
    //lista da tabela com os dados
    return (
      <div className="App">
        <ColaboradorList 
          colaboradores={colaboradores} 
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          excluir={excluir}
          editar={editar}/>
      </div>
    ) 
  } else {
    //lista do formulário para inserir e alterar
    return (
      <div className="App">
        <ColaboradorForm colaborador={colaborador} setColaborador={setColaborador} salvar={salvar} cancelar={cancelar} />
      </div>
    );
  }
}

export default App;
