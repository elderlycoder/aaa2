const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
let count = 62;
router.get("/zamena-masla-v-dvigatele", function(req, res){ 
   res.render("raboty/to/zamena-masla-v-dvigatele", {
      title: `Замена масла в двигателе, ${count} ближайшие автосервисы, режим работы и цены`
   });
});
router.get("/zamena-maslyanogo-filtra", function(req, res){ 
   res.render("raboty/to/zamena-maslyanogo-filtra", {
      title: 'Замена масляного фильтра: цена от 80 руб. Ближайшие автосервисы с адресами и режимом работы'
   });
});
router.get("/zamena-vozdushnogo-filtra", function(req, res){ 
   res.render("raboty/to/zamena-vozdushnogo-filtra", {
      title: 'Замена воздушного фильтра: цена от 100 руб. Ближайшие автосервисы с адресами и режимом работы'
   });
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