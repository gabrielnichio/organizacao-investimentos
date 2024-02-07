import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log(nome, valor, quantidade);
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos para registrar o investimento</h2>
                <CampoTexto
                    label='Nome do ativo/passivo'
                    valor={nome}
                    placeholder='Digite aquis'
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                />
                <CampoTexto
                    label='Valor unitario'
                    valor={valor}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setValor(valor)}
                    obrigatorio={true}
                />
                <CampoTexto
                    label='Quantidade'
                    valor={quantidade}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setQuantidade(valor)}
                    obrigatorio={true}
                />
                <Botao>
                    Submeter investimento
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;