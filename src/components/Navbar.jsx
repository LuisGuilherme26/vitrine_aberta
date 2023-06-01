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
                <div className="nav-box" style={{ width: "60%" }}>
                    <img src={Logo_h}/>
                    <ul>
                        <li>Home</li>
                        <li>Disciplinas</li>
                        <li>Perfis</li>
                        <li>Bate-papo</li>
                        <li>Sobre</li>
                    </ul>
                    <button style={{ background: "transparent", color: "#E4623E", border: "2px solid #E4623E", fontSize: "17px"}}>Expor Trabalho</button>
                </div>
                <div className="navbox" style={{ width: "25%", position: "relative"}}>
                    <input type="text" placeholder="Buscar"/>
                    <FaSearch  style={{ height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "15px", padding: "4px",
                boxSizing: "border-box", transform: "translateY(-50%)"}}/>
                    <button onClick={openModal}>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar