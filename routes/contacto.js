var express = require ('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function (req,res,netx){
    res.render('contacto',{ isContacto: true }) //contacto.hbs
});

router.post('/', async function(req,res,next){  
   //console.log(req.body);
   var nombre = req.body.nombre;
   var email = req.body.email;
   var tel = req.body.tel;
   var mensaje = req.body.comentarios;

   var obj={
       to: 'leandro90m@gmail.com',
       subject: 'contacto desde la web de transportes',
       html: nombre + ' se contacto a traves de la web y quiere saber mas info a este correo: ' + email+ '.<br> Su tel es '  + tel + '.<br> y su Comentario es: ' + mensaje + ' .'
   }

   var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  var info = await transport.sendMail(obj);// envio de los datos

  res.render('contacto',{
      message:'Mensaje enviado correctamente',
      isContacto: true
  })

});

//async - await


module.exports = router;