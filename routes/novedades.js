var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('novedades',{ isNovedades: true }) //novedades.hbs
})


module.exports = router;