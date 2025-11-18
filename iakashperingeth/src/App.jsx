import { useState, useEffect } from 'react'
import mylogo from './assets/3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'

function App() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className='base-wrapper'>
      {/* Stars Background */}
      <div className='stars-background'>
        {stars.map(star => (
          <div
            key={star.id}
            className='star'
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>
      
     <div className='top-container'>
      <a className='optns'>Home</a>
      <a className='optns'>Connect +</a>
      <a className='optns'>Projects</a>
      <a className='optns'>Path</a>
      </div>

      <div className='bottom-container bg-white '>
        <div className='about '>
          <p className="line1 txtclr ">
          Hi,im Akash Peringeth
          </p>
          <h1 className='line2 text-white'>DEVELOPER</h1>
          <p className="line3 fs-1  ">
          HERE MY CODE BECOMES A QUIET FILIM ON PAPER FOR EVERY DREAM
          </p>
        </div>
         <div className='aboutimg '>
          <img src={mylogo} alt="My Image"  className='Pimage'/>
        </div>
      </div>
    </div>
  )
}

export default App