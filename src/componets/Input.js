import React from 'react'


function Input({message,setMessage,sendmessage}) {

    
return (
        <>
        <form>
        <div className="chatbox">
        <input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}}
        placeholder="Type a Message...." id="input1"/>
        <button onClick={sendmessage} id="btnn1">send</button>     
        </div> 
        </form>
        </>
    )
}

export default Input
