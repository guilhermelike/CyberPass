import './Home.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Banner from '../../componentes/Banner';



const Home = () =>{
    return(
        <>
        <Banner></Banner>
        <div className='background'>        
            <div className='textos'>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <h1 style={{marginBottom: '0'}}>A Casa dos Esports</h1>
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
        </>
    )
}

export default Home