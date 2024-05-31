import React from 'react'
import UtilityImg from '../assets/Images/png/utility-img.png'
import utilityFuding1 from '../assets/Images/svg/utility-fuding-1.svg'
import utilityFuding2 from '../assets/Images/svg/utility-fuding-2.svg'

function Utility() {
  return (
    <div className='pt-lg-144 pt-md-70 pt-20 position-relative pb-15'>
        <div className='fuding_pstn_1 position-absolute d-lg-block d-none'>
            <img src={utilityFuding1} alt="utilityFuding1" />
        </div>
        <div className='fuding_pstn_2 position-absolute d-lg-block d-none'>
            <img src={utilityFuding1} alt="utilityFuding1" />
        </div>
        <div className='fuding_pstn_3 position-absolute d-lg-block d-none'>
            <img src={utilityFuding2} alt="utilityFuding1" />
        </div>
        <div className='container'>
            <div className="row justify-content-between">
                <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center ">
                    <div className='blank'>
                        <h2 className='fw-extrabold text-64 lh-77 ff-inter clr-black mb-md-0 pb-lg-20 mb-2 '>UTILITY</h2>
                         <p className='fw-normal text-16 lh-25 ff-inter max-w-lg-550 clr-black opacity_80 mb-md-0 pb-lg-27 mb-2'>The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth.</p>
                         <button className='fw-semibold text-16 lh-19 ff-inter buy-btn clr-black btn-style-2'>Buy $GrayGensler</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img className='w_441 h_544 w-100' src={UtilityImg} alt="UtilityImg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Utility