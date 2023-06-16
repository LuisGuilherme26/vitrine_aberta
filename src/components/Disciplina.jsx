import Casa_img from "../media/casa.png"
import {FaUserAlt} from "react-icons/fa"

const Disciplina = () => {
    return (
        <div className="Disciplina">
            <div className="disc">
                <h2>MODELAGEM TRIDIMENSIONAL</h2>
                <div>
                    <button>Filtrar</button>
                    <button>Data</button>
                </div>
            </div>
            <div className="trab">
                <h2>TRABALHOS</h2>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "nowrap" }}>
                    <div className="trab-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                        </div>
                        <div className="content">
                            <img src={Casa_img} />
                            <span style={{ marginTop: "10px" }}>
                                Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="trab-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                        </div>
                        <div className="content">
                            <img src={Casa_img} />
                            <span style={{ marginTop: "10px" }}>
                                Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="trab-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                        </div>
                        <div className="content">
                            <img src={Casa_img} />
                            <span style={{ marginTop: "10px" }}>
                                Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="trab-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                        </div>
                        <div className="content">
                            <img src={Casa_img} />
                            <span style={{ marginTop: "10px" }}>
                                Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aut">
                <h2>AUTORES</h2>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "nowrap" }}>
                    <div className="aut-box">
                        <h3>Gisele</h3>
                        <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px"}}/>
                        <button>Ver perfil</button>
                    </div>
                    <div className="aut-box">
                        <h3>Gisele</h3>
                        <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px"}}/>
                        <button>Ver perfil</button>
                    </div>
                    <div className="aut-box">
                        <h3>Gisele</h3>
                        <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px"}}/>
                        <button>Ver perfil</button>
                    </div>
                    <div className="aut-box">
                        <h3>Gisele</h3>
                        <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px"}}/>
                        <button>Ver perfil</button>
                    </div>
                </div>
            </div>
            {/* <div className="orange-bar"></div> */}
        </div>
    )
}

export default Disciplina