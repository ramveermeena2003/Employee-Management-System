import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  }

  return (
    <div className='flex justify-between items-end'>
      <h2 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName}👋</span></h2>
      <button onClick={logOutUser} className='bg-red-600 px-2 py-1.5 rounded-lg text-lg font-medium hover:bg-red-800'>Log Out</button>
    </div>
  )
}

export default Header