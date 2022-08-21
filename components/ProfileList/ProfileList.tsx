/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProfileList: React.FC = () => {
    return (
        <div className="profile__grid">
            <div className="each">
                <div className="img__wraper">
                    <img src="/assets/images/profile/p1.png" alt="image" />
                </div>
                <div className="content">
                    <h6>Maksudul Hasan</h6>
                    <p className="loaction"><img src="/assets/images/icon/location.svg" alt="icon" /> Dhaka Bangladesh</p>
                    <p className="join"><img src="/assets/images/icon/clock.svg" alt="icon" /> Joined On: July 26th, 2022</p>
                </div>
                <div className="d-flex justify-content-center">
                    <ul className="social__list d-flex list-unstyled">
                        <li><a href="https://web.facebook.com/mdmaruf43" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/fb-color.svg" alt="icon" /></a></li>
                        <li><a href="https://web.facebook.com/mdmaruf43" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/insta-color.svg" alt="icon" /></a></li>
                        <li><a href="https://web.facebook.com/mdmaruf43" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/linkedin-color.svg" alt="icon" /></a></li>
                        <li><a href="https://web.facebook.com/mdmaruf43" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/twitter-color.svg" alt="icon" /></a></li>
                    </ul>
                </div>
                <div className="bottom d-flex justify-content-between">
                    <div className="each__sec">
                        <p><span>12K</span> <br /> Follwers</p>
                    </div>
                    <div className="each__sec">
                        <p><span>Fashion</span> <br /> Categories</p>
                    </div>
                    <div className="each__sec">
                        <p><span>Male</span> <br /> Gender</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileList