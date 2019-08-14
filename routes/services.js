const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');


//  router.get('/', async (req, res) => {
    
//    let result = await Service.getAll();
   
//    res.render('services', {
//       services: JSON.parse(JSON.stringify(result))
//       });
//    }
// );
 router.get('/', (req, res) => {
    
   Service.getAll().then(result => {
      res.render('services', { // название страницы в hbs
      services: JSON.parse(JSON.stringify(result))
      });
      }
   );
 });

 router.get('/:id', async (req, res) => {
  console.log(req.params.id);
   const service = await Service.getById(req.params.id);
   console.log(service);
   
   res.render('oneservice', {
     title: `Автосервис`,
     service
    });
 });

module.exports = router; // экспортируем объект router для использования его за пределами этого файла