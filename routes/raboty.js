const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const bodyParser = require("body-parser");


router.get('/', (req, res) => {
   res.render("raboty", {
      title: 'Каталог услуг которые предоставляют автосервисы'
   }); 
});
router.get('/', (req, res) => {
   res.render("control", {
      title: 'Контрольная страница'
   }); 
});

module.exports = router; // экспортируем объект router для использования его за пределами этого файла