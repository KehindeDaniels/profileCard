import React from 'react'
import email from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'

const btn = [
    {
        id: 0,
        name: 'Email',
        src: email,
        className: 'bg-white text-clr-light-blue`'
    },
    {
        id: 1,
        name: 'Linkedin',
        src: linkedin,
        className: 'bg-clr-sky-blue text-white gap-2'
    }

    
]

const Buttons = () => {

    const buttons = btn.map((btns)=> (
         <button key={btns.id} className={`w-28 mx-auto text-sm flex items-center justify-between px-6 py-2 rounded-sm ${btns.className}`}>
            <img src={btns.src} alt="" />
            {btns.name}
         </button>
    ))

  return (
    <div className='flex justify-between items-center'>
       {buttons} 
    </div>
  )
}

export default Buttons

