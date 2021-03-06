const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const Service = require('../models/service');

 router.get('/', (req, res) => {
    Service.getAll().then(result => {
      res.render('services', { 
        title: 'Все автосервисы',// название страницы в hbs
        services: JSON.parse(JSON.stringify(result)),
        isServices: true
      });
      }
   );
 });
// вывод отдельного сервиса
 router.get('/:id', async (req, res) => {
   let result = await Service.getById(req.params.id); //
   console.log(result);
   
   res.render('oneservice', {
     name: result[0].name,
     adress: result[0].adress,
     title: `Автосервис ${result[0].name}`
    
    });
 });

module.exports = router; // экспортируем объект router для использования его за пределами этого файла