const express = require('express');
const Contestant = require('../../model/contestant');
const ObjectId = require('mongodb').ObjectID;
const routes = express();

routes.get('/get-contestant',(req,res)=> {
    Contestant.find({})
        .then(user=>{
            res.send(user);
        })
        .catch(err=>console.log(err));
});

routes.get('/get-contestant/:id',(req,res)=> {
    const id = req.params.id;
    Contestant.findOne({_id:ObjectId(id)})
        .then(user=>{
            res.send(user);
        })
        .catch(err=>console.log(err));
});

module.exports = routes;
