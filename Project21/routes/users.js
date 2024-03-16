const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/Printiestapp')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dp: {
    type: String,
    default: 'defaultimage.jpg'
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post' 
  }],
  Savedposts: [{
    type: Schema.Types.ObjectId,
    ref: 'SavedPost' 
  }],
  token:{
    type:String,
    default:''
  }
  ,
 
});


userSchema.plugin(plm)

module.exports = mongoose.model('User', userSchema);



