import React from 'react'
import "./shippingDetails.scss";
import Header from '../../components/header/Header';
import MultiSteps from "../../components/multiSteps/MultiSteps"
import SearchBar from '../../components/searchBar/SearchBar';
import load from "../../assets/load.svg"
import dropdown from "../../assets/dropdown.png"
import ShippingList from '../../components/shippingList/ShippingList';
import chat from "../../assets/chat.svg"
const ShippingDetails = () => {
  const show = false;
  const showTrack = true;
  return (
    <div className='shippingDetailsContainer'>
      <Header show={show} showTrack={showTrack} />
      <div className='load'>
        {/* <div className="loadTitle"><img src={load} className='loadImg' />Load</div> */}
        <MultiSteps />
      </div>
      <SearchBar />
      <div className='shippingBottom'>
        <div className="shippingLeft">
          <div className="quotes">
            <div className="quoteHeading">3 Top Quote <span className='smallContent'>(6 in Total)</span></div>
          </div>
          <div className="QuotesOption">
            <div className='list'>
              <span>Filters</span>
              <img src={dropdown} />
            </div>
            <div className='list'>
              <span>Price</span>
              <img src={dropdown} />
            </div>
            <div className='list'>
              <span>Model</span>
              <img src={dropdown} />
            </div>
            <div className='list'>
              <span>Sellers</span>
              <img src={dropdown} />
            </div>
          </div>
        </div>
        <div className="shippingRight">
          <div className="shippingSelector">
            <span className='selectors selected'>
              Best Value 5-5 days, $3,121
            </span>
            <span className='selectors'>
              Quickest 5-5 days, $3,121
            </span>
            <span className='selectors'>
              Cheapest Value 5-5 days, $3,121
            </span>
          </div>
          <div className="shippingLists">
            <ShippingList />
            <ShippingList />
            <ShippingList />
            <ShippingList />
            <ShippingList />

          </div>
          <div className='chatIconInHomePage'>
            <img src={chat} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShippingDetails