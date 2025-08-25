import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-bottom'>
          <ul>
            <li>
              <a href='#' id='drawBtn' className='icon-link'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="30px" 
                  viewBox="0 -960 960 960" 
                  width="30px" 
                  fill="#e3e3e3">
                  <path 
                    d="M280-160v-80h400v80H280Zm160-160v-327L336-544l-56-56 200-200 
                    200 200-56 56-104-103v327h-80Z"/>
                </svg>
              </a>
            </li>
            <li className='nav-divider'></li>
            <li>
              <a href='#' id='shuffleResetBtn'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="30px" 
                  viewBox="0 -960 960 960" 
                  width="30px" 
                  fill="#e3e3e3">
                  <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Navbar