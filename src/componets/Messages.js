import React from 'react'
import Message from './Message'

function Messages({messages,name}) {
    return (
        <>
         <div className="Messages">
        {
            messages.map((message,idx) => <div key={idx}>
            <Message message={message} name={name}/></div> )
        }     
        </div>  
        </>
    )
}

export default Messages
