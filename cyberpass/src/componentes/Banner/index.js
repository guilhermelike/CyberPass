import './Banner.css'

function Banner(){
    return(
        <header className="banner">
        <div className='header-pai'>
           <div className='titulo'><h2>Cyber</h2><h2 className='pass'>Pass</h2></div>
            <div className='header-meio'>
                <div>
                    <a href='#'><h4>Campeonatos</h4></a> 
                </div>
                <div>
                <a href='#'><h4>Eventos</h4></a> 
                </div>
                <div>
                <a href='#'><h4>Cidades</h4></a> 
                </div>
            </div>

            <div className='icones'>
                <div className='coluna'>
                    <div className='linha'>
                <div className='icones-esquerda'>
                    <div className='user'>
                        <a href="#" className='userlink'><img src='imagens/user.png'></img></a>
                    </div>
                    <div className='cart'>
                        <a href="#" className='cartlink'><img src='imagens/cart.png'></img></a>
                    </div>
                </div>

                <div className='icones-direita'>
                    <div className='brasil'>
                        <a href="#" className='brasilink'><img src='imagens/brasil.png'></img></a>
                    </div>
                    <div className='eua'>
                        <a href="#" className='eualink'><img src='imagens/eua.png'></img></a>
                    </div>
                </div>
                </div>
                <div className='botao'>
                    <button className='botaolink'>Acessibilidade</button></div>
                </div>
                
            </div>
        </div>
        </header>
    )
}

export default Banner