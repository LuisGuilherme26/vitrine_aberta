import { useEffect, useState } from "react"
import axios from "axios";
import Autor from "./Autor";

const Autores = () => {

    const [autArray,setAutArray] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:3001/users/listar")
                .then(
                    ({ data }) => {
                        let autorArray = []

                        for(let i=0;i < data.length; i++){
                            autorArray.push(<Autor nome={data[i].nome}/>)

                        }

                        setAutArray(autorArray)
                    }
                )
                .catch(e => console.log(e))
        },
        []
    )

    return (
        <div className="aut">
            <h2>AUTORES</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "100%", alignItems: "center" }}>
                {autArray}
                {/* <div className="aut-box">
                    <h3>Gisele</h3>
                    <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px" }} />
                    <button>Ver perfil</button>
                </div>
                <div className="aut-box">
                    <h3>Gisele</h3>
                    <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px" }} />
                    <button>Ver perfil</button>
                </div>
                <div className="aut-box">
                    <h3>Gisele</h3>
                    <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px" }} />
                    <button>Ver perfil</button>
                </div> */}
            </div>
        </div>
    )
}

export default Autores