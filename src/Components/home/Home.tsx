import image from '../../assets/Chibi_Image.png'
import './Home.css'
import './HomeResponsive.css'
import pdf from '../../assets/cv/SantiagoSallagoCV.pdf'

const Home = () => {
    return (
        <div className="home dark">
            <div className="home_text">
                <div className="text">
                    <h2>Hola Soy</h2>
                    <h1>Santiago Ariel Sallago</h1>
                    <p>FullStack Developer</p>
                </div>
                <div className="button_container">
                    <a className="button" href={pdf} download="Santiago_Sallago_CV.pdf">Descargar CV</a>
                </div>
            </div>
            <div className='image_chibi'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
export default Home;