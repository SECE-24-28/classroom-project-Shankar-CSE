import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-black flex justify-end items-center text-white gap-10'>
      <Link to={"/"} >HOME</Link>
      <Link to={"/posts"} >POSTS</Link>
    </div>
  )
}

export default NavBar
