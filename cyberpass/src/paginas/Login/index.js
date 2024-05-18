import './Login.css'
import { Link } from 'react-router-dom';

function Login(){
    return (
        <div className='telainteira'>
            <div className='esquerda'></div>
            <div className='direita'>
                <div class="central">
                    <div className='titulo-login'>
                       <Link to="/" style={{color: 'white', textDecoration: 'none', display: 'flex', flexDirection: 'row', fontSize:'30px'}}>
                        <h2 style={{fontWeight: '300'}}>Cyber</h2><h2 className='pass'>Pass</h2>
                        </Link>
                    </div>
                        <div className='subtitulo-login'>
                            <h3>Entre com a sua conta.</h3>
                        </div>
                        <div className="login">
                            <h7 style={{ fontWeight: 'bold' }}><label htmlFor="email" style={{ color: 'white' }}>Email:</label></h7>
                            <input type="text" id="email" className="input-field-telalogin" />
                            <h7 style={{ fontWeight: 'bold' }}><label htmlFor="password" style={{ color: 'white' }}>Senha:</label></h7>
                            <input type="password" id="password" className="input-field-telalogin" />
                            <h5 style={{ color: 'white', marginBottom: '0', marginTop: '10px', textAlign: 'right' }}>Esqueceu sua senha?<Link to="login" style={{color:'#FF005C'}}> Recuperar!</Link></h5>
                            <div class="botaologin">
                                <button className="botaotelalogin">Login</button>
                                <h5 style={{ color: 'white', marginBottom: '0', marginTop: '10px' }}>Não possui uma conta?<Link to="/cadastro" style={{color:'#FF005C'}}> Cadastre-se</Link></h5>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;