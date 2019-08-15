//const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
//const router = Router();
//const bodyParser = require("body-parser");
//const urlencodedParser = bodyParser.urlencoded({extended: false});
const mysql = require('mysql');
const con = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'aaa'

});

class Service {
   constructor(name, city, adress, rezhim, email, site, phone1, phone2, oper, oplata, desc) { // при создание нового объекта класса принимаем такие параметры 
      this.name = name;
      this.city = city;
      this.adress = adress;
      this.rezhim = rezhim;
      this.email = email;
      this.site = site;
      this.phone1 = phone1;
      this.phone2 = phone2;
      this.oper = oper;
      this.oplata = oplata;
      this.desc = desc;

   }
   save() {
      con.query("INSERT INTO service (name, city, adress, rezhim, email, site, phone1, phone2, oper, oplata, description) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [this.name, this.city, this.adress, this.rezhim, this.email, this.site, this.phone1, this.phone2, this.oper, this.oplata, this.desc], function (err, data) {
         if (err) return console.log(err);
      });
   }


   static getAll() {
      return new Promise((resolve, reject) => {
         con.query(`SELECT * FROM service`,
            (err, result) => {
               if (err) {
                  reject(err);
               } else {
                  resolve(result);
               }
            }
         );
      });
   }
   static getAllCity() {
      return new Promise((resolve, reject) => {
         con.query(`SELECT * FROM city`,
            (err, result) => {
               if (err) {
                  reject(err);
               } else {
                  resolve(result);
               }
            }
         );
      });
   }
   
      static getCity(paramID){
      return new Promise((resolve, reject) => {
         con.query(`SELECT * FROM city WHERE id_city=` + paramID,
            (err, result) => {
               if (err) {
                  reject(err);
               } else {
                  resolve(result);
               }
            }
         );
      });
      }
   static getInCity(cityNumber) {
      return new Promise((resolve, reject) => {
         con.query(`SELECT * FROM service WHERE city=` + cityNumber,
            (err, result) => {
               if (err) {
                  reject(err);
               } else {
                  resolve(result);
               }
            }
         );
      });
   }
      static getById(paramID){
      return new Promise((resolve, reject) => {
         con.query(`SELECT * FROM service WHERE id=` + paramID,
            (err, result) => {
               if (err) {
                  reject(err);
               } else {
                  resolve(result);
               }
            }
         );
      });
      }
      // static async getById(id) { // получение отдельного сервиса по id
      // const service = await Service.getAll(); // получаем все сервисы с помощью метода getAll из класса Service
      //    for(let i=0; i<service.length; i++){
      //       if (service[i].id == id){
      //          let a = service[i];
      //          console.log(typeof a);
      //          return a;
      //       }
      //    }
      // }
     
         // static getCervicesInCityById(paramID){
      // return new Promise((resolve, reject) => {
      //    con.query(`SELECT * FROM service WHERE city=` + paramID,
      //       (err, result) => {
      //          if (err) {
      //             reject(err);
      //          } else {
      //             resolve(result);
      //          }
      //       }
      //    );
      // });
      // }
}
module.exports = Service;