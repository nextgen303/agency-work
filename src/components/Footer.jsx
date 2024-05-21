import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-5'>
        <div className="footer flex items-center justify-between">
            <div className="left flex gap-4 text-zinc-300">
                <a href="">Home</a>
                <a href="">Work</a>
                <a href="">About </a>
                <a href="">Contact</a>
                <a href="">Policy</a>
            </div>
            <div className="right">
    Copyright 2024 all right resurved
            </div>
        </div>
    </div>
  )
}

export default Footer