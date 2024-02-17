import './Tabela.css';

const Tabela = (props) => {

    return (
        (props.investimentos.length > 0) && <section className='tabela' style={{ backgroundColor: props.cor }}>
            <h3>{props.label}</h3>
            <table>
                <thead>
                    <tr>
                        <th>{props.columnName}</th>
                        <th>Valor unitário</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.investimentos.map(investimento => 
                        <tr key={Math.random()}>
                            <th>{investimento.nome}</th>
                            <td>{parseFloat(investimento.valor).toFixed(2)}</td>
                            <td>{investimento.quantidade}</td>
                            <td>{(parseFloat(investimento.valor) * parseFloat(investimento.quantidade)).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Investido</th>
                        <th>{props.investimentos.reduce((accumulator, currentValue) => accumulator + parseFloat((parseFloat(currentValue.valor) * parseFloat(currentValue.quantidade)).toFixed(2)), 0)}</th>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Tabela;