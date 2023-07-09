import video from "../media/halloween.mp4"

const Halloween = () => {

    return(
        <div className="Halloween">
            <h1>Distant halloween</h1>
            <video width="750" controls>
                <source src={video} type="video/mp4" />
            </video>
            <span>
            Um animação de uma garotinha que gostaria de aproveitar seu feriado favorito, o Halloween. Mas ela acaba encontrando visitantes inesperados
            </span>
        </div>
    )
}

export default Halloween