module.exports = function(req, res, next) {
   // создаем переменную isAuth в поле locals объекта res
   res.locals.isAuth = req.session.isAuthenticated; // 

   next();
}