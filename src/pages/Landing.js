import Gospoinova from '../img/Elena_Gospodinova.png'
import '../styles/Hero.css';


export default function Landing() {
    return <>
    
        <div className="hero-content">
            <p className="one">Hi I am Elena Gospodinova</p>
            <p className="two">Front-end Developer</p>  
        </div>
        
           {/* <div className="hero-button">
                <button className="button">
                        <a href="./img/Elena_Gospodinova_CV.docx" download>Download CV</a>
                </button>
           </div> */}
        <div class="shape"></div>
            <div>
              <img src={Gospoinova} alt="My Photo" id="photo"/>
            </div>
        <div className='landing-end'></div>
    </>
    

  }

