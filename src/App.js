import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exposicao from './components/Exposicao';
import Cadastro from './components/Cadastro';
import Disciplina from './components/Disciplina';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Autores from './components/Autores';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './components/Perfil';
import Perfil_editar from './components/Perfil_editar';
import Samurai from './components/Samurai';
import Halloween from './components/Halloween';
import Mulheres from './components/Mulheres';
import Garota from './components/Garota';

function App() {

  document.title = "Vitrine aberta"
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/disciplina" element={<Disciplina />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/exposicao" element={<Exposicao />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/perfis" element={<Perfil />}/>
          <Route path="/autores" element={<Autores />}/>
          <Route path="/Perfil_editar" element={<Perfil_editar />}/>
          <Route path="/samurai" element={<Samurai />}></Route>
          <Route path="/halloween" element={<Halloween />}></Route>
          <Route path="/mulher" element={<Mulheres />}></Route>
          <Route path="/garota" element={<Garota />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
