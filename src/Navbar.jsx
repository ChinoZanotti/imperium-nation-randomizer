import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-bottom'>
          <ul>
            <li>
              <a href='#' id='drawBtn' className='icon-link'>
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 50 50" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <rect 
                    width="50" 
                    height="50" 
                    fill="white"
                  />
                  <path 
                    d="M25.4856 8L44.9711 41.75H6L25.4856 8Z" 
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li className='nav-divider'></li>
            <li>
              <a href='#' id='shuffleResetBtn'>
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 50 50" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <rect 
                    width="50" 
                    height="50" 
                    fill="white"
                  />
                  <path 
                    d="M25.4856 8L44.9711 41.75H6L25.4856 8Z" 
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Navbar