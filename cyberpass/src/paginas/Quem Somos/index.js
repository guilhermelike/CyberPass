import React from 'react';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';
import './QuemSomos.css';

function QuemSomos() {
    return (
        <>
            <Banner />
            <div className="quem-somos-container">
                <header className="quem-somos-header">
                    <nav>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Termos e Condições</a></li>
                            <li><a href="#">Privacidade</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="quem-somos-main">
                    <div className="quem-somos-info">
                        <p>Somos uma empresa fundada em 2024, que nasceu com o objetivo de facilitar o acesso aos maiores campeonatos e eventos do mundo dos esports.</p>
                        <p>Nossa missão é proporcionar aos fãs de esports uma experiência única, onde possam vivenciar a emoção e a energia dos torneios mais prestigiados do mundo, independentemente de sua localização geográfica ou nível de familiaridade com o cenário. </p>
                        <p>Estamos comprometidos em quebrar barreiras e abrir portas para que todos possam desfrutar do espetáculo competitivo que os esports oferecem.</p>
                        <p>Saiba mais sobre os fundadores nos cards ao lado!</p>
                        <div className="separator"></div>
                        <footer>
                            <p>Última atualização do site: <span className="update-date">09/05/2024</span></p>
                        </footer>
                    </div>
                    <div className="fundadores">
                        <div className="fundador">
                            <h3>Guilherme Franco Batista</h3>
                            <img src="imagens/guilherme.jpg" alt="Guilherme Franco Batista" />
                            <p>Estudando Análise e Desenvolvimento de Sistemas na UFPR</p>
                            <div className="separator"></div>
                            <p>Desenvolvedor Front-End</p>
                            <div className="separator"></div>
                            <p>Fã do J.Cole</p>
                            <div className="separator"></div>
                            <div className="social-links">
                                <a href="#"><img src="imagens/linkedin.png" alt="LinkedIn" /></a>
                                <a href="#"><img src="imagens/github.png" alt="GitHub" /></a>
                            </div>
                        </div>
                        <div className="fundador">
                            <h3>Vinicius Ratzke Servelo</h3>
                            <img src="imagens/vinicius.png" alt="Vinicius Ratzke Servelo" />
                            <p>Estudando Análise e Desenvolvimento de Sistemas na UFPR</p>
                            <div className="separator"></div>
                            <p>Desenvolvedor Back-End</p>
                            <div className="separator"></div>
                            <p>1,80 de altura</p>
                            <p>20 Anos de idade</p>
                            <p>3 Teleton</p>
                            <p>1 Mega Sena</p>
                            <p>64 Villa mix</p>
                            <p>3 Vacinas da covid</p>
                            <p>6 Criança Esperança</p>
                            <p>2 Champions League</p>
                            <p>4 Dança dos famosos</p>
                            <p>1 De Férias com o Ex</p>
                            <p>3 E-girls</p>
                            <p>Fã #1 da Lana Del Rey</p>
                            <p>Fã #1 da Taylor Swift</p>
                            <div className="separator"></div>
                            <div className="social-links">
                                <a href="#"><img src="imagens/linkedin.png" alt="LinkedIn" /></a>
                                <a href="#"><img src="imagens/github.png" alt="GitHub" /></a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default QuemSomos;