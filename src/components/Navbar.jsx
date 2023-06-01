import Logo_h from "../media/logo_h.png"
import { FaSearch } from 'react-icons/fa'

const Navbar = () =>{
    return(
        <>
            <nav>
                <div className="nav-box" style={{ width: "60%" }}>
                    <img src={Logo_h}/>
                    <ul>
                        <li>Home</li>
                        <li>Disciplinas</li>
                        <li>Perfis</li>
                        <li>Bate-papo</li>
                        <li>Sobre</li>
                    </ul>
                    <button style={{ background: "transparent", color: "#E4623E", border: "2px solid #E4623E", fontSize: "17px"}}>Expor Trabalho</button>
                </div>
                <div className="navbox" style={{ width: "25%", position: "relative"}}>
                    <input type="text" placeholder="Buscar"/>
                    <FaSearch  style={{ height: "1.5rem", width: "1.5rem", position: "absolute", top: "50%", left: "15px", padding: "4px",
                boxSizing: "border-box", transform: "translateY(-50%)"}}/>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar