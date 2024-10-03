import React from 'react'
import ProfileHeader from './ProfileHeader'
import UserDetails from './UserDetails'
import FriendZone from './FriendZone'

const UserProfile = () => {
    const user = {
        name: 'Payal Patel',
        profilePicture: '../Nested Componets/IMG_4794-1-1.jpg',
        email: 'payalpatel@gmail.com',
        bio: 'FontEnd Developer',
        friends: ['Arti', 'Bhavik', 'Kinnal']
      };
  return (
    <div className='max-w-sm m-auto '>
         <ProfileHeader name={user.name} profilePicture={user.profilePicture} />
      <UserDetails email={user.email} bio={user.bio} />
      <FriendZone friends={user.friends} />
    </div>

  )
}

export default UserProfile