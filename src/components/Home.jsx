import Casa_img from "../media/casa.png"
import Janela_img from "../media/home-inicio-img.svg"
import iconAnim from "../media/iconanim.svg"
import iconEdi from "../media/iconedi.svg"
import iconIlus from "../media/iconilus.svg"
import iconMod from "../media/iconmod.svg"
import iconTudo from "../media/icontudo.svg"

const Home = () => {
    return (
        <>
            <div className="container" style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"7%"}}>
                <div className="conteudo" style={{width:"80%"}}>
                    <div className="Filtro">
                        <button className="active" id="publi-btn">Publicações recentes
                            <div className="publi-drop">
                                <ul>
                                    <li> <img src={iconTudo} alt="" />Tudo</li>
                                    <li> <img src={iconMod} alt="" />Modelagem 3D</li>
                                    <li> <img src={iconAnim} alt="" />Animações</li>
                                    <li> <img src={iconIlus} alt="" />Ilustrações</li>
                                    <li> <img src={iconEdi} alt="" />Edição de Imagens</li>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                                    <span style={{fontWeight:"bold"}}>^</span>
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
                </div>
            </div>
        </>
    )
}

export default Home