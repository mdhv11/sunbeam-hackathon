import React from 'react'
import Navbar from '../../components/Navbar'
import Card_2 from '../../components/Card_2'
import BodyOnlyExample from '../../components/BodyOnlyExample'
function Movie_review() {
  return (
    <div>
        <Navbar />
      <h3 className='m-3'>
        Share Review
      </h3>
      <div className='row m-3'>
        <Card_2 />
        </div>
        
        <h6>Select Users to Share With</h6>
        <table className='m-3' width={'80%'} border={'2px solid black'} cellPadding='20px'>
            <p style={{backgroundColor:'blue', color:'white'}}>
                Jane Smith (jana@example.com)
            </p>
            <p style={{backgroundColor:'blue', color:'white'}}>
                Mike Johnson (mike@example.com)
            </p>
            <p>
                Sarah Williams (sarah@example.com)
            </p>
            <p style={{backgroundColor:'blue', color:'white'}}>
                David Brown (david@example.com)
            </p>
            <p>.</p>
           </table> 
                      <button className='m-3' style={{backgroundColor:'Navy', color:'white'}} width='100px'>Share Review</button>
           <button className='m-3' style={{backgroundColor:'gray', color:'white'}} width='100px'>Cancel</button>
     
    </div>
  )
}

export default Movie_review