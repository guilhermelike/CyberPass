import React from 'react';
import { IoSearchOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import './Home.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='background'>
                <div className='textos'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ marginBottom: '0' }}>A Casa dos Esports</h1>
                    </div>

                    <div className='subtitulo'>
                        <h2>Por que assistir de casa quando voce pode </h2><h2 className='rosa'> vivenciar</h2><h2>?</h2>
                    </div>

                    <div className='input-wrapper'>
                        <button className='botaosearch'><IoSearchOutline className='icone-search' /></button>
                        <input className='search' placeholder='IEM Rio 2024'></input>
                    </div>
                    <div className='down'>
                        <IoArrowDownCircleOutline className='arrow' />
                    </div>
                </div>
            </div>
            
            <div className='campeonatos'>
                <h2>Campeonatos</h2>
                <div className='mais-pesquisados'>
                    <h3>Os mais pesquisados:</h3>
                    <div className='cards'>
                        <div className='card'>
                            <img src='/imagens/valorant-masters.png' alt='Valorant Masters' />
                            <div className='caption white'>Valorant Masters</div>
                            <div className='caption green'>15 Jun - 20 Jun</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/iemrio.png' alt='IEM Rio 2024' />
                            <div className='caption white'>IEM Rio 2024</div>
                            <div className='caption green'>11 Out - 13 Out</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/cblol-2024.jpg' alt='CBLOL 2024' />
                            <div className='caption white'>CBLOL 2024</div>
                            <div className='caption green'>23 Abril - 24 Abril</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/get-rio-2024.jpg' alt='GET Rio 2024' />
                            <div className='caption white'>GET Rio 2024</div>
                            <div className='caption green'>01 Jan</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/esl-pro-league.jpg' alt='ESL Pro League' />
                            <div className='caption white'>ESL Pro League</div>
                            <div className='caption green'>10 Dez - 12 Dez</div>
                        </div>
                    </div>
                </div>
                <div className='destaques'>
                    <h3>Destaques da Semana:</h3>
                    <img src='/imagens/destaques.png' alt='Destaques da Semana' className='destaque-imagem' />
                </div>
                <div className='eventos'>
                    <h3>Eventos:</h3>
                    <div className='cards'>
                        <div className='card'>
                            <img src='/imagens/show-do-gordox.png' alt='Show do Gordox' />
                            <div className='caption white'>Show do Gordox</div>
                            <div className='caption green'>11 Dez</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/show-do-gordox.png' alt='Show do Gordox' />
                            <div className='caption white'>Show do Gordox</div>
                            <div className='caption green'>11 Dez</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/show-do-gordox.png' alt='Show do Gordox' />
                            <div className='caption white'>Show do Gordox</div>
                            <div className='caption green'>11 Dez</div>
                        </div>
                    </div>
                </div>
                <div className='rio-de-janeiro'>
                    <h3>Rio de Janeiro:</h3>
                    <div className='cards'>
                        <div className='card'>
                            <img src='/imagens/get-rio-2024.jpg' alt='GET Rio 2024' />
                            <div className='caption white'>GET Rio 2024</div>
                            <div className='caption green'>01 Jan</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/get-rio-2024.jpg' alt='GET Rio 2024' />
                            <div className='caption white'>GET Rio 2024</div>
                            <div className='caption green'>01 Jan</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/get-rio-2024.jpg' alt='GET Rio 2024' />
                            <div className='caption white'>GET Rio 2024</div>
                            <div className='caption green'>01 Jan</div>
                        </div>
                        <div className='card'>
                            <img src='/imagens/get-rio-2024.jpg' alt='GET Rio 2024' />
                            <div className='caption white'>GET Rio 2024</div>
                            <div className='caption green'>01 Jan</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;
