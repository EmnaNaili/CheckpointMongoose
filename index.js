const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
 app= express();

const Person = require('./Models/personModel');

 app.use(express.json());

//create instance of person
 let P1 = new Person({

    name:"Emna",
    age: 22,
   favoriteFoods:['Burger', 'Pizza']

 })

 //create multiple instances
 Person.create({

 name:"Ranim",
    age: 22,
   favoriteFoods:['Burger', 'Cheese']

 })

  Person.create({

 name:"Aziz",
    age: 22,
   favoriteFoods:['Pasta', 'Rice']

 })


// save first instance created
 P1.save().then( doc =>{

         console.log(doc)
 }).catch(err => {

    console.log(err)
 })

 //update first instance age using save 
 P1.age=23;
P1.save()

// find instances on name Emna
 Person.find({name:"Emna"}).then(doc =>{

    console.log(doc)
 })

// find one instance of name ranim
Person.findOne({name:"Ranim"}).then(doc =>{

    console.log(doc)
})

Person.findById({_id:"61901811c7956c686613a4a7"}).then(doc =>{

    console.log(doc)
})

// update one instance of name aziz
Person.updateOne({name:'Aziz'},{age: '24'})

// find one instance by id and delete it
Person.findByIdAndDelete({_id: "61901811c7956c686613a4a6"}).then(
    console.log("deleted")
)

// remove and istance of name emna
Person.remove({name:'Emna'});

//helpers

Person.find({favoriteSeries:"Burger"}).limit(2).select("-age").then( doc=>{console.log(doc)}).catch(err => console.log(err))

     



app.listen(3001, () => {

    console.log(" we are connected");
})