import Logo_laranja from "../media/logo_laranja.png"
import Casa_img from "../media/casa.png"
import { FiArrowUpRight } from 'react-icons/fi'

const Home = () => {
    return (
        <>
            <div className="Categoria">
                <ul>
                    <div className="bookmark"></div>
                    <li className="active">Tudo</li>
                    <li>Animações</li>
                    <li>3D</li>
                    <li>Ilustrações</li>
                    <li>Edição de Imagem</li>
                </ul>
            </div>
            <div className="bemVindo">
                <div style={{ alignItems: "center"}}>
                    <img src={Logo_laranja} style={{width: "50%"}} />
                </div>
                <div style={{marginBottom: "50px"}}>
                    <h2>Lorem Ipsum</h2>
                    <span>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </span>
                </div>
            </div>
            <div className="Filtro">
                <button className="active">Publicações recentes</button>
                <button>Publicações populares</button>
                <button>Recomendados</button>
            </div>
            <div className="Publicacao">
                <h2 style={{fontSize: "30px"}}>Publicações Recentes</h2>
                <div className="publi-row">
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="publi-row">
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                    <div className="publi-box">
                        <div className="titulo">
                            <h2>Uma bela casinha samurai</h2>
                            <h3>Wermyson Pinheiro</h3>
                            <FiArrowUpRight style={{ position: "absolute", width: "2rem", height: "2rem", right:"0", top: "0", cursor: "pointer"}}/>
                        </div>
                        <div className="content">
                            <img src={Casa_img}/>
                            <span style={{marginTop: "10px"}}>
                            Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home