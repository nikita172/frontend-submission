import React from 'react'
import "./homePage.scss"
import Header from '../../components/header/Header'
import SearchBar from '../../components/searchBar/SearchBar'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import wave from "../../assets/wave.svg"
import wave2 from "../../assets/wave2.png"
import chat from "../../assets/chat.svg"

const HomePage = () => {
  const show = true
  return (
    <div className='homePage'>
      <Header show={show} />
      <div className="content">
        <div className='title'>Hassle-Free Shipping Solutions</div>
        <div className="subTitle">Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</div>
      </div>
      <SearchBar />
      <div className="services">
        <div className="title">Services</div>
        <div className='servivesCard'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <div className='chatIcon'>
        <img src={chat} />
      </div>
      <div className="wave">
        <img src={wave} className='waveIcon' />
        <img src={wave2} className='waveIcon' />
      </div>
    </div>
  )
}

export default HomePage