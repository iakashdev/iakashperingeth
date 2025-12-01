import Starfield from "./components/Starfield";
import './pathstyle.css';
import { Link } from "react-router-dom";

function Path() {
    const handleBlockClick = (url) => {
        window.open(url, '_blank');
    }

    return(
        <div className='base-wrapper'>
            <Starfield />
            <nav className="top-container">
                <a className="optns" href="/">Home</a>
                <a className="optns" href="/connect">Connect +</a>
                <Link to="/projects" className="optns">Projects</Link>
                <Link to="/path" className="optns">Path</Link>
            </nav>

            <div className="path_base">
                <div className="p_block" onClick={() => handleBlockClick("#")}>
                    <h2 className="block-heading">Education</h2>
                    <p className="block-content">Diploma in Computer Engineering</p>
                </div>
                <div className="p_block" onClick={() => handleBlockClick("#")}>
                    <h2 className="block-heading">Internship</h2>
                    <p className="block-content">Irod Technologies</p>
                </div>
                <div className="p_block" onClick={() => handleBlockClick("https://olivotech.com/")}>
                    <h2 className="block-heading">Work Experience</h2>
                    <p className="block-content">2023 - Present</p>
                </div>
             
            </div>
        </div>
    );
}

export default Path;