import { useEffect ,useState } from 'react'
import Image from './Image'
import Header from './Header'


import React from 'react'

export default function Geekgallary() {

    const [image , setImage] = useState([])

    useEffect(()=>{

        fetch("https://api.unsplash.com/photos/?client_id=LVArZW9oRNMvtH-ZcEki8PPBhYZzokMPlHCuesGqI-U")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setImage(data)
        }).catch(()=>{
            alert("Invalid Data")
            
        })
    
    } ,[])
    
  return (
    <div>
        <Header/>
       
        <Image image={image}/>
      
        
       
    </div>
   
  )
}
