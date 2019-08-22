const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/', (req, res) => {
   res.render("addservice", {
      title: 'Добавить автосервис. Контакты, режим работы, услуги, отзывы',
      isAddservice: true
   });
});
router.post("/", urlencodedParser, function (req, res) {
   let name = req.body.name,
       city = req.body.city,
       adress = req.body.adress,
       rezhim = req.body.rezhim,
       email = req.body.email,
       site = req.body.site,
       phone1 = req.body.phone1,
       phone2 = req.body.phone2,
       raboty = Array.prototype.join.call(req.body.raboty, ","),
       oplata = Array.prototype.join.call(req.body.oplata, ","),
       desc = req.body.desc;
   //создаем переменную service куда передаем данные из формы
   const service = new Service (name, city, adress, rezhim, email, site, phone1, phone2, raboty ,oplata , desc);  
   // после этого вызовем метод save который сохранит данные в БД
   service.save();
   if (!req.body) return res.sendStatus(400);
   
     res.redirect("/addservice"); // позже сменить адрес на страницу "поздрадляем, в письме ссылка для доступа в личный кабинет"
   });

module.exports = router; // экспортируем объект router для использования его за пределами этого файла