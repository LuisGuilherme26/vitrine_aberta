import { useEffect, useState } from "react"
import axios from "axios"
import Casa_img from "../media/casa.png"
import { Link } from "react-router-dom"

const Card = ({userId, titulo, desc, cadeira}) => {
    // handleUser(data[i].usuario)
    // let capa = createElement('img', { src: Casa_img })
    // let span_desc = createElement('span', { style: { marginTop: "10px" } }, data[i].desc)
    // let span_icon = createElement('span', { style: { fontWeight: "bold" } }, "^")
    // let div_card_titulo = createElement('div', { className: "publi-card-titulo" }, React.createElement('h3', null, data[i].titulo), React.createElement('h4', null, userWork))
    // let div_card_header = createElement('div', { className: "publi-card-header" }, div_card_titulo, span_icon)
    // let div_card_body = createElement('div', { className: "publi-card-body" }, capa, span_desc)
    // let div_card = createElement('div', { className: "publi-card" }, div_card_header, div_card_body)
const Card = ({ userId, titulo, desc, capa }) => {

    const [user,setUser] = useState();
    const [user, setUser] = useState();
    const [link, setLink] = useState();

    useEffect(
        ()=>{
        () => { 
            axios.get("http://localhost:3001/users/recuperar/" + userId)
            .then(
                (res) => {
                    setUser(res.data.nome)
                }
            )
            .catch(e => console.log(e))
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
        []
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
                <img src={Casa_img} />
                <span style={{ marginTop: "10px" }}>
                {desc}
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