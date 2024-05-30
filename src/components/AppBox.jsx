import React from 'react'
import twitterImg from '../assets/Images/svg/twitter-2.svg'
import telegramImg from '../assets/Images/svg/tele-2.svg'
import dexImg from '../assets/Images/svg/dex-3.svg'

function AppBox() {
  return (
    <div className='yellow-box d-flex align-items-center justify-content-center'>
        <div className="container custom-container">
        <div className='row justify-content-center align-items-center'>
            <div className="col-lg-4 col-6 d-flex flex-column align-items-lg-start align-items-center pt-lg-0 pt-3 ">
                <div className='d-flex align-items-center gap-md-22 gap-12'> 
                 <img src={twitterImg} alt="twitterImg" />
                 <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>twitter</h2>
                 </div>
            </div>
            <div className="col-lg-4 col-6 d-flex flex-column align-items-lg-start align-items-center pt-lg-0 pt-4  ">
                 <div className='d-flex align-items-center gap-md-22 gap-12'>
                    <img src={telegramImg} alt="telegramImg" />
                    <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>Telegram</h2>
                 </div>
            </div>
            <div className="col-lg-4 col-6 pt-lg-0 pt-3 d-flex flex-column align-items-center">
                 <div className='d-flex align-items-center gap-md-22 gap-12'>
                    <img src={dexImg} alt="dexImg" />
                    <h2 className='fw-semibold text-48 lh-58 ff-inter clr-white mb-0'>DEXTOOLS</h2>
                 </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default AppBox