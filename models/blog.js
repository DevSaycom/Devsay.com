const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  title: {
    type: String,
    require: true
  },
  slug: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  image: {
    type: String,
    required: false
  },
  image2: {
    type: String,
    required: false
  },
  image3: {
    type: String,
    required: false
  },
  image4: {
    type: String,
    required: false
  },
  image5: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Blog', blogSchema )