import Casa_img from "../media/casa.png"
import Janela_img from "../media/home-inicio-img.svg"

const Home = () => {
    return (
        <>
            <div className="container" style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"15%"}}>
                <div className="conteudo" style={{width:"80%"}}>
                    <div className="Filtro">
                        <button className="active" id="publi-btn">Publicações recentes
                            <div className="publi-drop">
                                <ul>
                                    <li>Tudo</li>
                                    <li>Modelagem 3D</li>
                                    <li>Animações</li>
                                    <li>Ilustrações</li>
                                    <li>Edição de Imagens</li>
                                </ul>
                            </div>
                        </button>
                        <button>Publicações populares</button>
                        <button>Recomendados</button>
                    </div>
                    <div className="publicacoes">
                       <div className="publi-cards">
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                            <div className="publi-card">
                                <div className="publi-card-header">
                                    <div className="publi-card-titulo">
                                        <h3>Uma bela casinha samurai</h3>
                                        <h4>Wermyson Pinheiro</h4>
                                    </div>
                                    <span style={{fontWeight:"bold"}}>x</span>
                                </div>
                                <div className="publi-card-body">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                       </div>
                    </div>
                    {/* <div className="Publicacao">
                        <h2 style={{fontSize: "30px", marginLeft: "30px"}}>Publicações Recentes</h2>
                        <div className="publi-row">
                            <div className="publi-box">
                                <div className="titulo">
                                    <h2>Uma bela casinha samurai</h2>
                                    <h3>Wermyson Pinheiro</h3>
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
                                </div>
                                <div className="content">
                                    <img src={Casa_img}/>
                                    <span style={{marginTop: "10px"}}>
                                    Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home