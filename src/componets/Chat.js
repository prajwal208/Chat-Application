import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import {io} from 'socket.io-client'
import Navbar from './Navbar.js'
import Input from './Input.js'
import Messages from './Messages.js'
import './chat.css'

let socket
const Chat = ( {location} ) => {

const[name,setName] = useState('')
const [room,setRoom] = useState('')
const [message,setMessage] = useState('')
const[messages,setMessages] = useState([])
const ENDPOINT = 'localhost:5000'


useEffect(() => {
    const {name,room}= queryString.parse(location.search);
     socket = io(ENDPOINT)
    
    setName(name)
    setRoom(room)

    socket.emit('join',{name,room})
    
    return () => {
        socket.emit('disconnectt')
        socket.off()
    }
},[ENDPOINT,location.search])

useEffect(() => {
    socket.on('message',(message) => {
    setMessages([...messages,message])
    })
},[messages])

const sendmessage = (e) => {
    e.preventDefault()

    if(message){
        socket.emit('sendmessage',message, ()=> setMessage(''))
    }
}



console.log(messages,message);

    return (
        <>
        <div className="chat-container">
        <Navbar room={room}/>
         <Messages messages={messages} name={name}/>
        </div>
        <Input message={message} setMessage={setMessage} sendmessage={sendmessage}/>
        </>
    )
}

export default Chat
