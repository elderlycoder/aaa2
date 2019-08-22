const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();


router.get('/', (req, res) => {
   res.render("index",{
      title: 'Все автосервисы. Контакты, режим работы, услуги, отзывы', 
      isHome: true
   }); 
});

module.exports = router;