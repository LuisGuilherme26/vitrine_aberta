import Logo_h from "../media/logo_h.png"
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowUp } from 'react-icons/io'
import Login from './Login'
import React, {useState} from 'react'
import Modal from 'react-modal'

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
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <Login></Login>
            </Modal>

            <nav>
                <div className="navbar">
                    <div className="nav-box">
                        <img src={Logo_h}/>
                        <h2 style={{marginLeft: "20%"}}>Disciplinas</h2>
                    </div>
                    <div className="navbox" style={{ width: "50%", position: "relative", height: "45px"}}>
                        <input type="text" placeholder="Buscar"/>
                        <FaSearch  style={{ height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "15px", padding: "4px",
                    boxSizing: "border-box", transform: "translateY(-50%)"}}/>
                        <button onClick={openModal} className="btn-navbar">Login</button>
                    </div>
                </div>
                <div className="navbar-secondary" style={{padding: "15px"}}>
                    <div className="nav-box">
                        <button className="btn-navbar">Perfis</button>
                    </div>
                    <div className="nav-box">
                        <ul>
                            <li>Tudo</li>
                            <li>Animações</li>
                            <li>3D</li>
                            <li>Ilustrações</li>
                            <li>Edição de Imagens</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar