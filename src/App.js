import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exposicao from './components/Exposicao';
import Disciplina from './components/Disciplina';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/disciplina" element={<Disciplina />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/exposicao" element={<Exposicao />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
