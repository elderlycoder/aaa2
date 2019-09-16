const Service = require('../../models/service');

module.exports = function(app) {


   app.get('/kursk', async (req, res) => {
   let cityNumber = 30;
   let result = await Service.getInCity(cityNumber);
   let getScript = true;
   console.log(result);
   res.render('city/kursk', {
            title: 'Все автосервисы в Курске, адреса, режим работы, контакты',
            services: JSON.parse(JSON.stringify(result)),
            getScript: getScript
      });
   });

   app.get('/kursk/vse-uslugi/audi-80', async(req, res) => {
      console.log(req)
      res.render('city/kursk1', {
         title: 'Автосервисы в Курске по ремонту Ауди'
      });
   });

};



