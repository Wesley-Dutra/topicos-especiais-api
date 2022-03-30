import './App.css';

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UsuarioList from './UsuarioList';


function App() {

  let usuarioList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
  ]

  const [usuarios, setUsuarios] = useState(usuarioList);

  const onClickAtualizar = () => {
      usuarioList = [
        { id: 1, nome: 'fulano alterado', email: 'fulano@teste', idade: 30 },
        { id: 2, nome: 'beltrano', email: 'beltrano@teste', idade: 20 },
        { id: 3, nome: 'Ciclano', email: 'email3@teste', celular: '54 6565 5454' },
      ];
      setUsuarios(usuarioList);
    }

    const excluir = (id) => {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }

  return (
    <div className="App">
      <UsuarioList 
        usuarios={usuarios} 
        onClickAtualizar={onClickAtualizar}
        excluir={excluir}/>
    </div>
  );
}

export default App;
