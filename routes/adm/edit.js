const {
   Router
} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();
const auth = require('../../middleware/auth'); // подключаем свой модуль для защиты роутов
const Service = require('../../models/service');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
   extended: false
});
const Raboty = require('../../config/raboty');

//const cookieParser = require('cookie-parser');

//router.use(cookieParser());
// выводим сервисы у которых не назначен пароль 
router.get('/', auth, (req, res) => {
   res.render('adm/adm');
})
router.get('/edit-pass', auth, async (req, res) => {
   let result = await Service.getAllNotValid();
   console.log(result);
   let number = result.length;
   // res.cookie("userCity", cityNumber);
   res.render('adm/edit-pass', {
      title: 'Все автосервисы без пароля',
      services: JSON.parse(JSON.stringify(result)),
      number
   });
});

//TODO: роут для перехода для редактирования сервиса
router.get('/:id/edit', async (req, res, next) => {
   if (!req.query.allow) {
      return res.redirect('/');
   }
   let result = await Service.getById(req.params.id);
   //console.log(result);
   let raboty = result[0].oper.split(',');
   let rabotyInt = raboty.map(function(x){ // массив raboty со строковыми элементами вида ['1','3','5'] преобразовываем в массив с числами [1,3,5]
      return parseInt(x, 10)
   })

   // let rab = [];
   // for (let i=0; i < Raboty.length; i++){
   //    rab.push(Raboty[i].value)
   // }
  
   // console.log(rab);

   for (const val of Raboty) {
      let checked = "";
      if (rabotyInt.includes(val.value)) {
           val.checked = "checked";
           console.log(val.checked)
      }
   }
   res.render('adm/edit-service', {
      //checked: checked,
      rabota: Raboty,
      name: result[0].name,
      adress: result[0].adress,
      city: result[0].city,
      rezhim: result[0].rezhim,
      site: result[0].site,
      phone1: result[0].phone1,
      phone2: result[0].phone2,
      id: result[0].id,
      pass: result[0].pass
   })
});

router.post('/edit-service/:id', urlencodedParser, (req, res) => {
   let id = req.params.id;
   let rezhim = req.body.rezhim;
   let email = req.body.email
   let pass = req.body.pass;
   let valid = req.body.valid
   Service.update(rezhim, email, pass, valid, id); //
   console.log(email);
   console.log(req.params.id);

   res.redirect('/adm');
});
//  router.post('/edit-service',urlencodedParser, async (req, res) => {
//     await console.log(req.body)
//     Service.update(req.body);
//     res.redirect('/adm')
//  })

module.exports = router;