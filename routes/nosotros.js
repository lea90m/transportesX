var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('nosotros') //nosotros.hbs
})


module.exports = router;