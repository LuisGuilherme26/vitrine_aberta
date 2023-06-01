import Logo_h from "../media/logo_h.png"
import { FaSearch } from 'react-icons/fa'
import Login from './Login'
import React, {useState} from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

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

            <nav>
                <div className="nav-box" style={{ width: "60%" }}>
                    <img src={Logo_h}/>
                    <ul>
                        <li><Link className="link-route" to="/">Home</Link></li>
                        <li><Link className="link-route" to="/disciplina">Disciplinas</Link></li>
                        <li>Perfis</li>
                        <li>Bate-papo</li>
                        <li><Link className="link-route" to="/sobre">Sobre</Link></li>
                    </ul>
                    <Link className="link-route" to="/exposicao"><button style={{ background: "transparent", color: "#E4623E", border: "2px solid #E4623E", fontSize: "17px", width: "200px"}}>Expor Trabalho</button></Link>
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