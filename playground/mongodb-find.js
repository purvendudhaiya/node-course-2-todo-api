// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    var db = client.db('TodoApp');

    db.collection('Users').find({name : 'akhil'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch users ',err);
    })

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // })


    //using count to count all todos. from the native node mongo 

    // db.collection('Todos').find({}).count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // })


    //using toArray which returns a promise

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c5d0a3f0776531ee4674801')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // })

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // })

    //client.close();
});