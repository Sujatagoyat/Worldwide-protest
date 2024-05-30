import React from 'react'
import AboutImg from '../assets/Images/png/about-img.png'
import TweetImg from '../assets/Images/svg/twitter-img.svg'
import Horseimg from '../assets/Images/svg/horse-img.svg'
import DexImg2 from '../assets/Images/svg/dex-img.svg'
import teleImg from '../assets/Images/svg/telegram-img.svg'
import CircleImg from '../assets/Images/svg/circle-img.svg'

function AboutUs() {
  return (
    <div className='about-bg-img py_lg_134_104'>
        <div className='container custom-container'>
                <div className="row">
                    <div className="col-6">
                        <img className='w-100' src={AboutImg} alt="AboutImg" />
                    </div>
                    <div className="col-6">
                        <div className='d-flex align-items-center gap-23'>
                            <img src={DexImg2} alt="DexImg2"/>
                            <img src={Horseimg} alt="Horseimg"/>
                            <img src={TweetImg} alt="TweetImg"/>
                            <img src={teleImg} alt="teleImg"/>
                            <img src={CircleImg} alt="CircleImg"/>
                        </div>
                        <h2 className='fw-extrabold text-64 lh-77 ff-inter clr-black mb-0 pb-20'>ABOUT US</h2>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs