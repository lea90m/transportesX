var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('galeria') //galeria.hbs
})


module.exports = router;