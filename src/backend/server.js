const express = require('express')
const http = require('http')
const router = require('./router')
const app = express()
const server = http.createServer(app)


const {addUser,removeUser,getUser,getUserRoom} = require('./User')

const io = require("socket.io")(server,{
    cors: {
        origin: "*"
       }
})

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }) => {
      const { user } = addUser({ id: socket.id, name, room });
        
      socket.join(user.room);
  
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUserRoom(user.room) });
  
      
    });
  

    socket.on('sendmessage',(message,callback) => {
        const user=getUser(socket.id)

        io.to(user.room).emit('message',{user:user.name,text:message})

        callback()
    })

    socket.on('disconnect', () => {
        console.log("User has Left...");
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left..`})
        }
    })
})

app.use(router)


server.listen(5000,() => {
    console.log("Server has Started...");
})