import Logo from "../media/logo.png"

const Cadastro = () =>{
    return(
        <>
            <div className="Container">
                <div className="Logo-box">
                    <img src={Logo}/>
                </div>
                <div className="Cad-content">
                    <div className="content-body">
                        <h1>Criar Conta</h1>
                        <div className="box">
                            <label>Nome de usuário</label>
                            <input type="text"  placeholder="Usuario"/>
                        </div>
                        <div className="box">
                            <label>Email</label>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="box">
                            <label>Senha</label>
                            <input type="password" placeholder="Senha"/>
                        </div>
                    </div>
                    <div className="content-footer">
                        <button>Criar conta</button>
                        <div>
                            <span>Já possui uma conta?</span>
                            <a href="#">Faça login</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cadastro