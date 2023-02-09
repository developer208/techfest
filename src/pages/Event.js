import React from 'react'
import '../App.css'

function Event() {
  return (
    <div>
        <div className='main-section'>
            <div className='container'>
                <div className='poster-one'>
                    <div className='council'><h4>Tech</h4></div>
                    <div className='event-img'><img/></div>
                    <div>
                        <h4 className='event-name'>Event Name</h4>
                        <p className='event-date'>15th Feb 2023</p>
                    </div>
                </div>
                <div className='poster-two'></div>
                <div className='poster-three'></div>
            </div>
        </div>
    </div>
  )
}

export default Event
