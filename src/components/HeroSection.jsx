import React from 'react'
import dextool from '../assets/Images/svg/dextools_logo.png.svg'
import twiter from '../assets/Images/svg/x_logo.svg.svg'
import telegram from '../assets/Images/svg/telegram_symbol.svg.svg'

function HeroSection() {
    return (
        <div className='bg-black'>
            <div className='container custom-container'>
               <div className='d-flex align-items-center justify-content-between pt-40'>
                    <h1 className='fw-900 text-40 lh-48 ff-inter clr-white'>Gxxx Gxxxxxx</h1>
                    <div className='d-flex align-items-center gap-46'>
                    <div className='d-flex align-items-center gap-21'>
                        <img src={dextool} alt="dextool" />
                        <img src={twiter} alt="twiter" />
                        <img src={telegram} alt="telegram" />
                    </div>
                    <button className='fw-semibold text-16 lh-19 clr-white ff-inter btnn'>Buy On Uniswap</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection