import Starfield from './components/Starfield'; // Make sure this path is correct
import mylogo from './assets/3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import { Link } from "react-router-dom";

function Home() {
  console.log('App component rendering'); // Debug log
  
  return (
    <div className='base-wrapper'>
      {/* Starfield Background */}
      <Starfield />
      
       <div className='top-container'>
        <a className='optns'>Home</a>
        {/* <a className='optns'>Connect +</a> */}

        <Link to="/connect" className='optns'>Connect +</Link>

       
      <Link to="/projects" className="optns">Projects</Link>

      <Link to="/path" className="optns">Path</Link>
      </div>
      <div className='bottom-container'>
        <div className='about'>
          <p className="line1 txtclr">
            Hi, im Akash Peringeth
          </p>
          <h1 className='line2 text-white'>DEVELOPER</h1>
          <p className="line3 fs-1">
            HERE MY CODE BECOMES A QUIET FILIM ON PAPER FOR EVERY DREAM
          </p>
        </div>
        <div className='aboutimg'>
          <img src={mylogo} alt="My Image" className='Pimage'/>
        </div>
      </div>
    </div>
  );
}

export default Home;