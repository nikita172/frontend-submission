import React from 'react'
import "./header.scss"
import doller from "../../assets/dollerImg.svg"
const Header = ({ show, showTrack }) => {
  return (
    <div className='header'>
      <div className="headerLeft">
        Ship
        <span className="lastChar">
          mate.
        </span>
      </div>
      {
        show && (
          <div className="headerRight">
            <button className='loginBtn'>Login</button>
            <button className='learnMoreBtn'>Learn more</button>
          </div>
        )
      }
      {
        showTrack && (
          <div className="headerRight">
            <div className='dollerBorder'>
              <img src={doller} />
            </div>
            <button className='TrackShip'>Track shipment</button>
          </div>
        )
      }

    </div>
  )
}

export default Header