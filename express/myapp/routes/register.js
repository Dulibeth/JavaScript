const express = require('express');
const router = express.Router();
const users = require('../users');
const cookieEstado = require('../cookie');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register', user: req.session.user, cookieEstado : cookieEstado.getCookie() });
});

router.post('/', function(req, res, next){
  let user = req.body.name;
  let pass = req.body.pass;
  let conPass = req.body.conpass;
  console.log(users);
  if(!users[user] && pass==conPass){
      users.register(user, pass);
          req.session.user = {username : user};
          res.redirect("/restricted");
    } else {
          req.session.error = "Error";
          res.redirect("/register");
       }
  });

module.exports = router;