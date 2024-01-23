const express = require('express');
const router = express.Router();
const cookieEstado = require('../cookie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('restricted', { title: 'Restricted', user: req.session.user ,cookieEstado : cookieEstado.getCookie()  });
});

module.exports = router;