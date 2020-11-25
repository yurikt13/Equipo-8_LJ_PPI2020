const express =require('express');
const usuario = express.Router();

const mysqlConnection = require ('../db/database');



usuario.get('/alarma', (req, res) => {
  
  mysqlConnection.query('SELECT * FROM alarma ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
 });



usuario.post('/nueva-alarma',(req,res)=>{

const { cuidado, fecha, hora, cada_cuando, id_planta } = req.body;

let alarmaN = [cuidado, fecha, hora, cada_cuando];

let nuevaAlarma = `INSERT INTO alarma (cuidado, fecha, hora, cada_cuando)
                  VALUES(?,?,?,?)`;
mysqlConnection.query(nuevaAlarma, alarmaN, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Nueva alarma agregada`, })
  });
}); 



usuario.put('/alarma/:id', (req, res) => {
  const { cuidado, fecha, hora, cada_cuando } = req.body;
  const { id_alarma } = req.params;
  mysqlConnection.query(`UPDATE alarma SET cuidado = ?, fecha = ?, hora = ?, cada_cuando = ?`,
  [cuidado, fecha, hora, cada_cuando], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Alarma actualizada'});
    } else {
      console.log(err);
    }
  });
});



usuario.delete('/alarma/:id_alarma', (req, res) => {
  const { id_alarma } = req.params;
  mysqlConnection.query('DELETE FROM alarma WHERE id_alarma = ?',
   [id_alarma], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Alarma eliminada'});
    } else {
      console.log(err);
    }
  });
});


module.exports = usuario;