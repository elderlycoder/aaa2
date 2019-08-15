const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');


 router.get('/voronezh', async (req, res) => {
   let cityNumber = 14;
   let result = await Service.getInCity(cityNumber);
   console.log(result);
   res.render('city/voronezh', {
            title: 'Все автосервисы Воронежа,услуги, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result))
      });
   }
);

 router.get('/tula', async (req, res) => {
   let cityNumber = 67;
   let result = await Service.getInCity(cityNumber);
   console.log(result);
   res.render('city/tula', {
            title: 'Все автосервисы в Туле, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result))
      });
   }
);



module.exports = router;