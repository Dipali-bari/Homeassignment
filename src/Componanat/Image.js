

import React from 'react'
import './image.css'

export default function Image({image}) {
  return (
    <div className='container'>
        {
           
                image.map((e)=>{
                    return (
                      <>
                        <div id="card">
                        <img src={e.urls.small} />
                        <div id='overlay'>
                        <p>{e.user.updated_at}</p>
                        <p>{e.user.username}</p>

                        </div>
                      </div>
                      </>
                      
                 
                    )       
                        
                    })
               }
           
    </div>
  )
}
