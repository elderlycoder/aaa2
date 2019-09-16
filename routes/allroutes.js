const kurskRoutes = require('./city/kursk');
module.exports = function(app) {
  kurskRoutes(app);
  // Тут, позже, будут и другие обработчики маршрутов 
};