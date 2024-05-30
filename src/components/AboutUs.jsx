import React from 'react'
import AboutImg from '../assets/Images/png/about-img.png'
import TweetImg from '../assets/Images/svg/twitter-img.svg'
import Horseimg from '../assets/Images/svg/horse-img.svg'
import DexImg2 from '../assets/Images/svg/dex-img.svg'
import teleImg from '../assets/Images/svg/telegram-img.svg'
import CircleImg from '../assets/Images/svg/circle-img.svg'
import FudingImg from '../assets/Images/png/fuding-img.png'
import LovefudingImg from '../assets/Images/svg/I love FUDing.svg'

function AboutUs() {
  return (
    <div className='about-bg-img py_lg_134_104 py-md-80-60 py-10'>
        <div className='container custom-container'>
                <div className="ro w position-relative d-flex gap-lg-59 gap-md-30 gap-20 flex_wrap">
                    <div className="
                     d-flex align-items-center justify-content-center">
                        <img className='w-100' src={AboutImg} alt="AboutImg" />
                        <div className='Fuding_pstn_1 position-absolute d-lg-block d-none'>
                            <img src={FudingImg} alt="FudingImg" />
                        </div>
                        <div className='Fuding_pstn_2 position-absolute d-lg-block d-none'>
                            <img src={LovefudingImg} alt="LovefudingImg" />
                        </div>
                        <div className='Fuding_pstn_3 position-absolute d-lg-block d-none'>
                            <img src={FudingImg} alt="FudingImg" />
                        </div>
                    </div>
                    <div className="max-w-7 00 max-w-lg-550">
                        <div className='d-flex align-items-center gap-23'>
                            <img className='w-100 max-w-59' src={DexImg2} alt="DexImg2"/>
                            <img className='w-100 max-w-59' src={Horseimg} alt="Horseimg"/>
                            <img className='w-100 max-w-59' src={TweetImg} alt="TweetImg"/>
                            <img className='w-100 max-w-59' src={teleImg} alt="teleImg"/>
                            <img className='w-100 max-w-59' src={CircleImg} alt="CircleImg"/>
                        </div>
                        <h2 className='fw-extrabold text-64 lh-77 ff-inter clr-black mb-0 pb-lg-20 pb-10'>ABOUT US</h2>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</p>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs