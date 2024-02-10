import './ListaInvestimentos.css';


const ListaInvestimentos = (props) => {

    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='lista-investimentos'>
            <label>{props.label}</label>
            <select onChange={aoSelecionar}>
                {props.lista.map(value => <option key={value}>{value}</option>)}
            </select>
        </div>
    )
}

export default ListaInvestimentos;