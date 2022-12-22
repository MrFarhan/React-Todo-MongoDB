const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const temp = new Todo({ title: title });
  temp.save();
  res.json({ success: true });
});

// router.route("/deleteAll").delete((req, res) => {
//     Todo.deleteOne({ _id: "ObjectId(60c1161a4b0f082b70e225f3)" })

// })

router.route("/delete/:id").delete((req, response) => {
  const id = req.params.id;

  Todo.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      response.json({ success: true });
      console.log("success fully deleted item");
    } else {
      response.json({ success: false });

      console.log("error occured while deleting todo , ", err);
    }
  });
});

router.route("/deleteall").delete(async (req, res) => {
  await Todo.remove({}, (req, res, err) => {
    if (!err) {
      console.log("success fully deleted all");
    } else {
      console.log("error occured while deleting all todo , ", err);
    }
  });
});

router.route("/put/:id").put((req, res) => {
  const title = req.body.title;
  const id = req.params.id;

  Todo.findByIdAndUpdate(
    { _id: id },
    { $set: { title: title } },
    (req, res, err) => {
      if (!err) {
        console.log("success fully updated Todo");
      } else {
        console.log("error occured while updating todo , ", err);
      }
    }
  );
});

router.route("/todos").get((req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

module.exports = router;
