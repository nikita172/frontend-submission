import React from 'react'
import "./searchBar.scss";
import location from "../../assets/location.svg"
import calender from "../../assets/calender.svg"
import load from "../../assets/load.svg"
import arrow from "../../assets/arrow.svg"



const SearchBar = () => {
  return (
    <div className='searchBar'>
      <div className='searchWrapper'>
        <div className="origin search">
          <img src={location} className='searchInputIcons' />
          <input type="text" placeholder='Origin, Port, City' className='searchInput' />
        </div>
        <div className="destination search">
          <img src={location} className='searchInputIcons' />
          <input type="text" placeholder='Destination, Port, City' className='searchInput' />
        </div>
        <div className="date search">
          <img src={calender} className='searchInputIcons' />
          <input type="date" placeholder='25 April 2023' className='searchInput' />
        </div>
        <div className="load search">
          <img src={load} className='searchInputIcons' />
          <input type="text" placeholder='Load' className='searchInput' />
        </div>
      </div>
      <div className='arrowBtn'>
        <img src={arrow} className='arrowIcon' />
      </div>
    </div>
  )
}

export default SearchBar