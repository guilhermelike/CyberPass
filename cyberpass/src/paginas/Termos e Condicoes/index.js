import React from 'react';
import Banner from '../../componentes/Banner';
import Footer from '../../componentes/Footer';
import './TermosECondicoes.css';

function TermosECondicoes() {
    return (
        <>
            <Banner />
            <div className="termos-e-condicoes-container">
                <header className="termos-e-condicoes-header">
                    <nav>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#" className='active'>Termos e Condições</a></li>
                            <li><a href="#">Privacidade</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="termos-e-condicoes-main">
                    <div className="termos-e-condicoes-info">
                        <p>A CyberPass reserva-se o direito de realizar, 
                        a qualquer tempo, alterações em sua dinâmica de prestação de serviços, bem como alterações nos seguintes T&C DE USO, 
                        visando adequá-los e torná-los mais eficientes, precisos ou claros. Por favor, 
                        fique sempre atento e visite esta seção de tempos em tempos. Lembrando que o uso contínuo das ferramentas disponíveis no Website pressupõe o 
                        conhecimento, compreensão e a aceitação dos seguintes T&C DE USO e de suas alterações.</p>
                        <p>1. Acesso ao Website</p>
                        <p>1.1. O acesso ao Website é permitido temporariamente e nos reservamos o direito de retirar ou alterar os serviços sem aviso prévio. Não seremos responsáveis se, por qualquer motivo, o Website estiver fora do ar em qualquer momento ou por qualquer período.</p>

                        <p>1.2. Periodicamente, podemos restringir o acesso a algumas partes do Website ou ao Website inteiro para usuários registrados.</p>

                        <p>2. Responsabilidades do Usuário</p>
                        <p>2.1. O usuário compromete-se a utilizar o Website apenas para fins legais e de forma que não infrinja os direitos de, ou restrinja ou iniba o uso e o gozo deste Website por qualquer terceiro.</p>

                        <p>2.2. O usuário concorda em não se envolver em qualquer conduta que seja prejudicial para a empresa, para outros usuários, ou para quaisquer terceiros.</p>

                        <p>3. Propriedade Intelectual</p>
                        <p>3.1. Todos os direitos de propriedade intelectual no Website e no material nele publicado são de nossa propriedade ou licenciados para nós. Todos esses direitos são reservados.</p>

                        <p>3.2. O usuário não deve modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos através do Website sem o consentimento prévio por escrito da CyberPass.</p>

                        <p>4. Uso de Dados Pessoais</p>
                        <p>4.1. O uso dos seus dados pessoais submetidos ao Website é regido pela nossa Política de Privacidade.</p>

                        <p>4.2. O usuário concorda que ao utilizar o Website, consente com a coleta e o uso de suas informações conforme descrito na Política de Privacidade.</p>

                        <p>5. Links para Sites de Terceiros</p>
                        <p>5.1. O Website pode conter links para outros sites operados por terceiros. Esses links são fornecidos apenas para sua conveniência e não significam nosso endosso ao conteúdo desses sites.</p>

                        <p>5.2. Não temos controle sobre o conteúdo desses sites e não aceitamos qualquer responsabilidade por eles ou por qualquer perda ou dano que possa surgir do seu uso.</p>

                        <p>6. Exclusão de Garantias e Limitação de Responsabilidade</p>
                        <p>6.1. Embora envidemos esforços razoáveis para atualizar as informações no nosso Website, não fazemos representações, garantias ou garantias, expressas ou implícitas, de que o conteúdo do nosso Website seja preciso, completo ou atualizado.</p>

                        <p>6.2. Na máxima extensão permitida por lei, excluímos todas as condições, garantias, representações ou outros termos que possam se aplicar ao nosso Website ou a qualquer conteúdo nele, seja expresso ou implícito.</p>

                        <p>7. Alterações aos Termos e Condições</p>
                        <p>7.1. Podemos revisar estes Termos e Condições a qualquer momento, alterando esta página. Espera-se que você verifique esta página de tempos em tempos para tomar conhecimento de quaisquer alterações que fizermos, pois elas são vinculativas para você.</p>

                        <p>7.2. Algumas das disposições contidas nestes Termos e Condições também podem ser substituídas por disposições ou avisos publicados em outras partes do nosso Website.</p>

                        <p>8. Rescisão</p>
                        <p>8.1. Podemos rescindir ou suspender seu acesso ao Website imediatamente, sem aviso prévio, por qualquer violação destes Termos e Condições.</p>

                        <p>8.2. Em caso de rescisão, as disposições que, por sua natureza, devem continuar a surtir efeito após a rescisão, continuarão a surtir efeito, incluindo, sem limitação, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.</p>

                        <p>9. Lei Aplicável</p>
                        <p>9.1. Estes Termos e Condições e qualquer disputa ou reivindicação decorrente ou em conexão com eles ou seu objeto ou formação (incluindo disputas ou reivindicações não contratuais) serão regidos e interpretados de acordo com as leis do Brasil.</p>

                        <p>9.2. Os tribunais do Brasil terão jurisdição exclusiva sobre qualquer disputa ou reivindicação decorrente destes Termos e Condições.</p>

                        <p>10. Indenização</p>
                        <p>10.1. O usuário concorda em indenizar, defender e isentar a CyberPass, seus diretores, funcionários, consultores, agentes e afiliados, de qualquer e toda reivindicação, responsabilidade, danos e/ou custos (incluindo, mas não se limitando a, honorários advocatícios) decorrentes do uso do Website pelo usuário ou da violação dos Termos e Condições.</p>

                        <p>11. Disposições Gerais</p>
                        <p>11.1. Se qualquer disposição destes Termos e Condições for considerada inválida por qualquer tribunal de jurisdição competente, a invalidade de tal disposição não afetará a validade das demais disposições destes Termos e Condições, que permanecerão em pleno vigor e efeito.</p>

                        <p>11.2. Nossa falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos e Condições não constituirá uma renúncia de tal direito ou disposição.</p>
                    </div>
                </main>
                
            </div>
            <Footer />
        </>
    );
}

export default TermosECondicoes;
