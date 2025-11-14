import React from 'react'
import Navbar from '../../components/Navbar'
import Card_4 from '../../components/Card_4'
function Share_with_me() {
  return (
    <div>
        <Navbar />
      <h3 className='m-3'>
       Edit Review For <i>"Titanic"</i>
      </h3>
      <div className='row m-3'>
        <Card_4 />
      </div>
    </div>
  )
}

export default Share_with_me