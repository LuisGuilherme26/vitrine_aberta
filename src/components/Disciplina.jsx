import Casa_img from "../media/casa.png"
import {FaUserAlt} from "react-icons/fa"
import {MDCCheckbox} from "@material/checkbox"

const Disciplina = () => {
    return (
        <div className="Disciplina">
            <div className="disc">
                <h2>MODELAGEM TRIDIMENSIONAL</h2>
                <div>
                    <button className="btn-filtros">Filtrar 
                        <div className="filtro-drop">
                            <div className="drop">
                                <div className="drop-org">
                                    <div className="drop-data-envio">
                                        <ul>
                                            <li><h4>Data de envio</h4></li>
                                            <li>Hoje</li>
                                            <li>Esta semana</li>
                                            <li>Últimos 15 dias</li>
                                            <li>Este mês</li>
                                        </ul>
                                    </div>
                                    <div className="drop-ordenar">
                                        <ul>
                                            <li><h4>Ordenar por</h4></li>
                                            <li>Mais antigo</li>
                                            <li>Mais recente</li>
                                        </ul>
                                    </div>
                                    <div className="drop-midia">
                                        <ul>
                                            <li>
                                                <h4>Mídia</h4>
                                            </li>
                                           <li><input type="checkbox"
                                            class="mdc-checkbox__native-control"
                                            id="checkbox-1"/> PDFs</li>

                                            <li> <input type="checkbox"
                                            class="mdc-checkbox__native-control"
                                            id="checkbox-2"/>Vídeos</li>

                                            <li> <input type="checkbox"
                                            class="mdc-checkbox__native-control"
                                            id="checkbox-3"/>Imagens</li>

                                            <li> <input type="checkbox"
                                            class="mdc-checkbox__native-control"
                                            id="checkbox-4"/>Todos os tipos</li>
                                        </ul>
                                    </div>
                                    <div className="drop-pesquisa">
                                        <input type="text" placeholder="Buscar por palavras-chave..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn-data">Data
                        <div className="data-drop">
                            <ul>
                                <li>2023</li>
                                <li>2022</li>
                                <li>2021</li>
                                <li>2020</li>
                                <li>2019</li>
                                <li>2018</li>
                                <li>2017</li>
                                <li>2016</li>
                                <li>2015</li>
                            </ul>
                        </div>
                    </button>
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