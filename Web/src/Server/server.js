const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.4vjud.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cors())
app.use(express.json())

console.log("process " , process.env.MONGO_DB_PASS)
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})


client.connect(err => {
  const collection = client.db(process.env.MONGO_DB_NAME).collection("devices");
  
  app.use("/" , require("./routes/todoRoute"))


  // perform actions on the collection object
  client.close();
});


let port = process.env.PORT || 3030
app.listen(port, () => {
    console.log("server is being listen at port : ", port)
})
