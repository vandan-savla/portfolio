import './Navbar.css'
import { Link } from 'react-scroll'
import { useState } from "react";
// import '../About'

function Navbar(props) {
    const[fix,setFix] = useState(false);
    function setFixed(){
        if(window.scrollY >= 4){
            setFix(true);

        }
        else{
            setFix(false); 
        }
    }
    window.addEventListener("scroll",setFixed);

    return (
        <div className={fix ?"n-wrapper" : "n-wrapper"}>

            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>

                                About
                        </Link>
                                </li>
                        <li>Projects</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;