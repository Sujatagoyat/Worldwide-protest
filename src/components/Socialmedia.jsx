import React from 'react'
import twitterImg from '../assets/Images/svg/twitter-2.svg'
import telegramImg from '../assets/Images/svg/tele-2.svg'
import dexImg from '../assets/Images/svg/dex-3.svg'

function Socialmedia() {
  return (
     <div className='yellow-box d-flex align-items-center justify-content-center'>
     <div className="container custom-container">
     <div className=' d-flex justify-content-between  flex_wrap'>
         <div className=" pt-lg-0 pt-3 ">
             <div className='d-flex align-items-center align_center gap-md-22 gap-12'> 
              <img src={twitterImg} alt="twitterImg" />
              <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>twitter</h2>
              </div>
         </div>
         <div className=" pt-lg-0 pt-3  ">
              <div className='d-flex align-items-center gap-md-22 gap-12'>
                 <img src={telegramImg} alt="telegramImg" />
                 <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>Telegram</h2>
              </div>
         </div>          
              <div className='d-flex align-items-center gap-md-22 gap-12 justify-content-lg-start justigy-content-center pt-lg-0 pt-3'>
                 <img src={dexImg} alt="dexImg" />
                 <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>DEXTOOLS</h2>
              </div>
       
         </div>
     </div>
     
 </div>
  )
}

export default Socialmedia