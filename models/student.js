const mongoose = require('mongoose');
const { Schema } = mongoose;

const Student = new Schema({
  first_name: String, // String is shorthand for {type: String}
  last_name: String,
  email: String,
});

module.exports = mongoose.model('Student', Student);