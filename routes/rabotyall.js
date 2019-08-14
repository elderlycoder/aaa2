const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});

router.get("/diagnostika-toplivnoy-sistemy", function(req, res){ 
   res.render("raboty/toplivnaya-sistema/diagnostika-toplivnoy-sistemy", {
      title: 'Диагностика топливной системы - что входит и сколько стоит в автосервисе?'
   });
});
router.get("/zamena-toplivnogo-filtra", function(req, res){ 
   res.render("raboty/zamena-toplivnogo-filtra", {
      title: 'Замена топливного фильтра - когда нужно делать и сколько стоит в автосервисе?'
   });
});


module.exports = router;