import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
          <span>some reasons</span>
          <div><span className='stroke-text'>why</span><span>  choose us</span></div>
        
       <div className='details-r'>
       <div><img src={tick} alt=""></img><span>“A one hour workout is 4% of your day. NO EXCUSES.” </span></div>
       <div><img src={tick} alt=""></img><span>“When you feel like dying, do ten more.”</span></div>
       <div><img src={tick} alt=""></img><span>“It hurts now, but one day it’ll be your warm up.”</span></div>
       <div><img src={tick} alt=""></img><span>“Good things come to those who sweat.”</span></div>
       </div>

    <span style={{color:"var(--gray)", fontweight:"normal"}}>
                    our partners
                    </span>



    <div className="partners">
      <img src={nb} alt="" />
      <img src={adidas} alt="" />
      <img src={nike} alt="" />
      </div>                

    </div>
    </div>
  )
}

export default Reasons