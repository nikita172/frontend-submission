import React from 'react'
import "./shippingList.scss"
import location from "../../assets/location.svg"
import aeroplane from "../../assets/aeroplane.png"
import frame from "../../assets/frame.png"
import blueStar from "../../assets/blueStar.png"
import outlineStar from "../../assets/outlineStar.svg"
const ShippingList = () => {
  return (
    <div className='shippingList'>
      <div className="shippingListLeft">
        <div className="top">
          <span className='bestVal'>
            <span className='greenCircle'></span>
            <span>Best Value</span></span>
          <span className='express'>Express</span>
          <span className='est'>Est 5 days</span>
        </div>

        <div className="fromTo">
          <img className='location' src={location} />
          <span>111045, Delhi</span>
          <span className='border'></span>
          <img className='aeroplane' src={aeroplane} />
          <span className='border'></span>
          <img className='location' src={location} />
          <span>1776045, Shangai</span>
        </div>
        <div className="rating">
          <img src={frame} className='frameImg' />
          <span className='primeTime'>Prime time World wide</span>
          <div className='stars'>
            <img src={blueStar} className='blueStar' />
            <img src={blueStar} className='blueStar' />
            <img src={blueStar} className='blueStar' />
            <img src={blueStar} className='blueStar' />
            <img src={outlineStar} />

          </div>
        </div>
      </div>
      <div className="shippingListRight">
        <div className='cost'>$ 676.543</div>
        <button className='selectBtn'>Select</button>
        <span className="viewDetails">View Details</span>
      </div>

    </div>
  )
}

export default ShippingList