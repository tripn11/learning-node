import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app)//creates a normal http server which would normally had been done by express.
const io = new Server(server);// attaches the websocket server to the http server
const port = process.env.PORT || 3000;
const publicDirectory = path.resolve('./public')

app.use(express.static(publicDirectory))

io.on('connection', (socket) => {
    console.log('New web socket connection')

    socket.on('sendMessage', (message, callback)=>{
        io.emit('message',message)
        callback('Delivered!')
    })

    socket.on('sendLocation', (location,callback) => {
        socket.broadcast.emit('message','https://google.com/maps?q='+location.latitude+','+location.longitude)
        callback();
    })

    socket.on('join', ({username, room}) => {
        socket.join(room) //this connects the socket to a room

        socket.emit('message', 'Welcome')
        socket.broadcast.to(room).emit('message', username + ' has joined')


    })

    socket.on('disconnect', ()=>{
        io.emit('message','A user just left')
    })
})


server.listen(port, ()=>{
    console.log("server is up on port " + port)
})

//socket.emit is to a specific socket
//io.emit is to every socket on the server
//socket.broadcast.emit is to every socket that is not the socket that sent the event

//if sockets are in a room,
//io.to.emit  is to everyone in the room 
//socket.broadcast.to.emit is to everyone in the room except the sender socket