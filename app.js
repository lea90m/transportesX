var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileUpload');

require('dotenv').config();// para que cargue los datos del .env
var session = require('express-session');

var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros');
var serviciosRouter = require('./routes/servicios')
var galeriaRouter = require('./routes/galeria');
var contactoRouter = require('./routes/contacto');
var novedadesRouter = require('./routes/novedades');
var loginRouter = require('./routes/admin/login');
var adminNovedadesRouter = require('./routes/admin/novedades');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'asdaddedeadaed123',
  resave: false,
  saveUninitialized: true,
  cookie:{ secure:true }
}))

secured = async function (req,res,next){
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next()
    } else{
      res.redirect('/admin/login')
    }

  }catch(error){
    console.log(error)
  }
}


app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));//genera un archivo tmp antes de subir dependiendo del peso

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter); //linea 8
app.use('/servicios', serviciosRouter); //linea 9
app.use('/galeria', galeriaRouter); // linea 10 
app.use('/contacto', contactoRouter); // linea 11 
app.use('/novedades', novedadesRouter); // linea 12 
app.use('/admin/login', loginRouter); // 
app.use('/admin/novedades', adminNovedadesRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
