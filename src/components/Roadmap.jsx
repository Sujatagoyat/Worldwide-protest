import React from 'react'
import YellowLine from '../assets/Images/svg/yellow-line.svg'
import YellowLine2 from '../assets/Images/svg/yellow-line-2.svg'
import YellowLine3 from '../assets/Images/svg/yellow-line-3.svg'
import YellowLine4 from '../assets/Images/svg/yellow-line-4.svg'
import YellowLine5 from '../assets/Images/svg/yellow-line-5.svg'
import Slider from "react-slick";

function Roadmap() {
  var setting = {
    dots: true,
    infinite: true,
    // autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='roadmap-bg-img py-lg-244 py-md-70 py-sm-40 py-20 token_bg_black'>
          <h2 className='fw-extrabold text-64 lh-77 clr-white ff-inter text-center mb-0 pb-lg-20 pb-10'>ROADMAP</h2> 
          <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-894 mx-auto text-center mb-0 pb-lg-141 pb-md-60 pb-sm-40 pb-20'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</p>  
          <Slider {...setting}>
          {/* <div className='d- flex gap-2'> */}
            <div className='d-flex align-items-end'>             
                <img src={YellowLine} alt="YellowLine" />
                <div>
               <h3 className='fw-extrabold text-24 lh-29 clr-white ff-inter max-w-185'>Token Launch (Q1 2024)</h3>
               <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-196'>Launch $LHGG token, establish initial  liquidity.</p>
               </div>
            </div>
            <div className='d-flex align-items-center gap-lg-18'>             
                <img src={YellowLine2} alt="YellowLine" />
                <div>
               <h3 className='fw-extrabold text-24 lh-29 clr-white ff-inter max-w-237'>Community Building (Q2 2024)</h3>
               <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-196'>Grow vibrant community  through humor and engagement.</p>
               </div>
            </div>
            <div className='d-flex align-items-start gap-lg-18'>             
                <img src={YellowLine3} alt="YellowLine" />
                <div>
               <h3 className='fw-extrabold text-24 lh-29 clr-white ff-inter max-w-237'>Governance Implementation (Q3 2024)</h3>
               <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-196'>Introduce community  governance mechanisms.</p>
               </div>
            </div>
            <div className='d-flex align-items-end gap-lg-18 mb-lg-50'>             
                <img src={YellowLine4} alt="YellowLine" />
                <div>
               <h3 className='fw-extrabold text-24 lh-29 clr-white ff-inter max-w-237 pt-5'> Partnerships and Influencer Collaborations (Q4 2024)</h3>
               <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-237 mb-0'> Forge  strategic partnerships and collaborations.</p>
               </div>
            </div>
            <div className='d-flex align-items-center gap-lg-18'>             
                <img src={YellowLine5} alt="YellowLine" />
                <div>
               <h3 className='fw-extrabold text-24 lh-29 clr-white ff-inter max-w-237'>  Utility Expansion (Q1 2025)</h3>
               <p className='fw-normal text-16 lh-30 ff-inter clr-white opacity_70 max-w-237 mb-0'> Explore new use cases and  integrations for $LHGG.</p>
               </div>
            </div>
            {/* </div>  */}
            </Slider> 
    </div>
  )
}

export default Roadmap
