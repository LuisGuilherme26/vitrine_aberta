import Logo_h from "../media/logo_h.png"
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowUp } from 'react-icons/io'
// import Login from './Login'

const Navbar = () =>{
    return(
        <>
            <nav>
                <div className="nav-box" style={{ width: "25%" }}>
                    <img src={Logo_h}/>
                </div>
                <div className="nav-box" style={{ width: "40%" }}>
                    <ul>
                        <li>Home</li>
                        <li>Disciplinas <IoIosArrowUp style={{ fontSize: "18px" }}/></li>
                        <li>Perfis</li>
                        <li>Bate-papo</li>
                        <li>Sobre</li>
                    </ul>
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