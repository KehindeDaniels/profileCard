import React from 'react'
import profileImage from '../assets/profilePics.jpg';

import Buttons from './Buttons';

const Header = () => {
  return (
    <>
      <header className='max-w-80 mt-8 bg-clr-light-blue mx-auto text-center'>
        <div className="profile-img">
          <img src={profileImage} alt="" className='' />
        </div>

        <div className="profile-about mt-6 mb-4">
          <h2 className='text-white font-bold text-2xl'>Laura Smith</h2>
          <p className='text-clr-orange text-sm'>Frontend Developer</p>
          <p className='text-clr-light-gray text-xs'><a href="#">Laurasmith.website</a></p>
        </div>

        <Buttons/>
      </header>
    </>
  )
}

export default Header