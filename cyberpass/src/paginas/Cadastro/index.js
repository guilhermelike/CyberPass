import './Cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro(){
    return(
        <div className='telainteira'>
            <div className='esquerda'></div>
            <div className='direita'>
                <div class="central" style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                    <div className='titulo-cadastro'>
                       <Link to="/" style={{color: 'white', textDecoration: 'none', display: 'flex', flexDirection: 'row', fontSize:'30px'}}>
                        <h2 style={{fontWeight: '300'}}>Cyber</h2><h2 className='pass'>Pass</h2>
                        </Link>
                    </div>
                        <div className='subtitulo-cadastro'>
                            <h3>Faça parte da história.</h3>
                        </div>
                        <div className="cadastro" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="nome" style={{ color: 'white'}}>Nome:</label></h7>
                                    <input placeholder='Nome...' type="text" id="nome" className="input-field-telacadastro" style={{width: '250px'}}/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="sobrenome" style={{ color: 'white'}}>Sobrenome:</label></h7>
                                  <input placeholder='Sobrenome...' type="text" id="sobrenome" className="input-field-telacadastro" style={{width: '250px'}} />
                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h7 style={{ fontWeight: 'bold' }}><label htmlFor="email" style={{ color: 'white' }}>Email:</label></h7>
                            <input style={{marginBottom: '0'}} placeholder='Email...' type="text" id="email" className="input-field-telacadastro" />
                            </div>  

                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="datanasc" style={{ color: 'white'}}>Data de Nascimento:</label></h7>
                                    <input type="date" id="datanasc" className="input-field-telacadastro" style={{width: '250px'}}/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="sexo" style={{ color: 'white'}}>Sexo:</label></h7>
                                  <select id="sexo" className="input-field-telacadastro" style={{width: '277px'}} >
                                    <option value='1'>Masculino</option>
                                    <option value='2'>Feminino</option>
                                  </select>
                                </div>
                            </div>

                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="senha" style={{ color: 'white'}}>Senha:</label></h7>
                                    <input placeholder='Senha...' type="password" id="senha" className="input-field-telacadastro" style={{width: '250px'}}/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h7 style={{ fontWeight: 'bold' }}><label htmlFor="confirmasenha" style={{ color: 'white'}}>Confirmação da Senha:</label></h7>
                                  <input placeholder='Confirme a senha...' type="password" id="confirmasenha" className="input-field-telacadastro" style={{width: '250px'}} />
                                </div>
                            </div>

                            <div class="botaocadastro">
                                <button className="botaotelacadastro">Cadastro</button>
                                <h5 style={{ color: 'white', marginBottom: '0', marginTop: '10px' }}>Já possui uma conta?<Link to="/login" style={{color:'#FF005C'}}> Faça login</Link></h5>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;