import React from 'react'

const Body = () => {
  return (
    <div className='max-w-80 bg-clr-light-blue mx-auto px-6 py-8'>
        <div className="about mb-6">
            <h3 className='text-base text-clr-light-gray font-bold'>About</h3>
            <p className='text-xs text-clr-dark-gray font-normal'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interest">
            <h3 className='text-base text-clr-light-gray font-bold'>Interest</h3>
            <p className='text-xs text-clr-dark-gray font-normal'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
  )
}

export default Body