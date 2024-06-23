import React from 'react';
import './VisuCampo.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

const VisualizarCampeonato = () => {
    return (
        <>
            <Banner />
            <div className="container">
                <h1 className="title">IEM Rio 2024</h1>
                <p className="subtitle">Presencie os melhores jogadores de counter-strike em busca do grande título!</p>
                <div className="ticket-options">
                    <button className="option-btn">Setor</button>
                    <button className="option-btn">Ingresso</button>
                    <button className="option-btn">Qtd</button>
                    <button className="option-btn">1 Ingresso por 400,00</button>
                </div>
            </div>
            <div className="info-container">
                <div className="info-section">
                    <div className="info">
                        <h2>Informações do campeonato</h2>
                        <p><strong>Local:</strong> Jeunesse Arena</p>
                        <p><strong>Data(s):</strong> 11, 12 e 13 de Outubro (2024)</p>
                        <p><strong>Abertura dos portões:</strong> 12:00</p>
                    </div>
                    <div className="values">
                        <h2>Valores (Inteira - Meia Entrada)</h2>
                        <p><strong>Plateia:</strong> 500 - 250</p>
                        <p><strong>Arquibancada:</strong> 400 - 200</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VisualizarCampeonato;
