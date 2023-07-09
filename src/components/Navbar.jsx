import Logo_h from "../media/logo_h.png"
import Logo from "../media/logo.png"
import { FaSearch } from 'react-icons/fa'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import userImg from "../media/user.svg"

Modal.setAppElement("#root");

const Navbar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalPerfilIsOpen, setPerfilIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openPerfilModal(){
        setPerfilIsOpen(true);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(
        () => {
            axios.get("http://localhost:3001/users/listar")
                .then(
                    (response) => {
                        setUsers(response.data)
                    }
                )
                .catch(error => console.log(error))
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        
        for(let user of users){
            if(user.nome == name && user.senha == password){
                alert(`Usuário logado com sucesso!`)
                let id = user._id;
                saveUserId(id)
                closeModal()
            }
        }
    }

    function closePerfilModal(){
        setPerfilIsOpen(false);
    const saveUserId = (id) => {
        sessionStorage.setItem("Logado",JSON.stringify(id));
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
                    <div className="login-conteudo ">
                    <div className="login-conteudo">
                        <h1>Entrar</h1>
                        <div className="login-conteudo-body">
                            <div className="login-formulario">
                                <label> Nome de usuário</label>
                                <input className="input-login" type="text" placeholder="Usuário"/>
                            </div>
                            <div className="login-formulario">
                                <label>Senha</label>
                                <input className="input-login" type="password" placeholder="Senha" />
                                <p>Esqueci minha senha</p>
                        <form onSubmit={handleSubmit}>
                            <div className="login-conteudo-body">
                                <div className="login-formulario">
                                    <label>Nome de usuário</label>
                                    <input className="input-login" type="text" placeholder="Usuário" onChange={(event) => {setName(event.target.value)}}/>
                                </div>
                                <div className="login-formulario">
                                    <label>Senha</label>
                                    <input className="input-login" type="password" placeholder="Senha" onChange={(event) => {setPassword(event.target.value)}}/>
                                    <p>Esqueci minha senha</p>
                                </div>
                            </div>
                        </div>
                        <div className="login-conteudo-footer">
                            <div>
                                <button>Entrar</button>
                                <button className="btn-cancelar">Cancelar</button>
                            <div className="login-conteudo-footer">
                                <div>
                                    <button type="submit">Entrar</button>
                                    <button className="btn-cancelar">Cancelar</button>
                                </div>
                                <p>Ainda não se cadastrou? <span > <Link className="link-route" to="/cadastro"><button type="submit" onClick={closeModal} style={{
                                    background: "transparent",
                                    border: "transparent",
                                    color: "grey",
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    cursor: "pointer"
                                }}>Crie uma conta!</button></Link></span></p>
                            </div>
                    </div>
                </div>
            </Modal>
                isOpen={modalPerfilIsOpen}
                onRequestClose={closePerfilModal}
                contentLabel="Configurações"
                overlayClassName={"modal-overlay perfil"}
                className={"modal-perfil-content"}
            >
                <div className="modal-perfil-body">
                    <h4>Configurações</h4>
                    <div className="modal-perfil-form">
                        <div className="modal-perfil-form-item">
                            <p>Nome</p>
                            <input type="text" />
                        </div>
                        <div className="modal-perfil-form-item">
                            <p>Email</p>
                            <input type="email" />
                        </div>
                        <div className="modal-perfil-form-item">
                            <p>Senha</p>
                            <input type="password" />
                        </div>
                        <div className="modal-perfil-form-item">
                            <p>Confirmar senha</p>
                            <input type="password" />
                        </div>
                        <div className="modal-perfil-footer">
                            <button>Salvar</button>
                            <button className="btn-cancelar">Cancelar</button>
                        </div>
                    </div>
                </div>
            <nav>
                <div className="navbar">
                    <div className="nav-box" style={{width:"10%"}}>
                        <img src={Logo_h}/>
                    <div className="nav-box" style={{ width: "10%" }}>
                        <img src={Logo_h} />
                    </div>
                    <div className="nav-box" style={{width:"60%"}}>
                    <div className="nav-box" style={{ width: "60%" }}>
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
                            <li><Link className="link-route" to="/perfis">Perfis</Link></li>
                            <li><Link className="link-route" to="/Bate-papo">Bate-papo</Link></li>
                            <li><Link className="link-route" to="/Sobre">Sobre</Link></li>
                        </ul>
                        <Link className="link-route btn-expor" to="/exposicao">Expor trabalho</Link>
                    </div>
                    <div className="nav-box" style={{ width: "30%", position: "relative", height: "45px"}}>
                        <input type="text" placeholder="Buscar" style={{width:"100%"}}/>
                        <FaSearch  style={{ height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "10px", padding: "4px",
                    boxSizing: "border-box", transform: "translateY(-50%)"}}/>
                    <div className="nav-box" style={{ width: "30%", position: "relative", height: "45px" }}>
                        <input type="text" placeholder="Buscar" style={{width:"100%"}} />
                        <FaSearch style={{
                            height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "10px", padding: "4px",
                            boxSizing: "border-box", transform: "translateY(-50%)"
                        }} />
                        <button onClick={openModal} className="btn-navbar" style={{display:"none"}}>Login</button>
                    </div>
                    <div className="nav-box">
                        <div className="user-dropdown">
                            <img src={userImg} alt="" id="userImg" />
                            <div className="user-dropdown-content">
                                <ul>
                                    <li>Ver perfil</li>
                                    <li><button onClick={openPerfilModal}>Configurações</button></li>
                                    <li className="user-dropdown-sair">Sair</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar