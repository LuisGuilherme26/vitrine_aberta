import { FaUserAlt } from "react-icons/fa"

const Autor = ({nome}) => {

    return (
        <div className="aut-box">
            <h3>{nome}</h3>
            <FaUserAlt style={{ color: "grey", backgroundColor: "#fff", fontSize: "190px", marginTop: "20px" }} />
            <button>Ver perfil</button>
        </div>
    )
}

export default Autor