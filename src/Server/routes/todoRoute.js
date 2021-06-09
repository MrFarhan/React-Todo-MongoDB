const express = require('express')
const router = express.Router();
const Todo = require('../models/todoModel')

router.route("/create").post((req,res) => {
    const title = req.body.title
    console.log("req.body is " , req.body)
    const temp = new Todo({title:title})
    temp.save() 
})

router.route("/todos").get((req, res) =>{
    Todo.find().then(todo =>res.json(todo))
})

module.exports = router;