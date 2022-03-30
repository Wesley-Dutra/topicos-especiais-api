const UsuarioList = (props) => {
    return (
        <div>
            <h4>Listagem de usuários</h4>
            <button onClick={props.onClickAtualizar} type="button" class="btn btn-primary btn-sm">Atualizar Lista</button>
            <button type="button" class="btn btn-primary btn-sm">Inserir</button>
            <table className='table'>
            <thead>
                <tr>
                    <th>Index</th><th>Id</th><th>Nome</th><th>Email</th><th>Celular</th><th>Operações</th>
                </tr>
            </thead>
            <tbody>
                {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{o.id}</td>
                    <td>{o.nome}</td>
                    <td>{o.email}</td>
                    <td>{o.celular}</td>
                    <td>
                        <button type="button" class="btn btn-success btn-sm">Editar</button>
                        <button onClick={() => props.excluir(o.id)} type="button" class="btn btn-dark btn-sm">Excluir</button>
                    </td>
                </tr>
                ))) : (
                <tr>
                    <td colSpan={5}>Nenhum usuário.</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
    )
}
export default UsuarioList