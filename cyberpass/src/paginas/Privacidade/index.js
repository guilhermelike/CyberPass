import React from 'react';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';
import './Privacidade.css';

function Privacidade() {
    return (
        <>
            <Banner />
            <div className="privacidade-container">
                <header className="privacidade-header">
                    <nav>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Termos e Condições</a></li>
                            <li><a href="#" className="active">Privacidade</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="privacidade-main">
                    <div className="privacidade-info">
                        <p>Política de Privacidade</p>
                        <p>1. Introdução</p>
                        <p>A CyberPass valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. 
                        Esta Política de Privacidade descreve como coletamos, usamos, e compartilhamos informações sobre você, e seus direitos em relação a essas informações.</p>

                        <p>2. Coleta de Informações</p>
                        <p> 2.1. Informações que Você Nos Fornece</p>
                        <p> Dados de Cadastro: Nome, endereço de e-mail, número de telefone, e outras informações de contato.</p>
                        <p> Informações de Pagamento: Dados do cartão de crédito ou outras informações de pagamento quando você faz uma compra.</p>
                        <p> Comunicações: Informações que você nos fornece quando entra em contato conosco, incluindo conteúdo de e-mails, chats e chamadas telefônicas.</p>
                        <p> 2.2. Informações que Coletamos Automaticamente</p>
                        <p> Dados de Uso: Informações sobre como você navega e usa nosso Website, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto nas páginas.</p>
                        <p> Cookies e Tecnologias Semelhantes: Utilizamos cookies para coletar informações sobre suas interações com o nosso site e melhorar a sua experiência.</p>
                        <p> 2.3. Informações de Terceiros</p>
                        <p> Podemos receber informações sobre você de terceiros, como parceiros de negócios, prestadores de serviços de pagamento e redes sociais.</p>
                        <p> 3. Uso das Informações</p>
                        <p> Utilizamos as informações coletadas para:</p>

                        <p> Fornecer e Melhorar Nossos Serviços: Processar transações, gerenciar contas de usuários, e melhorar o conteúdo e funcionalidades do nosso Website.</p>
                        <p> Comunicações: Enviar notificações, atualizações, e-mails promocionais, e responder às suas solicitações.</p>
                        <p> Marketing e Publicidade: Personalizar e exibir anúncios relevantes, realizar análises de mercado e campanhas publicitárias.</p>
                        <p> Segurança: Detectar e prevenir fraudes, monitorar e proteger contra atividades ilegais, e garantir a segurança de nossos sistemas.</p>
                        <p> 4. Compartilhamento de Informações</p>
                        <p> Compartilhamos suas informações com:</p>

                        <p> Provedores de Serviços: Empresas que fornecem serviços em nosso nome, como processamento de pagamentos, análise de dados, marketing e hospedagem.</p>
                        <p> Parceiros de Negócios: Empresas com as quais temos acordos de parceria ou colaboração.</p>
                        <p> Autoridades Legais: Em resposta a solicitações legais ou para cumprir com obrigações legais, regulatórias ou de segurança.</p>
                        <p> 5. Proteção das Informações</p>
                        <p> Adotamos medidas técnicas, administrativas e físicas para proteger suas informações contra acesso não autorizado, uso indevido, perda ou destruição.</p>

                        <p> 6. Seus Direitos</p>
                        <p> Você tem o direito de:</p>

                        <p> Acessar e Corrigir: Solicitar acesso aos seus dados pessoais e corrigir informações imprecisas ou desatualizadas.</p>
                        <p> Excluir: Solicitar a exclusão dos seus dados pessoais, sujeita a certas exceções legais.</p>
                        <p> Portabilidade: Solicitar a transferência de seus dados pessoais para outro provedor de serviços.</p>
                        <p> Optar por Não Receber Comunicações: Optar por não receber comunicações promocionais a qualquer momento.</p>
                        <p> 7. Alterações a Esta Política</p>
                        <p> Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter
                            informado sobre nossas práticas de privacidade.</p>

                        <p> 8. Contato</p>
                        <p> Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre nossas práticas de privacidade, entre em contato conosco:</p>

                        <p> E-mail: privacidade@cyberpass.com</p>
                        <p> Endereço: Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, CEP 00000-000, Brasil.</p>
                    </div>
                </main>
                
            </div>
            <Footer />
        </>
    );
}

export default Privacidade;
