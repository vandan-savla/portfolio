import './About.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import "../Navbar"

function About(props) {
    return (
        <div class='a-intro' id = 'about'>
            {/* About US */}
            <div className="a-left">
                <div className="a-name">
                    <span>
                        About Me.
                    </span>
                    <span>
                        I am a hard worker, fast learner and good team player. I am interested in blockchain, AI Ml, and entrepreneurship. I also provide freelance services in graphic designing.
                    </span>
                </div>

            </div>
            <div className="a-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
            </div>


        </div>
    )
}

export default About;