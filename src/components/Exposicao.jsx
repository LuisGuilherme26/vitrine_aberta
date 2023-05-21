import upload from "../media/upload.png"
import texto from "../media/texto.png"
import link from "../media/link.png"
import cor from "../media/cores.png"
import elementos from "../media/elementos.png"
import alinhar from "../media/alinhar.png"
import anotar from "../media/anotar.png"

const Exposicao = ()=> {
    return(
        <>
            <div className="Exposicao">
                <div className="box1">
                    <div className="organize">
                        <div className="titulo">
                            <h2>Organize seu trabalho</h2>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="anexos">
                        <div className="titulo">
                            <h2>Anexos</h2>
                        </div>
                        <div className="ane-content">
                            <img src={upload} />
                            <span style={{ fontWeight: "bold", fontSize: "20px"}}>Upload</span>
                            <p>Coloque seus arquivos aqui, imagens,<br/> vídeos, músicas entre outros</p>
                            <button>Upload</button>
                        </div>
                    </div>
                    <div className="conteudo">
                        <div className="titulo">
                            <h2>Conteúdo</h2>
                        </div>
                        <div className="con-content">
                            <div className="row">
                                <div className="box" style={{ borderLeft: "none"}}>
                                    <img src={texto}/>
                                    <span>Texto</span>
                                </div>
                                <div className="box">
                                    <img src={link}/>
                                    <span>Incorporar</span>
                                </div>
                                <div className="box" style={{ borderRight: "none"}}>
                                    <img src={cor}/>
                                    <span>Cor de Fundo</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="box" style={{ borderLeft: "none"}}>
                                    <img src={elementos}/>
                                    <span>Elementos</span>
                                </div>
                                <div className="box">
                                    <img src={alinhar}/>
                                    <span>Alinhamento</span>
                                </div>
                                <div className="box" style={{ borderRight: "none"}}>
                                    <img src={anotar}/>
                                    <span>Anotação</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>Continuar</button>
                </div>
            </div>
        </>
    )
}

export default Exposicao