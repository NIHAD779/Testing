const express = require('express');
const app = express();
const mongoose= require('mongoose');


// middleware
  

// routes
app.get('/',(req,res)=> {
    res.send('We are home')
    console.log('home')
});

app.get('/posts',(req,res)=> {
    res.send('We are posts')
    console.log('posts')
}) ;

mongoose.connect('mongodb+srv://mnihad:silver121@cluster0.fgly4eo.mongodb.net/trainingDB?retryWrites=true&w=majority', () => {
    console.log('connected to DB!!')
})
app.listen(3000);