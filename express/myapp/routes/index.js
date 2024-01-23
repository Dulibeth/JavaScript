const express = require('express');
const router = express.Router();
const users = require('../users');
const cookieEstado = require('../cookie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio', user: req.session.user, cookieEstado: cookieEstado.getCookie() });
});

router.post('/', function(req,res,next){
  let cookieForm = req.body.cookie;
  cookieEstado.setCookie(cookieForm);
  res.redirect(req.originalUrl);
})

module.exports = router;
