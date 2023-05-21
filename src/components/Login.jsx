import Logo from "../media/logo.png"

const Login = () =>{
    return(
        <>
            <div className="Container">
                <div className="Logo-box">
                    <img src={Logo}/>
                </div>
                <div className="Login-content">
                <h1>Entrar</h1>
                    <div className="content-body">
                        <div className="box">
                            <label>Nome de usuário</label>
                            <input type="text"  placeholder="Usuario"/>
                        </div>
                        <div className="box">
                            <label>Senha</label>
                            <input type="password" placeholder="Senha"/>
                            <a href="">Esqueci minha senha</a>
                        </div>
                    </div>
                    <div className="content-footer">
                        <button>entrar</button>
                        <div>
                            <span>Ainda não se cadastrou?</span>
                            <a href="#">Crie uma conta</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login