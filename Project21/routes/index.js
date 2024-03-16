var express = require('express');
var router = express.Router();
const UserModel = require("./users")
const postModel = require("./posts")
const nodemailer = require("nodemailer")
const randomstring = require("randomstring");
const passport = require('passport');
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(UserModel.authenticate()));
const uploads = require("./multer")
const bodyParser = require('body-parser');
const savedpost = require('./savedpost');
const config = require('../public/configuration/config');
const bcrypt = require('bcryptjs');
router.use(bodyParser.json());

router.post('/save', isLoggedIn, async (req, res) => {
  const data = req.body;
  const user = await UserModel.findOne({ username: req.session.passport.user })
  const saveddata = await savedpost.create({
    postText: data.PostText,
    postImage: data.postimage,
    username: data.username,
    userID: user._id
  })

  user.Savedposts.push(saveddata._id)
  await user.save()

  res.json({ message: 'Saved post successfully!' });

});

router.get('/', function (req, res, next) {
  res.render('index');
});


router.get('/login', function (req, res, next) {
  res.render('login', { error: req.flash("error") });
});


router.get('/edit', isLoggedIn, async function (req, res, next) {
  const user = await UserModel.findOne({ username: req.session.passport.user })
  res.render('edit', { user });
});


router.post("/updatedata", isLoggedIn, async (req, res) => {

  const user = await UserModel.findOne({ username: req.session.passport.user })

  const updatedUser = await UserModel.findByIdAndUpdate(user._id, {
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
  }, { new: true });

  res.redirect("/profile?msg=updateprofile")
}
)

router.get('/DeleteAccount', isLoggedIn, async function (req, res, next) {
  const user = await UserModel.findOne({ username: req.session.passport.user })

  const deleleacc = await UserModel.findOneAndDelete({
    username: user.username
  })

  res.redirect("/login")

});


router.get('/feed', isLoggedIn, async function (req, res, next) {
  const user = await UserModel.findOne({ username: req.session.passport.user })
  const post = await postModel.find().populate("user")

  res.render('feed', { post, user });
});


router.get('/profile', isLoggedIn, async function (req, res) {
  let message = req.query.msg;
  const userdetails = await UserModel.findOne({
    username: req.session.passport.user
  }).populate('posts').populate('Savedposts')

   console.log(message)
   if(message==="messagesent"){
     sendRegistertaionverification(userdetails.fullname , userdetails.email)
   }
    res.render("profile", {userdetails , message});
  
});


router.post("/register", (req, res) => {
  const { username, email, fullname } = req.body;
  const newUser = new UserModel({ username, email, fullname });

  UserModel.register(newUser, req.body.password)
    .then(function () {
      passport.authenticate('local')(req, res, function () {

        
        res.redirect('/profile?msg=messagesent');
      });
    })


})

router.post("/upload", isLoggedIn, uploads.single("file"), async (req, res, next) => {
  if (!req.file) {
    return res.status(404).send("No files were uploaded")
  }

  const user = await UserModel.findOne({ username: req.session.passport.user })

  const post = await postModel.create({
    postImage: req.file.filename,
    postText: req.body.postCaption,
    user: user._id,

  })


  user.posts.push(post._id)
  await user.save()
  res.redirect('/profile?msg=postupload')


}
)

router.post("/fileupload", isLoggedIn, uploads.single("imagefile"), async (req, res, next) => {
  if (!req.file) {
    return res.status(404).send("No files were uploaded")
  }


  const user = await UserModel.findOne({ username: req.session.passport.user })
  user.dp = req.file.filename;

  // console.log(req.file.filename)
  await user.save();

  res.redirect("/profile?msg=profileupload")

}
)


router.post("/login", passport.authenticate('local', {
  successRedirect: "/profile?msg=loginprofile",
  failureRedirect: "/login",
  failureFlash: true
}), function (req, res) { });

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});



router.get('/forget', function (req, res, next) {
  res.render("forget");
});


router.post('/forget', async function (req, res, next) {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (user) {
      const token = randomstring.generate();
      
      user.token = token;
      await user.save();
      
      await sendPasswordResetEmail(user.fullname, req.body.email, token);

      res.send("Password reset link has been sent to your email.");
    } else {
      res.redirect("/forget");
    }
  } catch (error) {
    console.error(error);
    res.send("Something went wrong. Please try again later.");
  }
});



const sendPasswordResetEmail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword
      }
    });

    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: 'Reset your Password',
      html: `<p>Hi ${name},</p> <p>Please click the following link to reset your password: <a href="http://localhost:3000/resetpassword?token=${token}">Reset Password</a>.</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const sendRegistertaionverification = async (name, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword
      }
    });

    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: 'Registerated Verification Email',
      html: `<p>Hi ${name},</p> <p>You Successfull Registered In Pintered App</p>  <p> <button style="background-color: #007bff; /* Blue */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 8px;
      border: 2px solid #007bff;">
      <a href="http://localhost:3000/profile" style="text-decoration: none; color: white;">Verify Registered</a>
    </button>
    </p>`
    };

    const info = await transporter.sendMail(mailOptions);
  
  } catch (error) {
    console.error(error);
    throw error;
  }
};


router.get("/resetpassword", async (req, res) => {
  const token = req.query.token;
  try {
    const user = await UserModel.findOne({ token: token });

    if (!user) {
      return res.send("Invalid token.");
    }

    res.render("resetpassword", { user });
  } catch (error) {
    console.error(error);
    res.send("Something went wrong. Please try again later.");
  }
});

router.post("/resetpassword", async (req, res) => {
  const token = req.body.token;
  const newPassword = req.body.password;

  try {
  
    const user = await UserModel.findOne({ token: token });

    if (!user) {
      return res.send("Invalid token.");
    }


    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.token = '';
    await user.save();
   

    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.send("Something went wrong. Please try again later.");
  }
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}





module.exports = router;
