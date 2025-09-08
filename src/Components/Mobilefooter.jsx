import { Plus } from 'lucide-react'
import React from 'react'
export default function Mobilefooter() {
  return (
    <div className='mb-10 md:hidden bg-[#F6F6F8] px-3 pb-5'>
      <div className='flex justify-between items-center '>
        <p className='text-md font-semibold text-[#2F2F30]'>Get in touch</p>
        <Plus className='text-gray-400'/>
      </div>
      <div className='flex justify-between items-center py-5'>
        <p className='font-semibold text-[#2F2F30]'>Explore</p>
        <Plus className='text-gray-400'/>
      </div>
      <div className='flex justify-between items-center  '>
        <p className='font-semibold text-[#2F2F30]'>Useful Links</p>
        <Plus className='text-gray-400'/>
      </div>
      <div className='flex justify-between items-center py-5'>
        <p className='font-semibold text-[#2F2F30]'>Newsletter Signup</p>
        <Plus className='text-gray-400'/>
      </div>
    </div>
  )
}
