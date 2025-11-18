import Starfield from './components/Starfield'; // Make sure this path is correct
import mylogo from './assets/3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  console.log('App component rendering'); // Debug log
  
  return (
    <div className='base-wrapper'>
      {/* Starfield Background */}
      <Starfield />
      
      <div className='top-container'>
        <a className='optns'>Home</a>
        <a className='optns'>Connect +</a>
        <a className='optns'>Projects</a>
        <a className='optns'>Path</a>
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

export default App;