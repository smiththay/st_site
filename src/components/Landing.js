import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className='background'>
        <div className='name'>
          <Link to='' style={{color: 'white', textDecoration: 'none'}} ><b>smith.</b></Link>
        </div>
        <button class="btn third">Join Me</button>
   
        </div>

        
    )
}
