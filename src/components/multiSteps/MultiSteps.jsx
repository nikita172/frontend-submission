import React from 'react'
import "./multiSteps.scss"
const MultiSteps = () => {
  return (
    <div className="multiStepsDiv">
      <div className="first multi">
        <span className='steps'>1</span>
        <div className='stepsName'>Search</div>
      </div>
      <div className='border'></div>
      <div className="second multi">
        <span className='steps'>2</span>
        <div className='stepsName step2'>Recommended services</div>
      </div>
      <div className='border'></div>
      <div className="third multi">
        <span className='steps'>3</span>
        <div className='stepsName'>Results</div>
      </div>
      <div className='border'></div>
      <div className="fourth multi">
        <span className='steps'>4</span>
        <div className='stepsName'>Booking</div>
      </div>
    </div>
  )
}

export default MultiSteps