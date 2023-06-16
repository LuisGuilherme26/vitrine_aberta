import perfilImg from "../media/perfil-img.jpg"
import cabineImg from "../media/destaques-cabine.png"

const Perfil = () => {
    return(
        <div className="perfil-container">
            <div className="perfil-inicio">
                <div className="perfil-inicio-conteudo">
                    <img src={perfilImg} alt="" />
                    <div className="perfil-texto">
                        <h1>Gisele Brito</h1>
                        <p>Sou estudante Universitario do curso de Design Digital do 4º semestre. Adoro modelagem 3d, animações e edição de vídeo. Também sou um grande entusiasta de edição de imagens.</p>
                    </div>
                </div>
            </div>
            <div className="perfil-destaques">
                <div className="perfil-destaques-botoes">
                    <button>Edição digital de imagens</button>
                    <button>Modelagem tridimesional</button>
                </div>
                <div className="perfil-destaques-cards">
                    <h2>Destaques</h2>
                    <div className="destaques-cards-org">
                        <div className="perfil-destaques-card">
                            <div className="destaques-card-titulo">
                                <h5>Cabine EASE</h5>
                            </div>
                            <div className="destaques-card-content">
                                <img src={cabineImg} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id arcu lacus. Mauris et volutpat augue, in vulputate quam. Duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                        <div className="perfil-destaques-card">
                            <div className="destaques-card-titulo">
                                <h5>Cabine EASE</h5>
                            </div>
                            <div className="destaques-card-content">
                                <img src={cabineImg} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id arcu lacus. Mauris et volutpat augue, in vulputate quam. Duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                        <div className="perfil-destaques-card">
                            <div className="destaques-card-titulo">
                                <h5>Cabine EASE</h5>
                            </div>
                            <div className="destaques-card-content">
                                <img src={cabineImg} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id arcu lacus. Mauris et volutpat augue, in vulputate quam. Duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                        <div className="perfil-destaques-card">
                            <div className="destaques-card-titulo">
                                <h5>Cabine EASE</h5>
                            </div>
                            <div className="destaques-card-content">
                                <img src={cabineImg} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id arcu lacus. Mauris et volutpat augue, in vulputate quam. Duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium auctor ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil