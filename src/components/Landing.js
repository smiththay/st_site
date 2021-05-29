import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className='background'>
            <div className='name'>
                <Link to='/home' style={{ color: 'white', textDecoration: 'none' }} ><b>smith.</b></Link>
            </div>
            <div className='full'>
               <i> fullstack developer </i>
            </div>
        </div>


    )
}
