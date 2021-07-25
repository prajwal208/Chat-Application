import React from 'react'

function Message({message:{user ,text},name}) {

let issentbyCurrentUser = false;

const trimmedName = name.trim().toLowerCase()

if(user===trimmedName){
    issentbyCurrentUser=true
}


    return (
        issentbyCurrentUser ?
        (
            <div className="messagecontainer">
                <p>{trimmedName}</p>
                <div className="msgbox" style={{backgroundColor:"#2b39f5",color:"white"}}>
                    <p>{text}</p>
                </div>
            </div>
        ):

        (
            <div className="messagecontainer">
            <div className="msgbox" style={{backgroundColor:"white",marginLeft:"270px"}}>
                <p className="user">{text}</p>
            </div>
            <p>{user}</p>
        </div>
        )
    )
}

export default Message
