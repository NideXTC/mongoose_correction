const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const mongoose = require("mongoose")
const Student = require('./models/student');

// MongoDB Connection with Mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then((error) => console.log("Database has been connected"))
  .catch((error) => console.log("error"))

app.get('/', (req, res) => {

  //   res.send('Hello World!')
  Student.find({})
    .then((result) => res.send(result))
    .catch((e) => res.send(e.message))
});

app.post('/', (req, res) => {
  Student.create({ first_name: "John", last_name: "Doe", email: "john@doe.com", })
    .then((result) => res.send(result))
    .catch((e) => res.send(e.message))
});

//  PUT query, modify all the entries with the name equal to John, change it to “Bob”.
app.put('/', (req, res) => {
  Student.updateMany(
    { first_name: "John" },
    { first_name: "Bob" })
    .then((result) => res.send(result))
    .catch((e) => {
      console.log(e);
      res.send({ error: true });
    })

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

