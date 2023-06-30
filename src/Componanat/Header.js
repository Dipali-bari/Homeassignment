import './Header.css';


import { useState } from 'react';




function Header(){

    const [text , setText] = useState("")

    function addTask(){




    }
   

  
    return(
        <div className="nav"> 
            <div className="logo">
                {/* <img src="https://classes.geekster.in/images/logo/Geekster.svg" alt="logo"/>  */}
                <h2>Geek Gallary</h2>
                
            </div>
            <p style={{color:"white"}}></p>
            <div className="row">
                <input onChange={(e)=>setText(e.target.value)} type="text" id= 'inputbox'placeholder="Enter some text"/>
                <button onClick={addTask}>Search</button>
               
            </div>
        </div>
    );
}
export default Header;