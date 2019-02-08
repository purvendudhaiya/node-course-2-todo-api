var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');
  
var app= express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});



// var newTodo = new Todo({
//     text: 'Something to do'
// });

// //save returns a Promise
// newTodo.save().then((doc)=>{
//     console.log('Saved Todo',doc);
// },(e)=>{
//     console.log('Unable to save todo');
// });

//user model store email password
//user has email..req it... trim it.. type string.. minlength of 1

