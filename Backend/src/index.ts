import { Request, Response } from "express";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
import { Socket } from 'socket.io';
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 9000;
const path = require('path');

app.use('/api/auth', require('./routes/auth.routes'));

app.get('/', (req:Request, res:Response) =>{
    res.sendFile(path.resolve(__dirname, '../../frontend/src/index.html'));
});

io.on('connection', (socket: Socket)=>{
    console.log('user connected');
    socket.emit('message', {serverMessage:'user connected'});
    socket.on('some event', (data)=>{
        console.log(data)
    })
})

const start = async() => {
    try{
        await mongoose.connect('mongodb+srv://Kristina:mon88MP@cluster0.yqqiy.mongodb.net/JSMP?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        server.listen(port, () => console.log(`app has been started on port ${port}`));
    } catch(e){
        console.log('server error', e.message);
        process.exit(1)
    }
};

start();


