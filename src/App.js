import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';
import Exposicao from './components/Exposicao';
import Sobre from './components/Sobre';

function App() {
  return (
    <>
      <Navbar />
      <Cadastro/>
      <Login/>
      <Home/>
      <Exposicao/>
      <Sobre/>
    </>
  );
}

export default App;
