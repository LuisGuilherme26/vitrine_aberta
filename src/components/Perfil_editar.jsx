import userImg from "../media/perfil-img.jpg"
import cabinePng from "../media/destaques-cabine.png"


const Perfil_editar = () => {
    return(
        <div className="perfil-container">
            <div className="perfil-edi-inicio">
                <div className="perfil-edi-inicio-conteudo">
                    <img src={userImg} alt=""/>
                    <div className="perfil-edi-texto">
                        <div className="perfil-edi-config-banner">
                            <h3>Substituir imagem do banner</h3>
                            <p>Escolha uma imagem para a visualização do seu projeto</p>
                            <div className="config-banner-buttons">
                                <button>Substituir</button>
                                <button className="btn-remover">Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="perfil-edi-conteudo">
                <div className="perfil-edi-form">
                    <div className="form-nome">
                        <p>Nome</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="form-sobrenome">
                        <p>Sobrenome</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="form-descricao">
                        <p>Descricao</p>
                        <textarea name="" id="" cols="100" rows="10"></textarea>
                    </div>
                </div>
                <div className="perfil-edi-destaques">
                    <div className="perfil-edi-destaques-org">
                        <div className="destaques-edi-card">
                            <div className="destaques-edi-card-header">
                                <h3>Cabine EASE</h3>
                                <p>Hugo Maciel</p>
                            </div>
                            <div className="destaques-edi-card-content">
                                <img src={cabinePng} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                            </div>
                            <div className="destaques-edi-card-footer">
                                <button>Ver mais</button>
                                <button>Editar</button>
                            </div>
                        </div>
                        <div className="destaques-edi-card">
                            <div className="destaques-edi-card-header">
                                <h3>Cabine EASE</h3>
                                <p>Hugo Maciel</p>
                            </div>
                            <div className="destaques-edi-card-content">
                                <img src={cabinePng} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                            </div>
                            <div className="destaques-edi-card-footer">
                                <button>Ver mais</button>
                                <button>Editar</button>
                            </div>
                        </div>
                        <div className="destaques-edi-card">
                            <div className="destaques-edi-card-header">
                                <h3>Cabine EASE</h3>
                                <p>Hugo Maciel</p>
                            </div>
                            <div className="destaques-edi-card-content">
                                <img src={cabinePng} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                            </div>
                            <div className="destaques-edi-card-footer">
                                <button>Ver mais</button>
                                <button>Editar</button>
                            </div>
                        </div>
                        <div className="destaques-edi-card">
                            <div className="destaques-edi-card-header">
                                <h3>Cabine EASE</h3>
                                <p>Hugo Maciel</p>
                            </div>
                            <div className="destaques-edi-card-content">
                                <img src={cabinePng} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste tempora maiores voluptatibus aspernatur veniam, quia saepe ratione ab deleniti totam minus dignissimos dicta labore quaerat laboriosam harum architecto inventore.</p>
                            </div>
                            <div className="destaques-edi-card-footer">
                                <button>Ver mais</button>
                                <button>Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil_editar