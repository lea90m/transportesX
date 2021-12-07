var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('nosotros',{ isNosotros: true }) //nosotros.hbs
})


module.exports = router;