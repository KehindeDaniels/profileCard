import React from 'react'
import facebook from '../assets/Facebook-Icon.svg';
import github from '../assets/Github-Icon.svg';
import instgram from '../assets/Instagram-Icon.svg';
import twitter from '../assets/Twitter-Icon.svg';

const icons = [
    {
        id: 'Twitter Icon',
        src: twitter,
    },
    {
        id: 'Facebook Icon',
        src: facebook,
    },
    {
        id: 'Instgram Icon',
        src: instgram,
    },
    {
        id: 'Github Icon',
        src: github,
    },
]

const Footer = () => {

    const iconsArr = icons.map((icon)=>(
        <div className="icons" key={icon.id}>
            <img src={icon.src} alt="icon.id" />
        </div>
    ))
  return (
    <>
       <footer className='max-w-80  mx-auto px-6 py-6  flex items-center justify-center gap-6 bg-clr-dark-blue rounded-b-lg'>
            {iconsArr}
        </footer> 
    </>
  )
}

export default Footer