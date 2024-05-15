import './Home.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";



function Home(){
    return(
        <div className='background'>        
            <div className='textos'>
                <div>
                    <h1>A Casa dos Esports</h1>
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
        
    )
}

export default Home