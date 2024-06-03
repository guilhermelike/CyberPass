import React, { useState } from 'react';
import { IoSearchOutline, IoArrowDownCircleOutline, IoGridOutline, IoListOutline } from "react-icons/io5";
import Banner from '../../componentes/Banner';
import './HomePesquisa.css';

const HomePesquisa = () => {
    const [view, setView] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const resultados = [
        { id: 1, data: "11 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 2, data: "12 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 3, data: "13 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 4, data: "14 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 5, data: "15 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 6, data: "16 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 7, data: "17 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 8, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 9, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 10, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 11, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 12, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 13, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 14, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },
        { id: 15, data: "18 de Outubro", evento: "IEM Rio 2024", local: "Rio de Janeiro", arena: "Jeunesse Arena", preco: "150-500 Reais", status: "Disponível" },


    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = resultados.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Banner />
            <div className='background'>
                <div className='textos'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}></div>
                    <div className='subtitulo'></div>
                    <div className='input-wrapper'>
                        <button className='botaosearch'><IoSearchOutline className='icone-search' /></button>
                        <input className='search' placeholder='IEM Rio 2024'></input>
                    </div>
                    <div className='down'>
                        <IoArrowDownCircleOutline className='arrow' />
                    </div>
                </div>
                <div className='resultados-container'>
                    <h2><strong>Resultados para: "Show do Gordox"</strong></h2>
                    <span><strong>15 Resultados Encontrados</strong></span>
                    <div className='botoes-grade'>
                        <button
                            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                            onClick={() => setView('grid')}
                        >
                            <IoGridOutline style={{ width: '1.5em', height: '1.5em', color: view === 'grid' ? '#FF005C' : 'black' }} />
                        </button>
                        <button
                            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                            onClick={() => setView('list')}
                        >
                            <IoListOutline style={{ width: '1.5em', height: '1.5em', color: view === 'list' ? '#FF005C' : 'black' }} />
                        </button>
                    </div>
                    <div className={`resultados ${view === 'list' ? 'list-view' : ''}`}>
                        {view === 'grid' ? (
                            currentItems.map((resultado) => (
                                <div key={resultado.id} className='resultado-item'>
                                    <img src='imagens/iemrio.png' alt='evento' className='evento-img' />
                                    <div className='evento-info'>
                                        <h3>{resultado.evento}</h3>
                                        <p>{resultado.local}</p>
                                        <p>{resultado.arena}</p>
                                        <p>{resultado.data}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            resultados.map((resultado) => (
                                <div key={resultado.id} className='list-item'>
                                    <p className='evento'>{resultado.evento}</p>
                                    <p>{resultado.local}</p>
                                    <p>{resultado.arena}</p>
                                    <p>{resultado.data}</p>
                                    <p>{resultado.preco}</p>
                                    <p className='status'>{resultado.status}</p>
                                </div>
                            ))
                        )}
                    </div>
                    {view === 'grid' && (
                        <div className='paginacao'>
                            {Array.from({ length: Math.ceil(resultados.length / itemsPerPage) }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => paginate(index + 1)}
                                    style={{ backgroundColor: currentPage === index + 1 ? '#FF005C' : '#ffffff', color: currentPage === index + 1 ? 'white' : 'black' }}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePesquisa;
