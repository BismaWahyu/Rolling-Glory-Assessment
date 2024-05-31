import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='w-full bg-gray-800 text-white p-10'>
          <div className='container mx-auto flex justify-between'>
            <div className='flex justify-between'>
              <div>
                <img src='/img/ig.svg' />
              </div>
              <div className='mx-5'>
                <img src='/img/fb.svg' />
              </div>
              <div>
                <img src='/img/twt.svg' />
              </div>
            </div>
            <div className='flex'>
              <div>
                Term & Condition
              </div>
              <div className='mx-4'> | </div>
              <div>
                Copyright © 2018 All rights reserved PT Radya Gita Bahagia
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;