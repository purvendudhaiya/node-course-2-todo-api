// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c5d0a3f0776531ee4674801')
    },{
        //learn about mongodb update operators
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    //client.close();
});