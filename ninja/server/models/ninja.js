const mongoose = require('mongoose');

const { Schema } = mongoose;

const ninjaSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: 13
  },
  belt: {
    type: String,
    minlength: 4,
    trim: true
  },
  location: {
    type: String,
    minlength: 4,
    required: true,
    trim: true
  }
})
module.exports = mongoose.model('Ninja', ninjaSchema);
