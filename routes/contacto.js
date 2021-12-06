var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('contacto') //contacto.hbs
})


module.exports = router;