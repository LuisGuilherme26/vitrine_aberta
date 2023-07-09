import Casa_img from "../media/casa.png"

const Samurai = () => {

    return (
        <div className="Samurai">
            <h1>Uma bela casinha samurai</h1>
            <div className="samu-body">
                <img src={Casa_img}  />
                <span>Nessa atividade eu resolvi fazer um cenário de filme antigo japonês sobre samurais, não é de nenhum filme específico, mas sim o estereotipo das obras. É possível ver alguns elementos, como a katana, um arco e flecha, e outras coisinhas pelo cenário.</span>
            </div>
        </div>
    )
}

export default Samurai