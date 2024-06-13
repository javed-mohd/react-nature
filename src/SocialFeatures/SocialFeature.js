import React, { useState } from 'react'
import ChildCard from "./ChildCard"
import CardData from "./CardData"
import "../Style.css"

const SocialFeature = () => {
    const [currentData] = useState(CardData);
  return (
    <>
      <div className='container-fluid social_main'>
        <div className='container'>
            <div className='header_content'>
                <h1 className='text-center'>Our Special <span>Features</span></h1>
                <p className='text-center'>Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</p>
            </div>
            <div className='row mt-5'>
                <ChildCard currentData = {currentData} />
            </div>
        </div>
      </div>
    </>
  )
}

export default SocialFeature
