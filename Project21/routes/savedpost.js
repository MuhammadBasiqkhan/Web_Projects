const mongoose = require('mongoose');
const moment = require('moment');
const createdAt = new Date(); 

const formattedDate = moment(createdAt).format('DD-MM-YY HH:mm:ss');
const SavedpostSchema = new mongoose.Schema({
  postText: {
    type: String, 
    required: true
  },
  postImage: {
    type: String, 
  },
  username: {
    type:String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  createdAt: {
    type: String,
    default: formattedDate
  },
});

 module.exports = mongoose.model('SavedPost', SavedpostSchema);

