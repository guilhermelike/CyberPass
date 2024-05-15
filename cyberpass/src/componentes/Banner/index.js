import './Banner.css'
import React, { useState } from 'react';

function Banner(){

    const [showModal, setShowModal] = useState(false);

    const handleUserIconClick = () => {
        setShowModal(!showModal); 
    };



    return(
        <header className="banner">
        <div className='header-pai'>
           <div className='titulo'><h2>Cyber</h2><h2 className='pass'>Pass</h2></div>
            <div className='header-meio'>
                <div>
                    <a href='#'><h4>Campeonatos</h4></a> 
                </div>
                <div>
                <a href='#'><h4>Eventos</h4></a> 
                </div>
                <div>
                <a href='#'><h4>Cidades</h4></a> 
                </div>
            </div>

            <div className='icones'>
                <div className='coluna'>
                    <div className='linha'>
                <div className='icones-esquerda'>
                    <div className='user' onClick={handleUserIconClick}>
                        <a href="#" className='userlink'><img src='imagens/user.png'></img></a>
                    </div>
                    <div className='cart'>
                        <a href="#" className='cartlink'><img src='imagens/cart.png'></img></a>
                    </div>
                </div>

                <div className='icones-direita'>
                    <div className='brasil'>
                        <a href="#" className='brasilink'><img src='imagens/brasil.png'></img></a>
                    </div>
                    <div className='eua'>
                        <a href="#" className='eualink'><img src='imagens/eua.png'></img></a>
                    </div>
                </div>
                </div>
                <div className='botao'>
                    <button className='botaolink'>Acessibilidade</button></div>
                </div>
                
            </div>
        </div>


        {/* Modal */}
        {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h7 style={{ fontWeight: 'bold' }}><label htmlFor="username" style={{ color: 'black' }}>Usuário:</label></h7>
                        <input type="text" id="username" className="input-field" />
                        <h7 style={{ fontWeight: 'bold' }}><label htmlFor="password" style={{ color: 'black' }}>Senha:</label></h7>
                        <input type="password" id="password" className="input-field" />
                        <button className="button">Log in</button>
                        <h5 style={{ color: 'black' }}>Não possui uma conta? <a href="#" style={{ color: '#FF005C' }}>Cadastre-se</a></h5>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Banner