var express = require ('express');
var router = express.Router();

router.get('/', function (req,res,netx){
    res.render('servicios', { isServicios: true }) //servicios.hbs
})


module.exports = router;