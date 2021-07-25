import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './join.css'

function Join() {

    const [ name, setName ] = useState( '' )
    const [ room, setRoom ] = useState( '' )

    const submit = ( e ) => {
        if ( name === '' || room === '' ) {
            alert( "Cannot be Empty" )
            e.preventDefault()
        }

    }

    return (
        <>
       <div className="backimg">
            <div className="container">
            <div className="container-box">
                        <h1>Join Room</h1>
                        <input type="text" name="name" placeholder="Name" value={ name }
                            onChange={ ( e ) => { setName( e.target.value ) } } id="input" /><br />

                        <input type="text" name="room" placeholder="Room" value={ room }
                            onChange={ ( e ) => { setRoom( e.target.value ) } } id="input" /><br />

                        <Link to={ `./chat?name=${name}&room=${room}` }>
                            <button onClick={ submit } id="btn-grad">Join</button>
                        </Link>
                        </div>
            </div>
        </div>       
        </>
    )
}

export default Join

