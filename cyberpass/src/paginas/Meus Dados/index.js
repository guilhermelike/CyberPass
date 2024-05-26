import React, { useState } from 'react';
import './MeusDados.css';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';

function MeusDados() {
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        setIsChangingPassword(false);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    const handleChangePasswordClick = () => {
        setIsChangingPassword(true);
        setIsEditing(false);
    };

    const handleBackClick = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    return (
        <>
            <Banner />
            <div className="meus-dados-container">
                <div className="welcome-message">
                    <span className="welcome-text">Bem vindo, </span>
                    <span className="user-name">Guilherme</span>
                </div>
                <header className="meus-dados-header">
                    <nav className="meus-dados-nav">
                        <ul>
                            <li><a href="#">Meus Pedidos</a></li>
                            <li><a href="#" className="active">Meus Dados</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="meus-dados-main">
                    <div className="dados-card">
                        <div className="dados-header">
                            <h2>Meus Dados</h2>
                            {!isEditing && !isChangingPassword && (
                                <div className="dados-buttons">
                                    <button className="editar-btn" onClick={handleEditClick}>Editar</button>
                                    <button className="alterar-senha-btn" onClick={handleChangePasswordClick}>Alterar Senha</button>
                                </div>
                            )}
                        </div>
                        <div className="dados-body">
                            {(isEditing || isChangingPassword) && (
                                <button className="voltar-btn" onClick={handleBackClick}>Voltar</button>
                            )}
                            {isChangingPassword ? (
                                <form className="senha-form">
                                    <div className="form-group">
                                        <label htmlFor="senha-atual">Senha Atual*</label>
                                        <input type="password" id="senha-atual" className="input-text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmacao-senha">Confirmação da Senha*</label>
                                        <input type="password" id="confirmacao-senha" className="input-text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nova-senha">Nova Senha*</label>
                                        <input type="password" id="nova-senha" className="input-text" />
                                    </div>
                                    <div className="form-actions">
                                        <button type="button" className="salvar-btn" onClick={handleSaveClick}>Confirmar</button>
                                    </div>
                                    <div className="form-actions">
                                        <p>Os campos com * são obrigatórios</p>
                                    </div>
                                </form>
                            ) : isEditing ? (
                                <form className="dados-form">
                                    <div className="form-group">
                                        <label>Pronome:</label>
                                        <div className="radio-group">
                                            <input type="radio" id="ele" name="pronome" value="ele" checked />
                                            <label htmlFor="ele">Ele</label>
                                            <input type="radio" id="ela" name="pronome" value="ela" />
                                            <label htmlFor="ela">Ela</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="nome">Nome*</label>
                                            <input type="text" id="nome" defaultValue="Guilherme" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sobrenome">Sobrenome*</label>
                                            <input type="text" id="sobrenome" defaultValue="Batista" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cpf">CPF*</label>
                                            <input type="text" id="cpf" defaultValue="xxx.xxx.xxx-xx" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email*</label>
                                            <input type="email" id="email" defaultValue="emailtop@gmail.com" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="telefone">Telefone*</label>
                                            <input type="text" id="telefone" defaultValue="41 9999-9999" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="data-nasc">Data Nasc.*</label>
                                            <input type="date" id="data-nasc" defaultValue="2000-01-31" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="cep">CEP*</label>
                                            <input type="text" id="cep" defaultValue="xxxxxx-xxx" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cidade">Cidade*</label>
                                            <input type="text" id="cidade" defaultValue="Curitiba" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="bairro">Bairro*</label>
                                            <input type="text" id="bairro" defaultValue="Cachoeira" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="endereco">Endereço*</label>
                                            <input type="text" id="endereco" defaultValue="Rua dos bobos" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="numero">Número*</label>
                                            <input type="text" id="numero" defaultValue="976" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="uf">UF*</label>
                                            <input type="text" id="uf" defaultValue="PR" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pais">País*</label>
                                            <input type="text" id="pais" defaultValue="Brasil" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="complemento">Complemento</label>
                                            <input type="text" id="complemento" defaultValue="Apartamento" className="input-text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ponto-ref">Ponto Ref</label>
                                            <input type="text" id="ponto-ref" defaultValue="UFPR" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="button" className="salvar-btn" onClick={handleSaveClick}>Salvar</button>
                                    </div>
                                    <div className="form-actions">
                                        <p>Os campos com * são obrigatórios</p>
                                    </div>
                                </form>
                            ) : (
                                <div className="coluna">
                                    <p><strong>Pronome:</strong> Ele</p>
                                    <p><strong>Nome:</strong> Guilherme</p>
                                    <p><strong>Sobrenome:</strong> Batista</p>
                                    <p><strong>CPF:</strong> xxx.xxx.xxx-xx</p>
                                    <p><strong>Email:</strong> emailtop@gmail.com</p>
                                    <p><strong>Telefone:</strong> 41 9999-9999</p>
                                    <p><strong>Data Nasc.:</strong> 31/01/2000</p>
                                    <p><strong>CEP:</strong> xxxxxx-xxx</p>
                                    <p><strong>Cidade:</strong> Curitiba</p>
                                    <p><strong>Bairro:</strong> Cachoeira</p>
                                    <p><strong>Endereço:</strong> Rua dos bobos</p>
                                    <p><strong>Número:</strong> 976</p>
                                    <p><strong>UF:</strong> PR</p>
                                    <p><strong>País:</strong> Brasil</p>
                                    <p><strong>Complemento:</strong> Apartamento</p>
                                    <p><strong>Ponto Ref:</strong> UFPR</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MeusDados;
