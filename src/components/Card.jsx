import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Card = ({ userId, titulo, desc, capa }) => {

    const [user, setUser] = useState();
    const [link, setLink] = useState();

    useEffect(
        () => { 
            axios.get("http://localhost:3001/users/recuperar/" + userId)
                .then(
                    (res) => {
                        setUser(res.data.nome)
                    }
                )
                .catch(e => console.log(e))

            switch (capa) {
                case "casa.png":
                    setLink("/samurai")
                    break;
                case "halloween.png":
                    setLink("/halloween")
                    break;
                case "mulher.png":
                    setLink("/mulher")
                    break;
                case "garota.png":
                    setLink("/garota")
                    break;
            }
        },
        [userId]
    )

    return (
        <div className="publi-card">
            <div className="publi-card-header">
                <div className="publi-card-titulo">
                    <h3>{titulo}</h3>
                    <h4>{user}</h4>
                </div>
                <span style={{ fontWeight: "bold" }}>^</span>
            </div>
            <div className="publi-card-body">
                <img src={require(`../media/${capa}`)} />
                <span style={{ marginTop: "10px", marginBottom: "15px" }}>
                    {desc}
                </span>
            </div>
            <Link to={link}><button>Ver mais</button></Link>
        </div>
    )
}

export default Card