const express = require('express');
const router = express.Router();

//GET Routes

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET emporium page. */
router.get('/emp', function (req, res, next) {
  res.render('emporium');
});

/* GET farmingTips page. */
router.get('/farmingTips', function (req, res, next) {
  res.render('farmingTips');
});

/* GET landDetails/login page. */
router.get('/login', function (req, res, next) {
  res.render('loginPage');
});

/* GET landDetails/login page. */
router.get('/reg', function (req, res, next) {
  res.render('registerPage');
});




module.exports = router;
