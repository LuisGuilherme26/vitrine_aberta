import Logo_h from "../media/logo_h.png"

const Footer = () => {
    return (
        <footer>
            <div className="f-content">
                <div className="f-box">
                    <img src={Logo_h}/>
                </div>
                <div className="f-box">
                    <h2>Home</h2>
                    <p>Publicações recentes</p>
                    <p>Publicações populares</p>
                    <p>Recomendados</p>
                </div>
                <div className="f-box">
                    <h2>Disciplinas</h2>
                    <p>Modelagem 3d</p>
                    <p>Edição Digital de Imagem</p>
                    <p>Multimídia</p>
                </div>
                <div className="f-box">
                    <h2>Sobre</h2>
                    <p>Vitrine Aberta</p>
                    <p>Uso e licença</p>
                    <p>Software livre</p>
                </div>
            </div>
            <span style={{ position: "absolute", bottom: "25px", left: "45px", color: "grey", fontSize: "17px"}}>© 2023 Vitrine Aberta. Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer