import './App.css';

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UsuarioList from './UsuarioList';
import UsuarioForm from './UsuarioForm';
import UsuarioSrv from "./services/UsuarioSrv"; 


function App() {

  let usuarioList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
  ]

  const [usuarios, setUsuarios] = useState(usuarioList);

  const onClickAtualizar = () => {
    /*
    usuarioList = [
      { id: 1, nome: 'fulano alterado', email: 'fulano@teste', idade: 30 },
      { id: 2, nome: 'beltrano', email: 'beltrano@teste', idade: 20 },
      { id: 3, nome: 'Ciclano', email: 'email3@teste', celular: '54 6565 5454' },
    ];


    setUsuarios(usuarioList);
*/
UsuarioSrv.listar().then(response => {
  setUsuarios(response.data);
  console.log("Usuários atualizados");
}).catch(e => { 
  console.log("Erro: "+e.message);
});


  }

  let initialState = [{ id: null, nome: '', email: '', celular: '' }]
  const [usuario, setUsuario] = useState(initialState) //hook para inserir ou alterar algum item da lista
  const [editando, setEditando] = useState(false) //hook para determinar se está sendo esecutado algum comando

  const editar = (id) => {
    setUsuario(usuarios.filter((usuario) => usuario.id === id)[0]);
    setEditando(true);
  }

  const excluir = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  }

  const inserir = () => {
    setUsuario(initialState);
    setEditando(true);
  }

  const salvar = () => {
    console.log('Salvar ...');
    if (usuario.id == null){ // inclussão
      usuario.id = usuarios.length + 1
      setUsuarios([...usuarios, usuario])
    } else { // alteração
      setUsuarios(usuarios.map((find) => (find.id === usuario.id ? usuario : find)))
    }
    setEditando(false);
  }

  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }


    if (!editando) {
      return (
        <div className="App">
          <UsuarioList 
            usuarios={usuarios} 
            onClickAtualizar={onClickAtualizar}
            inserir={inserir}
            excluir={excluir}
            editar={editar}/>
        </div>
      ) } else {
        return (
          <div className="App">
            <UsuarioForm usuario={usuario} setUsuario={setUsuario} salvar={salvar} cancelar={cancelar} />
          </div>
        );
      }
}

export default App;
