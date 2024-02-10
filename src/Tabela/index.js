import './Tabela.css';

const Tabela = (props) => {
    return (
        <section className='tabela'>
            <h3>{props.label}</h3>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Valor unitário</th>
                    <th>Quantidade</th>
                    <th>Total investido</th>
                </thead>
                <tbody>
                    <tr>
                        <th>PETR4</th>
                        <td>20</td>
                        <td>100</td>
                        <td>{100 * 20}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Tabela;