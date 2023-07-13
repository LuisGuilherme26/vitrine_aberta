import { useState } from "react";
import Logo from "../media/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { nome, email, senha };

        axios.post("http://localhost:3001/users/registrar", newUser)
            .then(
                (res) => {
                    console.log(res.data);
                    alert(`Usuário criado com sucesso!`);
                    navigate("/");
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="Container cad">
                <div className="Logo-box">
                    <img src={Logo} />
                </div>
                <div className="Cad-content">
                    <form onSubmit={handleSubmit}>
                        <div className="content-body">
                            <h1>Criar Conta</h1>
                            <div className="cadastro-formulario">
                                <label> Nome de usuário</label>
                                <input className="input-login" type="text" placeholder="Usuário" onChange={(event) => setNome(event.target.value)}/>
                            </div>
                            <div className="cadastro-formulario">
                                <label>Email</label>
                                <input className="input-login" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="cadastro-formulario">
                                <label>Senha</label>
                                <input className="input-login" type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)} />
                            </div>
                        </div>
                        <div className="content-footer">
                            <button type="submit" style={{ width: "100%" }}>Criar conta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro