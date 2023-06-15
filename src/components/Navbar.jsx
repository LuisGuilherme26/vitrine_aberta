import Logo_h from "../media/logo_h.png"
import { FaArrowAltCircleUp, FaSearch } from 'react-icons/fa'
import Login from './Login'
import React, {useState} from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleDown } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa"

Modal.setAppElement("#root");

const Navbar = () =>{

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <>
            <Modal
                isOpen = {modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Login"
                overlayClassName="modal-overlay Login"
                className="modal-content Login"
            >
                <Login/>
            </Modal>

            <nav    >
                <div className="navbar">
                    <div className="nav-box" style={{width:"10%"}}>
                        <img src={Logo_h}/>
                    </div>
                    <div className="nav-box" style={{width:"50%"}}>
                        <ul>
                            <li><Link className="link-route" to="/">Home</Link></li>
                            <li id="disc"><Link className="link-route" to="/disciplina">Disciplinas</Link>
                                <div className="disc-drop">
                                    <ul>
                                        <li>Edição de Imagens</li>
                                        <li>Multimídia</li>
                                        <li>Modelagem 3D</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link className="link-route" to="/Perfis">Perfis</Link></li>
                            <li><Link className="link-route" to="/Bate-papo">Bate-papo</Link></li>
                            <li><Link className="link-route" to="/Sobre">Sobre</Link></li>
                        </ul>
                    </div>
                    <div className="nav-box" style={{ width: "40%", position: "relative", height: "45px"}}>
                        <input type="text" placeholder="Buscar"/>
                        <FaSearch  style={{ height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "15px", padding: "4px",
                    boxSizing: "border-box", transform: "translateY(-50%)"}}/>
                        <button onClick={openModal} className="btn-navbar">Login</button>
                    </div>
                </div>
                {/* <div className="navbar-secondary">
                    <div className="nav-box">
                        <ul>
                            <li>Tudo</li>
                            <li>Animações</li>
                            <li>3D</li>
                            <li>Ilustrações</li>
                            <li>Edição de Imagens</li>
                        </ul>
                    </div>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar