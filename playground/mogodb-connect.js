// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to fo',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to enter  todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'purven',
    //     age: '20',
    //     location: 'somelocation'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to enter in Users',err);
    //     }
    //     // or c.l(result.ops[0]._id.getTimeStamp());
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    client.close();
});