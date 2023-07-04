import perfilImg from "../media/perfil-img.jpg"
import cabineImg from "../media/destaques-cabine.png"
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Modal from 'react-modal'
// import { MDCCheckbox } from "@material/checkbox";

Modal.setAppElement("#root");

const Perfil = () => {

    const[modalDiscIsOpen, setDiscIsOpen] = useState(false);

    function openModalDisc(){
        setDiscIsOpen(true);
    }

    function closeModalDisc(){
        setDiscIsOpen(false);
    }

    return(
        <>
            <Modal
                isOpen={modalDiscIsOpen}
                onRequestClose={closeModalDisc}
                contentLabel="Configurações"
                overlayClassName={"modal-overlay disciplina"}
                className={"modal-disc-content"}
            >
                <div className="modal-disc-body">
                    <h4>Adicionar Disciplina</h4>
                    <div className="modal-disc-form">
                        <div className="modal-disc-form-item">
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Modelagem tridimesional</p>
                            </div>
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Edição de imagens</p>
                            </div>
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Multimídia</p>
                            </div>
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Comunicação visual</p>
                            </div>
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Desenho</p>
                            </div>
                            <div>
                                <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/>
                                <p>Concepção de produtos</p>
                            </div>
                        </div>
                        <div className="modal-disc-adicionar">
                            <label>Não achou o que procura? Adicione você mesmo</label>
                            <p>Disciplina</p>
                            <input type="text" />
                        </div>
                        <div className="modal-disc-footer">
                            <button>Salvar</button>
                            <button className="btn-cancelar">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Modal>
        <div className="perfil-container">
            <div className="perfil-inicio">
                <div className="perfil-inicio-conteudo">
                    <img src={perfilImg} alt="" />
                    <div className="perfil-texto">
                        <div className="perfil-texto-titulo">
                            <h1>Gisele Brito</h1>
                            <Link className="lik-route" to="/Perfil_editar"><button>Editar perfil</button></Link>
                            <button onClick={openModalDisc}>...</button>
                        </div>
                        <p>Sou estudante Universitario do curso de Design Digital do 4º semestre. Adoro modelagem 3d, animações e edição de vídeo. Também sou um grande entusiasta de edição de imagens.</p>
                        <button className="btn-perfil-trabalho">Publicar trabalho</button>
=======
import axios from "axios"
import { useEffect, useState } from "react"
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";

const Perfil = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const navigate = useNavigate();

    useEffect(
        () => {
            const userId = JSON.parse(sessionStorage.getItem("Logado"))
            if (userId == null) {
                alert("Você precisa estar logado!")
                navigate("/")
            } else {
                axios.get("http://localhost:3001/users/recuperar/" + userId)
                    .then(
                        (res) => {
                            setNome(res.data.nome)
                            setEmail(res.data.email)
                            setSenha(res.data.senha)
                        }
                    )
                    .catch(error => console.log(error))
            }
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = JSON.parse(sessionStorage.getItem("Logado"))
        const updateUser = { nome, email, novaSenha }

        axios.put("http://localhost:3001/users/editar/" + userId, updateUser)
            .then(
                (res) => {
                    alert("Usuário editado")
                    closeModal()
                }
            ).catch(error => console.log(error))
    }

    const deslogar = () => {
        sessionStorage.setItem("Logado", null);
        navigate("/")
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="EditarPerfil"
                overlayClassName="modal-overlay editar"
                className="modal-content editar"
            >
                <div className="modal-editar">
                    <h2>Editar Perfil</h2>
                    <div className="modal-box-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nome de Usuário</label>
                                <input type="text" value={nome} onChange={(event) => { setNome(event.target.value) }} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <div>
                                <label>Senha</label>
                                <input type="password" value={senha} onChange={(event) => { setSenha(event.target.value) }} />
                            </div>
                            <div>
                                <label>Nova Senha</label>
                                <input type="password" onChange={(event) => { setNovaSenha(event.target.value) }} />
                            </div>
                            <div className="box-form-btn">
                                <button type="submit" style={{ backgroundColor: "#E4623E" }}>Salvar</button>
                                <button onClick={closeModal} style={{ backgroundColor: "#808080" }}>Cancelar</button>
                            </div>
                        </form>
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
            <div className="perfil-destaques">
                <div className="perfil-destaques-conteudo">
                    <div className="perfil-destaques-botoes">
            </Modal>
            <div className="perfil-container">
                <div className="perfil-inicio">
                    <div className="perfil-inicio-conteudo">
                        <img src={perfilImg} alt="" />
                        <div className="perfil-texto">
                            <div className="perfil-texto-titulo">
                                <h1>{nome}</h1>
                                <button onClick={openModal}>Editar perfil</button>
                                <button onClick={deslogar}>...</button>
                            </div>
                            <p>Sou estudante Universitario do curso de Design Digital do 4º semestre. Adoro modelagem 3d, animações e edição de vídeo. Também sou um grande entusiasta de edição de imagens.</p>
                            <button className="btn-perfil-trabalho">Publicar trabalho</button>
                        </div>
                    </div>
                </div>
                <div className="perfil-destaques">
                    <div className="perfil-destaques-conteudo">
                        <div className="perfil-destaques-botoes">
                            <button>Edição digital de imagens</button>
                            <button>Modelagem tridimesional</button>
<<<<<<< Updated upstream
                            <button id="destaques" style={{backgroundColor:"#E4623E", color:"white", fontWeight:"bold"}}>+</button>
                    </div>
                    <div className="perfil-destaques-cards">
                        <div className="destaques-cards-org">
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
=======
                        </div>
                        <div className="perfil-destaques-cards">
                            <div className="destaques-cards-org">
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
>>>>>>> Stashed changes
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className="destaques-card">
                                <div className="destaques-card-header">
                                    <h3>Cabine EASE</h3>
                                    <p>Hugo Maciel</p>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                                <div className="destaques-card-content">
                                    <img src={cabineImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                                <div className="destaques-card-footer">
                                    <button>Ver mais</button>
                                <div className="destaques-card">
                                    <div className="destaques-card-header">
                                        <h3>Cabine EASE</h3>
                                        <p>Hugo Maciel</p>
                                    </div>
                                    <div className="destaques-card-content">
                                        <img src={cabineImg} alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                                    </div>
                                    <div className="destaques-card-footer">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
        </div>
=======
>>>>>>> Stashed changes
        </>
    )
}

export default Perfil