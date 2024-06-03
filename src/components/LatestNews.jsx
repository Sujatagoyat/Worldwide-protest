import React from 'react'
import LatestMan from '../assets/Images/svg/latest_man_img.svg'
import RightTick from '../assets/Images/svg/right_tick_svg.svg'
import CommentIcon from '../assets/Images/svg/comment-icon.svg'
import heartIcon from '../assets/Images/svg/heart-icon.svg'
import retweetIcon from '../assets/Images/svg/retweet-icon.svg'
import Shareicon from '../assets/Images/svg/share-icon.svg'
import Laptop from '../assets/Images/svg/laptop.svg'
import Phone from '../assets/Images/svg/phone-svg.svg'
import Paper from '../assets/Images/svg/yellow-paper.svg'
import Slider from "react-slick";

function LatestNews() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
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
    <div className='py_lg_125_96 py_md_50_31 py-20 position-relative latest_bg_img'>
          <div className='phone-pstn position-absolute d-lg-block d-none'>
            <img src={Phone} alt="Phone" />
          </div>
          <div className='paper-pstn position-absolute d-lg-block d-none'>
            <img src={Paper} alt="Paper" />
          </div>
          <div className='laptop_pstn position-absolute d-lg-block d-none'>
            <img src={Laptop} alt="Laptop" />
          </div>
        <div className="container">
            <h2 className='fw-extrabold text-64 lh-77 ff-inter clr-black text-center mb-0 pb-lg-96 pb-md-45 pb-20'>LATEST NEWS</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 d-lg-block d-none ">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-none">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-none">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-none">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-none">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-none">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
             </div>

             <div className="row d-lg-none d-block">
             <Slider {...settings}>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                    <div className='latest_card mb-lg-27'>
                      <div className='d-flex gap-lg-4 align-items-center'>
                          <img src={LatestMan} alt="LatestMan"/>
                          <div className='blank'>
                              <div className='d-flex align-items-center '>
                                  <h4 className='fw-extrabold text-16 lh-19 ff-inter clr-black mb-0'>Joe Bidenn</h4>
                                  <img src={RightTick} alt="RightTick" />
                              </div>
                              <p className='fw-normal text-14 lh-24 ff-inter clr-black opacity_80 mb-0 max-w-240'>I am giving back in the community.</p>
                          </div>
                      </div>
                      <p className='fw-400 text-16 lh-25 ff-inter clr-black opacity_80 max-w-321 mb-0 pt-21'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                      <div className='d-flex aign-items-center justify-content-between pt-lg-27'>
                          <div className='d-flex '>
                             <img src={CommentIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>28</p>
                          </div>
                          <div className='d-flex '>
                             <img src={heartIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>5</p>
                          </div>
                          <div className='d-flex '>
                             <img src={retweetIcon} alt="CommentIcon" />
                             <p className='fw-normal text-14 lh-17 ff-pro clr-black mb-0'>21</p>
                          </div>
                          <div className='d-flex '>
                             <img src={Shareicon} alt="CommentIcon" />
                          </div>
                      </div>
                    </div>
                </div>
                </Slider>
             </div>
           
              
            
      </div>
   
        </div>
    // </div>
  )
}

export default LatestNews