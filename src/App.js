import logo from './logo.svg';
import './App.css';
import ListaProdutos from "./Components/ListaProdutos/index"

const produtos = [{
  nome: "Teste1",
  preco: 10.00,
},
{
  nome: "Teste2",
  preco: 20.00,
}]

function App() {
  return (
    <div>
      <h1>Lista Produtos</h1>
        <ListaProdutos produtos={produtos}/>
    </div>
  );
}

export default App;
