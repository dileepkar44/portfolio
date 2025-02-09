import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
           <a href="#top" className='w-36 mx-auto mb-2 font-bold text-4xl font-Ovo cursor-pointer '>DK</a>

           <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ?assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            dileepkar44@gmail.com
           </div>
        </div>

<div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
    <p>@ 2025 Dileep K. All rights reserved</p>
    <ul className='flex items-center gap-10 justify-between mt-4 sm:mt-0'>
        <li><a target='_blank' href="https://github.com/dileepkar44">Github</a></li>
        <li><a target='_blank' href="https://www.linkedin.com/in/dileep-k-012431258/">LinkedIn</a></li>
        <li><a target='_blank' href="https://github.com/dileepkar44">X</a></li>
    </ul>
</div>

    </div>
  )
}

export default Footer
