import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { use } from 'react'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name:"Shubham Gupta",
    image:assets.profile_pic,
    email:'shubhamgupta780048@gmail.com',
    phone:780048535,
    address:{
      line1:"18 sector",
      line2:"Noida"
    },
    gender:'Male',
    dob:'2003-01-16'

  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit 
        ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e)=>setUserData(prev=>({...prev,name:e.target.value}))} placeholder='' />
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-800'>
          <p className='font-medium '>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          <p>
            {
              isEdit 
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={(e)=>setUserData(prev=>({...prev,phoone:e.target.value}))} placeholder='' />
              : <p className='text-blue-500'>{userData.phone}</p>
            }
          </p>
          <p className='font-medium'>Address:</p>
          <p>
            {
              isEdit 
              ? <p>
                  <input className='bg-gray-100' type="text" value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} placeholder='' />
                  <br />
                  <input className='bg-gray-100' type="text" value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} placeholder='' />
                </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            }
          </p>
        </div>
      </div>  
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium '>Gender:</p>
          {
            isEdit 
            ? <select className='w-20 bg-gray-100 ' onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>BirthDay:</p>
          {
            isEdit 
            ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.dob} />
            : <p className='text-gray-400'>{userData.dob}</p>
          }

        </div>
      </div> 
      <div className='mt-10 '>
          {
            isEdit
            ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save information</button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
          }
      </div>     
    </div>
  )
}

export default MyProfile