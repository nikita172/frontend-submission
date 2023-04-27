import React from 'react'
import "./booking.scss"
import Header from "../../components/header/Header"
import MultiSteps from '../../components/multiSteps/MultiSteps'
import building from "../../assets/building.svg"
import weight from "../../assets/weight.svg"
import frame from "../../assets/frame.png"
import star from "../../assets/star.png"
import chat from "../../assets/chat.svg"

import aeroplane from "../../assets/aeroplane.png"
const Booking = () => {
  const show = false;
  return (
    <div className='bookingContainer'>
      <Header show={show} />
      <MultiSteps />
      <div className="summary">
        <div className='summaryLeft'>

          <div className="bookingSummary">

            <span className='bookingTitle'>Booking Summary</span>
            <div className='cont'>
              <div className='aeroplaneImg'>
                <span className='expressTag'>Express</span>
                <img src={aeroplane} className='aeroplane' />
              </div>

              <div className='lineConnect'></div>
              <img src={building} className='buildingFirst' />
              <div className="addressLeft">Delhi,<br /> 110003 India</div>
              <img src={building} className='buildingSecond' />
              <div className="addressRight"> Shanghai, <br /> 200080 China</div>
            </div>



          </div>
          <div className="weights">
            <div className="weightFirst">
              <div className="weightHeading">Total Weight/Volume</div>
              <img src={weight} className='weightIcon' />
              <p className='weight'>114.89Kg</p>
            </div>
            <div className="weightSecond">
              <div className="loadTitle">Load</div>
              <div className="loadMiddle">
                <p className='loadQuantity'>1 X </p>
                <div className='palletDetails'>
                  <img className='palletImg' src={building} />
                  <span className='palletTitle'>Pallets</span>
                  <span className='palletSize'>230 X 120 X 120 CM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sellers">
            <div className="sellersLeft">
              <div className='sellerDesc'>Seller: Primetime Worldwide</div>
              <div className="frame">
                <img src={frame} />
              </div>
            </div>
            <div className="sellersRight">
              <div className='sellerDesc'>Insurance:Xcover.com</div>
              <div className="frame">
                <img src={frame} />
              </div>
            </div>
          </div>
        </div>
        <div className="summaryRight">
          <div className='priceDetails'>
            <h3 className='priceDetailTag'>Price details</h3>
            <span className='verifiedLabel'> <img src={star} className='starImg' />Known shipper</span>
          </div>
          <div className="sellerQuote">
            <span className='sellerQuoteTag'> Seller's Quote</span>
            <span className='sellerQuoteTag'>$ 6,789.89</span>
          </div>
          <div className="taxesDesc">
            <div className="taxLabels">
              <span>Duties and Taxes</span>
              <span>Not Included</span>
            </div>
            <div className="insurance">
              <span>Insurance</span>
              <span>$252.67</span>
            </div>
            <div className='smallDetail'>Based on the items cost</div>
          </div>

          <div className="feeAndLink">
            <span className='addPromo'>Add a <a href="#">promo code</a></span>
            <div className='feeCount'>
              <span>Platform fee</span>
              <span>$ 564.567</span>
            </div>
          </div>

          <div className="finalPrice">
            <span>Total:</span>
            <span>$ 788.787</span>
          </div>
          <button className='checkoutBtn'>Checkout</button>
          <div className='chatIconInHomePage'>
            <img src={chat} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking