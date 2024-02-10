import { useState } from "react";
import Banner from "./Banner";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {

  const [listaInvestimentos, setInvestimentos] = useState([]);

  const cadastraInvestimentos = (investimento) => {
    setInvestimentos([...listaInvestimentos, investimento]);
    console.log(listaInvestimentos);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoSubmeterInvestimentos = {investimento => cadastraInvestimentos(investimento)}/>
      <Tabela label= 'Acoes'/>
    </div>
  );
}

export default App;
