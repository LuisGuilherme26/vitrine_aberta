import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';
import Exposicao from './components/Exposicao';
import Disciplina from './components/Disciplina';
import Footer from './components/Footer';
import Sobre from './components/Sobre';

function App() {
  return (
    <>
      <Navbar />
      {/* <Disciplina /> */}
      {/* <Exposicao/> */}
      <Sobre/>
      <Footer />
    </>
  );
}

export default App;
