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
      res.redirect('auth/login#login')
   });
   
});

router.post('/login', async (req, res) => {
   req.session.isAuthenticated = true; // объект request -> поле session (добавилось к объекту request после того как подключили модуль express-session) создаем переменную isAuthenticated
   res.redirect('/');

})



module.exports = router;