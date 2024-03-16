const mongoose = require('mongoose');
const moment = require('moment');
const createdAt = new Date(); 

const formattedDate = moment(createdAt).format('DD-MM-YY HH:mm:ss');
const postSchema = new mongoose.Schema({
  postText: {
    type: String, 
    required: true
  },
  postImage: {
    type: String, 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  createdAt: {
    type: String,
    default: formattedDate
  },
  likes: {
    type: Array,
    default: []
  }
});

 module.exports = mongoose.model('Post', postSchema);

