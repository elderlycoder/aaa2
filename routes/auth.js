const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const router = Router();

router.get('/login', async (req, res) => {
   res.render('auth/login', {
      title: 'Авторизация',
      isLogin: true
   });
});
router.get('/logout', async (req, res) => {
   req.session.destroy(() => { //очищаем сессию
      res.redirect('/')
   });
   
});

router.post('/login', async (req, res) => { //фактически адрес /auth/login
   // в сессии будет хранится isAuthenticated = true, только если мы залогинились на сайте
   req.session.isAuthenticated = true; // объект request -> поле session (добавилось к объекту request после того как подключили модуль express-session) создаем переменную isAuthenticated

   res.redirect('/');

})



module.exports = router;