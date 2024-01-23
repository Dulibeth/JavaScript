const express = require('express');
const router = express.Router();
const users = require('../users');
const cookieEstado = require('../cookie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', user: req.session.user, cookieEstado : cookieEstado.getCookie()} );
});

router.post('/', function(req, res, next){
  let user = req.body.name;
  if(users[user]){
      users.comparePass(req.body.pass, users[user].hash, function(err, result){
          if(result){
              req.session.user = users[user];
              req.session.message = "Welcome!"
              res.redirect("/restricted");
          } else {
              req.session.error = "Incorrect user or password";
              res.redirect("/login");
          }
      });
  } else {
      req.session.error = "Incorrect user or password";
      res.redirect("/login");
  }
});

module.exports = router;
