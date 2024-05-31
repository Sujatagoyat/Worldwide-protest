import React from 'react'
import EcosystemImg from '../assets/Images/png/ecosystem-img.png'
import TweetImg from '../assets/Images/svg/twitter-img.svg'
import Horseimg from '../assets/Images/svg/horse-img.svg'
import DexImg2 from '../assets/Images/svg/dex-img.svg'
import teleImg from '../assets/Images/svg/telegram-img.svg'
import CircleImg from '../assets/Images/svg/circle-img.svg'
import NewspaperImg from '../assets/Images/svg/newspaper-img.svg'
import SpacksImg from '../assets/Images/svg/spacks-img.svg'
import utilityImg from '../assets/Images/png/utility-img-2.png'

function Ecosystem() {
  return (
    <div className='py_lg_177_61 py_md_50_31 pb-20 position-relative'>
        <div className='news-pstn position-absolute d-lg-block d-none'>
           <img src={NewspaperImg} alt="NewspaperImg" />
        </div>
        <div className='spacks-pstn position-absolute d-lg-block d-none'>
           <img src={SpacksImg} alt="SpacksImg" />
        </div>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                     <img className='w-100 max-w-lg-565 max-w-466' src={EcosystemImg} alt="EcosystemImg" />
                </div>
                <div className="col-lg-6 pt-lg-5 pt-3">
                <div className='d-flex align-items-center gap-23'>
                            <img className='w-100 max-w-59' src={DexImg2} alt="DexImg2"/>
                            <img className='w-100 max-w-59' src={Horseimg} alt="Horseimg"/>
                            <img className='w-100 max-w-59' src={TweetImg} alt="TweetImg"/>
                            <img className='w-100 max-w-59' src={teleImg} alt="teleImg"/>
                            <img className='w-100 max-w-59' src={CircleImg} alt="CircleImg"/>
                        </div>
                        <h2 className='fw-extrabold text-64 lh-77 ff-inter clr-black mb-0 pb-lg-20 pb-10 pt-13'>ECOSYSTEM</h2>
                        <p className='fw-normal text-16 lh-25 ff-inter clr-black max-w-550 opacity_80 mb-0 pb-md-33 pb-15'> The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</p>
                        <button className='fw-semibold text-16 lh-19 ff-inter buy-btn clr-black btn-style-2'>Buy $GrayGensler</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem