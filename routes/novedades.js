var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/NovedadesModels');
var cloudinary = require('cloudinary').v2;

router.get('/', async function(res, res, next){

    var novedades = await novedadesModel.getNovedades();
    
    novedades = novedades.map(novedad =>{
        if(novedad.img_id){
            const imagen = cloudinary.url(novedad.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return{
                ...novedad,
                imagen
            }
        }
        else{
            return{
                ...novedad,
                imagen:''
            }
        }
    });
    
    res.render('novedades', {
        isNovedades:true, 
        novedades
    })
    


})




module.exports = router;