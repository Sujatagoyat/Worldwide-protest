import React from 'react'
import dextool from '../assets/Images/svg/dextools_logo.png.svg'
import twiter from '../assets/Images/svg/x_logo.svg.svg'
import telegram from '../assets/Images/svg/telegram_symbol.svg.svg'
import heroimg from '../assets/Images/png/hero-sec-img.png'
import btnimg from '../assets/Images/svg/btn-img.svg'

function HeroSection() {
    return (
        <div className='bg-black min_vh_100 h_754 d-flex flex-column align-item s-center position-relative '>
            <div className='hero_img position-absolute'>
                <img className='opacity_30 max_w_xl_576 max-w-450' src={heroimg} alt="heroimg" />
                </div>
            <div className='container custom-container'>
                <div className='d-flex align-items-center justify-content-between pt-40 '>
                    <h1 className='fw-900 text-40 lh-48 ff-inter clr-white'>Gxxx Gxxxxxx</h1>
                    <div className='d-flex align-items-center gap-46'>
                    <label htmlFor="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id='menu-icon' hidden />
                        <ul className='d-flex align-items-center gap-21 menulist ps-0'>
                            <li><a href=""><img src={dextool} alt="dextool" /></a></li>
                            <li><a href=""><img src={twiter} alt="twiter" /></a></li>
                            <li><a href=""><img src={telegram} alt="telegram" /></a></li>
                           <li><button className='fw-semibold text-16 lh-19 clr-white ff-inter btnn d-lg-none d-block btn-style'>Buy On Uniswap</button></li>
                        </ul>
                        <button className='fw-semibold text-16 lh-19 clr-white ff-inter btnn d-lg-block d-none btn-style text-nowrap'>Buy On Uniswap</button>                       
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column flex_grow align-items-center justify-content-center '>
                <div className='container custom-container '>
                    <div className="row">
                        <div className="col-lg-6 position-relative z-1">
                            <h1 className='fw-extrabold text-108 lh-130 ff-inter clr-white mb-0'>G<span className='clr-yellow'>G</span></h1>
                            <p className='fw-semibold text-20 lh-24 ff-inter clr-white mb-0 pb-lg-62 pb-md-32 pb-20'>Join The<span className='clr-yellow'> Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
                            <div className='d-flex align-items-center gap-20 mb-lg-36'>
                                <button className='fw-semibold text-16 lh-19 ff-inter buy-btn clr-black btn-style-2'>Buy $GrayGensler</button>
                                <button className='fw-600 text-16 lh-19 ff-inter clr-white btnn btn-style '>How To Buy?</button>
                            </div>
                            <button className='fw-400 text-20 lh-30 clr-white btnn '>dwqjddj324dnewdne3dewrrets <span className='ps-lg-19 ps-10
                            '><img src={btnimg} alt="btnimg" /></span></button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection