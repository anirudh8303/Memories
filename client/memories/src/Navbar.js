import React from 'react'
import "./Navbar.css"
import memories from "./memories.png"

function Navbar() {
    return (
        <div className="nav">
       <h3 style={{textAlign:"center", fontSize:"26px", fontFamily:"cursive"}}>Memories</h3>
            <img src={memories} />
        </div>
    )
}

export default Navbar
