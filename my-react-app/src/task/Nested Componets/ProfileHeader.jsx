import React from 'react'
import img from '../Nested Componets/IMG_4794-1-1.jpg'
                           //Props
const ProfileHeader = ({name,profilepicture}) => {
  return (
    <div className='text-center mb-[20px]'>
        <img src={img} alt='' className='rounded-lg w-full'/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProfileHeader