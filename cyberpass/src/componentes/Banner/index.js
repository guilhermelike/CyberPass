import './Banner.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    const [showModal, setShowModal] = useState(false);
    const [showAccessibility, setShowAccessibility] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    const handleUserIconClick = () => {
        setShowModal(!showModal);
    };

    const handleAccessibilityClick = () => {
        setShowAccessibility(!showAccessibility);
    };

    const handleCartIconClick = () => {
        setShowCartModal(!showCartModal);
    };

    return (
        <header className="banner">
            <div className='header-pai'>
                <div className='titulo'>
                    <Link to="/" style={{color: 'white', textDecoration: 'none', display: 'flex', flexDirection: 'row', fontSize:'20px'}}>
                        <h2 style={{fontWeight: '300'}}>Cyber</h2><h2 className='pass'>Pass</h2>
                    </Link>
                </div>
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
                                    <a href="#" className='userlink'><img src='imagens/user.png' alt="User Icon"></img></a>
                                </div>
                                <div className='cart' onClick={handleCartIconClick}>
                                    <a href="#" className='cartlink'><img src='imagens/cart.png' alt="Cart Icon"></img></a>
                                </div>
                            </div>

                            <div className='icones-direita'>
                                <div className='brasil'>
                                    <a href="#" className='brasilink'><img src='imagens/brasil.png' alt="Brazil Flag"></img></a>
                                </div>
                                <div className='eua'>
                                    <a href="#" className='eualink'><img src='imagens/eua.png' alt="USA Flag"></img></a>
                                </div>
                            </div>
                        </div>
                        <div className='botao'>
                            <button className='botaolink' onClick={handleAccessibilityClick}>Acessibilidade</button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h7 style={{ fontWeight: 'bold' }}><label htmlFor="email" style={{ color: 'black' }}>Email:</label></h7>
                        <input type="text" id="email" className="input-field" />
                        <h7 style={{ fontWeight: 'bold' }}><label htmlFor="password" style={{ color: 'black' }}>Senha:</label></h7>
                        <input type="password" id="password" className="input-field" />
                        <button className="button">Log in</button>
                        <h5 style={{ color: 'black', marginBottom: '0', marginTop: '10px' }}>Não possui uma conta?<Link to="cadastro" style={{ color: '#FF005C' }}>Cadastre-se</Link></h5>
                    </div>
                </div>
            )}

            {showCartModal && (
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        <div className="cart-item">
                            <img src="imagens/iemrio.png" alt="Item Image" />
                            <div className="cart-item-info">
                                <p style={{ fontWeight: 'bold', color: 'black' }}>IEM Rio 2024</p>
                                <p style={{ color: 'black' }}>Rio de Janeiro</p>
                                <p style={{ color: 'black' }}>11 de outubro</p>
                                <p style={{ color: 'black' }}>1 ingresso - 150,00</p>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="cart-item">
                            <img src="imagens/iemrio.png" alt="Item Image" />
                            <div className="cart-item-info">
                                <p style={{ fontWeight: 'bold', color: 'black' }}>IEM Rio 2024</p>
                                <p style={{ color: 'black' }}>Rio de Janeiro</p>
                                <p style={{ color: 'black' }}>11 de outubro</p>
                                <p style={{ color: 'black' }}>1 ingresso - 150,00</p>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="cart-total-timer">
                            <div className="cart-total">
                                <p style={{ color: 'black' }}>Total: <span className="total-amount">300,00</span></p>
                                <p style={{ color: 'grey', width: '130px' }}>O preço não inclui possíveis taxas.</p>
                            </div>
                            <div className="timer">
                                <p>⏰ 20:00 Minutos</p>
                            </div>
                        </div>
                        <button className="go-to-cart">Ir para o carrinho</button>
                    </div>
                </div>
            )}

            {showAccessibility && (
                <div className="accessibility-modal">
                    <div className="accessibility-content">
                        <div className="accessibility-header">
                            <h2>Acessibilidade</h2>
                            <button className="close" onClick={handleAccessibilityClick}>&times;</button>
                        </div>
                        <div className="accessibility-body">
                            <div className="font-size-controls">
                                <button className="font-size-button">-</button>
                                <span>Tamanho da Fonte</span>
                                <button className="font-size-button">+</button>
                            </div>
                            <button className="contrast-button auto-contrast">Auto Contraste</button>
                            <button className="user-manual-button">Manual do Usuário</button>
                        </div>
                        <div className="accessibility-footer">
                            <img src="imagens/brasil.png" alt="Brazil Flag" className="popup-flag" />
                            <img src="imagens/eua.png" alt="USA Flag" className="popup-flag" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Banner;
