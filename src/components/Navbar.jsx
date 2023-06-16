import Logo_h from "../media/logo_h.png"
import { FaSearch } from 'react-icons/fa'
import React, {useState} from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

const Navbar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Login"
                overlayClassName="modal-overlay Login"
                className="modal-content Login"
            >
                <div className="Container">
                    <div className="Logo-box">
                        <img src={Logo} />
                    </div>
                    <div className="Login-content">
                        <h1>Entrar</h1>
                        <div className="content-body">
                            <div className="box">
                                <label>Nome de usuário</label>
                                <input type="text" placeholder="Usuario" />
                            </div>
                            <div className="box">
                                <label>Senha</label>
                                <input type="password" placeholder="Senha" />
                                <a href="">Esqueci minha senha</a>
                            </div>
                        </div>
                        <div className="content-footer">
                            <button>entrar</button>
                            <div>
                                <span>Ainda não se cadastrou?</span>
                                <Link className="link-route" to="/cadastro">
                                    <button onClick={closeModal} style={{
                                        background: "transparent",
                                        border: "transparent",
                                        color: "grey",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        cursor: "pointer"
                                    }}>Crie uma conta</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
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