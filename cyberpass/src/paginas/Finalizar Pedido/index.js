import React, { useState } from 'react';
import './FinalizarPedido.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

function FinalizarPedido() {
    const [step, setStep] = useState('entrega');

    const handleContinuarClick = () => {
        setStep('pagamento');
    };

    const handleContinuaClick = () => {
        setStep('validacao');
    };

    const handleVoltarClick = () => {
        if (step === 'pagamento') {
            setStep('entrega');
        } else if (step === 'validacao') {
            setStep('pagamento');
        }
    };

    return (
        <>
            <Banner />
            <div className="meus-pedidos-container">
                <div className="welcome-message">
                    <span className="welcome-text">Bem vindo, </span>
                    <span className="user-name">Guilherme</span>
                </div>
                <div className="pedido-entrega-wrapper">
                    <div className="detalhes-pedido">
                        <button className="voltar-button" onClick={handleVoltarClick}>← Voltar</button>
                        <h2>Detalhes do pedido:</h2>
                        <div className="pedido-info">
                            <img src="/imagens/iemrio.png" alt="Event" className="event-image" />
                            <div className="evento-detalhes">
                                <p><strong>IEM Rio 2024</strong><br /><br />Rio de Janeiro<br /><br />Jeunesse Arena<br /><br />11, 12, 13 de Out</p>
                            </div>
                        </div>
                        <div className="pedido-preco">
                            <p className="item-descricao">1x Meia-Entrada - Plateia</p>
                            <p className="valor-item">Valor: <span className="valor">250,00</span></p>
                            <p className="tempo-restante">
                                Tempo restante: 
                                <span className="tempo-contagem">
                                    <span className="tempo-icon"></span> 
                                    20:00 Minutos
                                </span>
                            </p>
                            <div className="separator"></div>
                            <p className="total-preco">Total: <span className="valor-total">250,00</span></p>
                        </div>
                    </div>
                    {step === 'entrega' ? (
                        <div className="entrega-info">
                            <div className="status-bar">
                                <div className="status-item active">
                                    <img src="/imagens/entrega.png" alt="Entrega" />
                                    <span>Entrega</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/pagamento.png" alt="Pagamento" />
                                    <span>Pagamento</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/validacao.png" alt="Validação" />
                                    <span>Validação</span>
                                </div>
                            </div>
                            <div className="entrega-dados">
                                <div className="entrega-item">
                                    <label>Nome:</label>
                                    <p>Guilherme Franco</p>
                                </div>
                                <div className="entrega-item">
                                    <label>CPF:</label>
                                    <p>111.111.111-11</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Telefone:</label>
                                    <p>(41) 99999-9999</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Endereço:</label>
                                    <p>Rua dos Bobos</p>
                                </div>
                                <div className="entrega-item">
                                    <label>CEP:</label>
                                    <p>xxxxxx-xxx</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Bairro:</label>
                                    <p>Cachoeira</p>
                                </div>
                                <div className="entrega-item">
                                    <label>UF:</label>
                                    <p>PR</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Complemento:</label>
                                    <p>Apartamento</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Cidade:</label>
                                    <p>Araucária</p>
                                </div>
                                <div className="entrega-item">
                                    <label>País:</label>
                                    <p>Brasil</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Email:</label>
                                    <p>emaillegal@gmail.com</p>
                                </div>
                                <div className="entrega-item">
                                    <label>Pronome:</label>
                                    <p>Ele</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="editar-dados">Editar Dados</button>
                                <button className="continuar" onClick={handleContinuarClick}>Continuar</button>
                            </div>
                        </div>
                    ) : step === 'pagamento' ? (
                        <div className="pagamento-info">
                            <div className="status-bar">
                                <div className="status-item">
                                    <img src="/imagens/entrega.png" alt="Entrega" />
                                    <span>Entrega</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item active">
                                    <img src="/imagens/pagamento.png" alt="Pagamento" />
                                    <span>Pagamento</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/validacao.png" alt="Validação" />
                                    <span>Validação</span>
                                </div>
                            </div>
                            <div className="form-group">
                                    <label>Forma:</label>
                                    <select>
                                        <option>Cartão - Até 6 vezes</option>
                                    </select>
                                </div>
                            <div className="pagamento-form">
                            
                                <div className="form-group">
                                    <label>Número:</label>
                                    <input type="text" placeholder="Número do cartão" />
                                </div>
                                <div className="form-group">
                                    <label>Nome:</label>
                                    <input type="text" placeholder="Nome do titular" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Data:</label>
                                        <input type="text" placeholder="Vencimento" />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV:</label>
                                        <input type="text" placeholder="CVV" />
                                    </div>
                                    <div className="form-group">
                                    <label>Parcelas:</label>
                                    <select>
                                        <option>Selecione</option>
                                    </select>
                                </div>
                                </div>
                                <button className="continuar" onClick={handleContinuaClick}>Continuar</button>
                            </div>
                        </div>
                    ) : (
                        <div className="validacao-info">
                            <div className="status-bar">
                                <div className="status-item">
                                    <img src="/imagens/entrega.png" alt="Entrega" />
                                    <span>Entrega</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/pagamento.png" alt="Pagamento" />
                                    <span>Pagamento</span>
                                </div>
                                <div className="status-item">
                                    <img src="/imagens/seta.png" alt="Seta" />
                                </div>
                                <div className="status-item active">
                                    <img src="/imagens/validacao.png" alt="Validação" />
                                    <span>Validação</span>
                                </div>
                            </div>
                            <div className="validacao-form">
                                <div className="validacao-dados">
                                    <div className="entrega">
                                        <h3>Entrega: <button className="voltar-button">Editar</button></h3>
                                        <p><strong>Nome:</strong> Guilherme Franco</p>
                                        <p><strong>CPF:</strong> 111.111.111-11</p>
                                        <p><strong>Email:</strong> emaillegal@gmail.com</p>
                                        <p><strong>Telefone:</strong> (41) 99999-9999</p>
                                    </div>
                                    <div className="pagamento">
                                        <h3>Pagamento: <button className="voltar-button">Editar</button></h3>
                                        <p><strong>Cartão de Crédito:</strong> xxxx xxxx xxxx 1234</p>
                                        <p><strong>Parcelas:</strong> 1x de 250,00</p>
                                    </div>
                                </div>
                                <div className="App">
                                <div className="topping">
                                    <input type="checkbox" id="topping" name="topping" value="Paneer" /><strong>Concordo com os Termos de Uso</strong>
                                </div>
                                </div>
                                <div className="actions">
                                    <button className="confirmar">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FinalizarPedido;
