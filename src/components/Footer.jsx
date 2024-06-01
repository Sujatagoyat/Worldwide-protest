import React from 'react'
import FooterLogo from '../assets/Images/svg/footer-logo.svg'
import DexImg from '../assets/Images/svg/dextools_logo.png (1).svg'
import Twitter from '../assets/Images/svg/f-twitter.svg'
import Telegram from '../assets/Images/svg/f-telegram.svg'

function Footer() {
  return (
    <div className='bg-black py-lg-153-120 py-md-70-40 py-30 '>
        <div className="container">
              <div className="row">
                <div className="col-md-3 col-6">
                   <img className='w-100 max-w-md-123 max-w-90' src={FooterLogo} alt="FooterLogo" />
                   <p className='fw-normal text-16 lh-25 ff-inter mb-0 pt-md-41 pt-20 mb-0 clr-white copy_text'>@copyright2024</p>
                </div>
                <div className="col-md-3 col-6">
                    <div className='footer_line position-relative d-flex '>
                    <ul className='mb-0  pl-lg-66'>
                    <li className='fw-bold text-16 lh-25 ff-inter clr-white mb-md-30 mb-20 text-nowrap'>QUICK LINKS</li>
                    <li className='mb-md-17 mb-10'><a href="https://x.com/?lang=en" target='_blank' className='fw-normal text-16 lh-25 ff-inter clr-white bottom_line position-relative'>Twitter</a></li>
                    <li className='mb-md-17 mb-10'><a href="https://telegram.org/"  target='_blank' className='fw-normal text-16 lh-25 ff-inter clr-white bottom_line position-relative'>Telegram</a></li>
                    <li className=''><a href="https://www.dextools.io/app/en/pairs" target='_blank' className='fw-normal text-16 lh-25 ff-inter clr-white bottom_line position-relative'>DexTools</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end justify-content-center  align-items-center pt-md-0 pt-4">
                    <div className='d-flex gap-lg-21'>
                        <a href="https://www.dextools.io/app/en/pairs" target='_blank' className='zoom'><img className='w-100 max-w-md-48 max-w-30' src={DexImg} alt="DexImg"/></a>
                        <a href="https://x.com/?lang=en" target='_blank' className='zoom'><img className='w-100 max-w-md-48 max-w-30' src={Twitter} alt="Twitter"/></a>
                        <a href="https://telegram.org/" target='_blank' className='zoom'><img className='w-100 max-w-md-48 max-w-30' src={Telegram} alt="Telegram"/></a>
                    </div>
                </div>
                </div> 
        </div>
    </div>
  )
}

export default Footer