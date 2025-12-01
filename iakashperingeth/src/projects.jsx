import Starfield from "./components/Starfield";
import "./App.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="base-wrapper">
      <Starfield />

      <nav className="top-container">
        <a className="optns" href="/">Home</a>
        <Link to="/connect" className='optns'>Connect +</Link>
        <Link to="/projects" className="optns">Projects</Link>
        <Link to="/path" className="optns">Path</Link>
      </nav>

      <div className="bottom-container2">
        <div className="pjct_container">
          <div className="pjct_about">
            <h3 className="line4 ">
              My projects blend creativity with practical problem-solving.<br />
           
              Each project reflects growth in design, code, and innovation.<br />
              I'm always exploring new ideas to bring meaningful solutions to life.
            </h3>
          </div>

          <div className="pjct_space scrollable-div">
            <div className="scroll-content">
              <div className="project-item">
                <h3>Formatter-AI-rewriting</h3>
                <p>A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.</p>
              </div>
              
              <div className="project-item">
                <h3>Find Stock</h3>
                <p>Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.</p>
              </div>
              
              <div className="project-item">
                <h3>Personal Portfolio</h3>
                <p>Real-time weather application with geolocation, 7-day forecasts, and interactive maps using weather API integration.</p>
              </div>
              
              
              <div className="project-item">
                <h3>Case Studies</h3>
                <p>Dashboard for tracking social media metrics with data visualization charts and automated reporting system.</p>
              </div>
{/*               
              <div className="project-item">
                <h3>Portfolio Website</h3>
                <p>Responsive portfolio site with smooth animations, dark/light mode, and optimized performance.</p>
              </div>
              
              <div className="project-item">
                <h3>Fitness Tracker</h3>
                <p>Mobile fitness application with workout plans, progress tracking, and nutrition guidance.</p>
              </div>
              
              <div className="project-item">
                <h3>Chat Application</h3>
                <p>Real-time messaging app with WebSocket connections, file sharing, and group chat functionality.</p>
              </div>
              
              <div className="project-item">
                <h3>Budget Planner</h3>
                <p>Financial management tool with expense tracking, budget alerts, and financial goal setting.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;