import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
            {/* --------leftsection------ */}
            <div className=''>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sunt possimus. Est iusto labore, quas, accusamus aliquam, itaque minima sapiente ab architecto quasi voluptatibus molestias quae. Fugiat fuga molestiae nam?</p>

            </div>
            {/* --------centersection------ */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* --------rightsection------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 780048535</li>
                    <li>shubhamgupta780048@gmail.com</li>
                </ul>
            </div>

        </div>
            {/* ----------------copyright------ */}
        <div>
            <hr />
            <p className='text-sm text-center py-5'>Copyright 2025@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer