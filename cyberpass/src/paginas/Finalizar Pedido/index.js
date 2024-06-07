import React, { useState } from 'react';
import './FinalizarPedido.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

function FinalizarPedido() {
    const [step, setStep] = useState('entrega');
    const [termsAccepted, setTermsAccepted] = useState(false);

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
        } else if (step === 'sucesso') {
            setStep('validacao');
        } else if (step === 'erro') {
            setStep('validacao');
        }
    };

    const handleEditarClick = () => {
        setStep('entrega');
    };

    const handleEditar2Click = () => {
        setStep('pagamento');
    };

    const handleConfirmarClick = () => {
        if (termsAccepted) {
            setStep('sucesso');
        }
    };

    const handleConfirmarrClick = () => {
        if (termsAccepted) {
            setStep('erro');
        }
    };

    const handleCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
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
                    ) : step === 'validacao' ? (
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
                                    <h3>Entrega</h3>
                                    <p><strong>Nome:</strong> Guilherme Franco</p>
                                        <p><strong>CPF:</strong> 111.111.111-11</p>
                                        <p><strong>Email:</strong> emaillegal@gmail.com</p>
                                        <p><strong>Telefone:</strong> (41) 99999-9999</p>
                                        <p><strong>Endereço:</strong> Rua Dos Bobos, 0</p>
                                        <p><strong>Cidade/UF:</strong> Araucária, PR</p>
                                    <button className="voltar-button" onClick={handleEditarClick}>Editar</button>
                                </div>
                                <div className="validacao-dados">
                                    <h3>Pagamento</h3>
                                    <p><strong>Forma: </strong>Cartão </p>
                                    <p><strong>Total: </strong>R$ 250,00</p>
                                    <p><strong>Cartão: </strong>XXXX XXXX XXXX 1111</p>
                                    <p><strong>Validade: </strong>11/29</p>
                                    <p><strong>Parcelas: </strong>1x R$ 250,00</p>
                                    <button className="voltar-button" onClick={handleEditar2Click}>Editar</button>
                                </div>
                                <div className="validacao-termos">
                                    <label>
                                        <input type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} />
                                        Eu aceito os termos e condições
                                    </label>
                                </div>
                                <button className="continuar" onClick={handleConfirmarClick}>Confirmar</button>
                            </div>
                        </div>
                    ) : step === 'sucesso' ? (
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
                                <div className="sucesso-container">
                                    <h3>Pedido #1923</h3>
                                    <img src="/imagens/sucesso.png" alt="Sucesso" />
                                    <p><strong>Pedido Aprovado!</strong></p>
                                    <p>Sua nota fiscal e ingressos serão enviados por email, caso prefira
                                        é possível imprimir os ingressos em detalhes do pedido
                                    </p>
                                </div>
                            </div>
                            <button className="continuar" onClick={handleConfirmarrClick}>Tela de Erro</button>
                        </div>

                    ) : step === 'erro' ? (    
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
                                <div className="sucesso-container">
                                    <h3>Pedido #1923</h3>
                                    <img src="/imagens/erro.png" alt="Sucesso" />
                                    <p><strong>Pedido Negado!</strong></p>
                                    <p>Houve uma falha no pagamento do pedido, por gentileza
                                        volte para a tela de Pagamento e verifique se os dados
                                        estão corretos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    ) : null}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FinalizarPedido;
