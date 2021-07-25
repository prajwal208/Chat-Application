import React from 'react'
import './chat.css'

function Navbar( { room } ) {
    return (
        <>
            <div className="navbarcontent">
                <div className="room">
                        <h3> Room Name: { room } </h3>
                    </div>

                    <div className="clsbtn">
                        <a href='/'>&#x2716;</a>
                    </div>
                </div>
                
           

        </>
    )
}

export default Navbar
