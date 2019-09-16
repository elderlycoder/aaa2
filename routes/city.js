const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');
const cookieParser = require('cookie-parser');
const store = require('store');
router.use(cookieParser());

   
router.get('/voronezh', async (req, res) => {
   const cityNumber = 14;
   let result = await Service.getInCity(cityNumber); // typeof - object
   let numberOfServices = result.length;
   //store.set('userCity', {name: 'cityNumber'});
   res.cookie("userCity", cityNumber);
   res.render('city/voronezh', {
            city: cityNumber,  // данные для localStorage 
            title: 'Все автосервисы Воронежа,услуги, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result)),
            number: numberOfServices
            });
   });


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
 router.get('/kursk', async (req, res) => {
   let cityNumber = 30;
   let result = await Service.getInCity(cityNumber);
   let getScript = true;
   console.log(result);
   res.render('city/kursk', {
            title: 'Все автосервисы в Курске, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result)),
            getScript: getScript
      });
   }
);



module.exports = router;