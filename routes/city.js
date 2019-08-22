const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');
const cookieParser = require('cookie-parser');

router.use(cookieParser());
    
   
 router.get('/voronezh', async (req, res, next) => {
   const cityNumber = 14;
   let result = await Service.getInCity(cityNumber);
   
   res.render('city/voronezh', {
            title: 'Все автосервисы Воронежа,услуги, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result))
            });
            next();
   });

router.use('/voronezh', (req, res)=>{ 
      res.cookie("userData", "users11"); 
      res.send('user data added to cookie'); 
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



module.exports = router;