const express = require('express')
const router = express.Router();
const Todo = require('../models/todoModel')

router.route("/create").post((req, res) => {
    const title = req.body.title
    const temp = new Todo({ title: title })
    temp.save()
})

router.route("/deleteAll").delete((req, res) => {
    Todo.deleteOne({ _id: "ObjectId(60c1161a4b0f082b70e225f3)" })

})

router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete({ _id: id }, (req, res, err) => {
        if (!err) {
            console.log("success fully deleted item")
        } else {
            console.log("error occured while deleting todo , ", err)
        }
    })

})

router.route("/todos").get((req, res) => {
    Todo.find().then(todo => res.json(todo))
})

module.exports = router;