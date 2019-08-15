const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');

router.get('/', async (req, res) => {
   let result = await Service.getAllCity();
   let res1 = [];
   let res2 = [];
   let res3 = [];
   console.log(result[0]);
   for(let i=0; i < result.length; i++){
      if(i < 26){
         res1.push(result[i]) ;
      } else if (i < 52){
         res2.push(result[i]);
      } else {
         res3.push(result[i]);
      }
   }
   res.render('index1', {
      res1,
      res2,
      res3
     //citys: JSON.parse(JSON.stringify(res1))
    });
 });
// router.get('/', (req, res) => {
//    res.render("index",{
//       title: 'Все автосервисы. Контакты, режим работы, услуги, отзывы'
//    }); 
// });

module.exports = router;