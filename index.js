let express = require('express'); // подключаем модуль парсер
let app = express(); // создаем приложение

const exphbs = require('express-handlebars');
const session = require('express-session');
const servicesRoutes = require('./routes/services');
const homeRoutes = require('./routes/home');
const rabotyRoutes = require('./routes/raboty');
const controlRoutes = require('./routes/control');
const rabotyallRoutes = require('./routes/rabotyall');
const addserviceRoutes = require('./routes/addservice');
const cityRoutes = require('./routes/city');
const authRoutes = require('./routes/auth');
const varMiddleware = require('./middleware/variables');
const PORT = process.env.PORT || 3000;
//const bodyParser = require("body-parser");
//const urlencodedParser = bodyParser.urlencoded({extended: false});
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
app.engine('hbs', hbs.engine); // регистрируем движок handlebars в express
app.set('view engine', 'hbs'); // указываем hbs в качестве движка 
app.set('views', 'views'); // явно указываем папку для Layouts

//express.static - встроенное middleware  для обслуживания статических файлов, таких как изображения, CSS, JavaScript и т. д.
app.use(express.static('public')); // просто нужно передать имя каталога в котором находяться статические ресурсы
app.use(session({
   secret: 'some secret value',
   resave: false,
   saveUninitialized: false,
   cookie: { secure: true }
}));
app.use(varMiddleware);
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
app.use('/auth', authRoutes);