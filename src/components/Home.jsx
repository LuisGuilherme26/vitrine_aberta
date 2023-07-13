import { useEffect, useState } from "react"
import iconAnim from "../media/iconanim.svg"
import iconEdi from "../media/iconedi.svg"
import iconIlus from "../media/iconilus.svg"
import iconMod from "../media/iconmod.svg"
import iconTudo from "../media/icontudo.svg"
import axios from "axios"
import Card from "./Card"

const Home = () => {

    const [workArray, setWorkArray] = useState([])
    const [filter, setFilter] = useState("Tudo")

    useEffect(
        () => {
            axios.get("http://localhost:3001/works/listar")
                .then(
                    ({ data }) => {
                        let cards = handleFilter(data, filter);

                        setWorkArray(cards)
                    }
                )
                .catch(e => console.log(e))
        },
        [filter]
    )

    function handleFilter(data, filter) {
        let newArray = []

        if (filter == "Tudo") {
            for (let i = 0; i < data.length; i++) {
                newArray.push(<Card titulo={data[i].titulo} userId={data[i].usuario} desc={data[i].desc} capa={data[i].capa} />)
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].cadeira === filter) {
                    newArray.push(<Card titulo={data[i].titulo} userId={data[i].usuario} desc={data[i].desc} capa={data[i].capa} />)
                }
            }
        }

        return newArray
    }

    return (
        <>
            <div className="container" style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "7%" }}>
                <div className="conteudo" style={{ width: "80%" }}>
                    <div className="Filtro">
                        <button className="active filtro-btn" id="publi-btn">Publicações recentes
                            <div className="publi-drop">
                                <ul>
                                    <button style={{ border: "transparent", backgroundColor: "white", cursor: "pointer"}} onClick={() => setFilter("Tudo")}><li> <img src={iconTudo} alt="" />Tudo</li></button>
                                    <button style={{ border: "transparent", backgroundColor: "white", cursor: "pointer"}} onClick={() => setFilter("Modelagem")}><li> <img src={iconMod} alt="" />Modelos 3D</li></button>
                                    <button style={{ border: "transparent", backgroundColor: "white", cursor: "pointer"}} onClick={() => setFilter("Animacao")}><li> <img src={iconAnim} alt="" />Animações</li></button>
                                    <button style={{ border: "transparent", backgroundColor: "white", cursor: "pointer"}} onClick={() => setFilter("Ilustração")}><li> <img src={iconIlus} alt="" />Ilustrações</li></button>
                                    <button style={{ border: "transparent", backgroundColor: "white", cursor: "pointer"}} onClick={() => setFilter("Edicao")}><li> <img src={iconEdi} alt="" />Edição de Imagens</li></button>
                                </ul>
                            </div>
                        </button>
                        <button className="filtro-btn">Publicações populares</button>
                        <button className="filtro-btn">Recomendados</button>
                    </div>
                    <div className="publicacoes">
                        <div className="publi-cards">
                            {workArray}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home