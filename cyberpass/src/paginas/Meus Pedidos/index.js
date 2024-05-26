import React from 'react';
import './MeusPedidos.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

function MeusPedidos() {
    return (
        <>
            <Banner />
            <div className="meus-pedidos-container">
                <div className="welcome-message">
                    <span className="welcome-text">Bem vindo, </span>
                    <span className="user-name">Guilherme</span>
                </div>
            <header className="meus-pedidos-header">
                    <nav className="meus-pedidos-nav">
                        <ul>
                            <li><a href="#" className="active">Meus Pedidos</a></li>
                            <li><a href="#">Meus Dados</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="meus-pedidos-main">
                    <div className="pedido-card">
                        <div className="pedido-header">
                            <span className="pedido-id">777</span>
                            <span className="pedido-total">300,00</span>
                        </div>
                        <div className="separator"></div>
                        <div className="pedido-body">
                            <img src="/imagens/iemrio.png" alt="IEM Rio 2024" className="pedido-image"/>
                            <div className="pedido-details">
                                <p><strong>2x IEM Rio 2024</strong></p>
                                <p>10 de Outubro</p>
                                <p>12:00</p>
                                <p>Jeunesse Arena</p>
                            </div>
                        </div>
                    </div>
                </main>
                <main className="meus-pedidos-main">
                    <div className="pedido-card">
                        <div className="pedido-header">
                            <span className="pedido-id">778</span>
                            <span className="pedido-total">50,00</span>
                        </div>
                        <div className="separator"></div>
                        <div className="pedido-body">
                            <img src="/imagens/xxmarcelo.png" alt="IEM Rio 2024" className="pedido-image"/>
                            <div className="pedido-details">
                                <p><strong>2x Lan House xxmarcelo</strong></p>
                                <p>28 de Outubro</p>
                                <p>15:00</p>
                                <p>SEPT - UFPR</p>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>
            <Footer />
        </>
    );
}

export default MeusPedidos;
