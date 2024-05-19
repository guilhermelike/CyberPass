import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <h4>CyberPass</h4>
                <ul>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Termos e Condições</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4 id="formas">Formas de Pagamento</h4>
                <div className="payment-methods">
                    <img src="imagens/mastercard.png" alt="MasterCard" />
                    <img src="imagens/visa.png" alt="Visa" />
                    <img src="imagens/elo.png" alt="Elo" />
                    <img src="imagens/pix.png" alt="Pix" />
                </div>
            </div>
            <div className="footer-section">
                <h4>Área do Cliente</h4>
                <ul>
                    <li><a href="#">Reembolsos</a></li>
                    <li><a href="#">Suporte</a></li>
                    <li><a href="#">Manual do Usuário</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;