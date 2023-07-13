import video from "../media/Madoka.mp4"

const Garota = () => {

    return(
        <div className="Garota">
            <h1>Video de garotas mágicas</h1>
            <video width="100%" controls>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Garota