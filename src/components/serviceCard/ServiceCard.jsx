import React from 'react'
import "./serviceCard.scss"
import load from "../../assets/load.svg"
const ServiceCard = () => {
  return (
    <div className="card">
      <div className="cardTop">
        <img src={load} className='serviceLogo' />
        <div className="serviceName">
          Frieght Service
        </div>
      </div>
      <div className="cardBottom">
        Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.
      </div>
    </div>
  )
}

export default ServiceCard