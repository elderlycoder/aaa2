let express = require('express'); // подключаем модуль парсер
let app = express(); // создаем приложение
const exphbs = require('express-handlebars');
const servicesRoutes = require('./routes/services');
const homeRoutes = require('./routes/home');
const rabotyRoutes = require('./routes/raboty');
const controlRoutes = require('./routes/control');
const rabotyallRoutes = require('./routes/rabotyall');
const addserviceRoutes = require('./routes/addservice');
const cityRoutes = require('./routes/city');
const PORT = process.env.PORT || 3000;
//const bodyParser = require("body-parser");
//const urlencodedParser = bodyParser.urlencoded({extended: false});
const mysql = require('mysql');
const con = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'aaa'

});
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
app.engine('hbs', hbs.engine); // регистрируем движок handlebars в express
app.set('view engine', 'hbs'); // указываем hbs в качестве движка 
app.set('views', 'views'); // явно указываем папку для Layouts
app.use(express.static('public'));
app.listen(PORT, function () { // с помощью метода listen передаем номер порта на котором мы хотим слушать наше приложение app
   console.log(`Server is running on port: ${PORT}`);
});
app.use('/', homeRoutes);
app.use('/services', servicesRoutes);
app.use('/addservice', addserviceRoutes);
app.use('/raboty', rabotyRoutes);
app.use('/control', controlRoutes);
app.use('/raboty', rabotyallRoutes);
app.use('/', cityRoutes);

// app.get("/addservice", function(req, res){ // при обращении по адресу /addservice
//    res.render("addservice", {
//       title: 'Добавить автосервис. Контакты, режим работы, услуги, отзывы'
//    });  // Вывод шаблона представления
// });

// app.post("/addservice", urlencodedParser, function (req, res) {
         
//    if (!req.body) return res.sendStatus(400);
//    const name = req.body.name;
//    const city = req.body.city;
//    const adress = req.body.adress;
//    const rezhim = req.body.rezhim;
//    const email = req.body.email;
//    const phone1 = req.body.phone1;
//    const phone2 = req.body.phone2;
//    const oper =Array.prototype.join.call(req.body.raboty, ",");
//    const oplata = Array.prototype.join.call(req.body.oplata, ",");
//    const desc = req.body.desc;
   
   
//    con.query("INSERT INTO service (name, city, adress, rezhim, email, phone1, phone2, oper, oplata, description) VALUES (?,?,?,?,?,?,?,?,?,?)", [name, city, adress, rezhim, email, phone1, phone2, oper, oplata, desc], function(err, data) {
//      if(err) return console.log(err);
//      res.redirect("/addservice"); // позже сменить адрес на страницу "поздрадляем, в письме ссылка для доступа в личный кабинет"
//    });
// });

// подключение страницы с описанием конкретной услуги
// app.get("/raboty/diagnostika-toplivnoy-sistemy", function(req, res){ 
//    res.render("raboty/diagnostika-toplivnoy-sistemy", {
//       title: 'Диагностика топливной системы - что входит и сколько стоит в автосервисе?'
//    });
// });