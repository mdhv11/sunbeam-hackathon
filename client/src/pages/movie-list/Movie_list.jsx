import React from 'react'
import { Outlet } from 'react-router-dom'
import Cardd from '../../components/Cardd'
import BasicExample from '../../components/AllMovie'
import Navbar from '../../components/Navbar'
function Movie_list() {
  return (
    <div>
      <Navbar />
      <h3 className='m-3'>
        All Movies
      </h3>
      <div className='row m-3'>
      <BasicExample />
      
      <BasicExample />
      <BasicExample />
      </div>
      {/* this is a placeholder to load all child components */}
      <Outlet />
      
    </div>
  )
}

export default Movie_list
