import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <center>
    <div className='bg-violet-300 '>User:{id} </div>
    </center>
  )
}

export default User