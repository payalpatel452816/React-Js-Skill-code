import React from 'react'

const UserDetails = ({email,bio}) => {
  return (
    <div className='mb-20'>
     <h3>User Details</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  )
}

export default UserDetails