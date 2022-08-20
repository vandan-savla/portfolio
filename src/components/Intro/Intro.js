import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";


function Intro(props) {
    return (
        <div class='intro'>
            {/* About US */}
            <div className="i-left">
                <div className="i-name">
                    <span> Hey I am</span>
                    <span>Vandan Savla</span>
                    <span>
                        Third Year CS student at AP Shah Institute of Technology.
                        
                    </span>
                </div>
                <button className="button i-button">
                    Hire Me
                </button>
                <div className="i-icons">
                    <a href="https://www.linkedin.com/in/vandan-savla-5b37621a4/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="" />
                    </a>
                    
                    <a href="https://www.github.com/vandan-savla" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.instagram.com/_vds_21/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
                <div className="i-right">

                </div>
            </div>

        </div>
    )
}

export default Intro;