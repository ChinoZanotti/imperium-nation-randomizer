import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-bottom'>
          <ul>
            <li>
              <a href='#' id='drawBtn' className='icon-link'>
                DRAW
              </a>
            </li>
            <li className='nav-divider'></li>
            <li>
              <a href='#' id='shuffleResetBtn'>
                SHUF
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Navbar