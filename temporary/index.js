const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gardaoto'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//tampilkan semua data product
app.get('/teams',(req, res) => {
  let sql = "SELECT * FROM teams";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//tampilkan data product berdasarkan id
app.get('/teams/:Nim',(req, res) => {
  let sql = "SELECT * FROM teams WHERE Nim="+req.params.Nim;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Tambahkan data product baru
app.post('/teams',(req, res) => {
  let data = {    Nim : req.body.Nim,
    Nama : req.body.Nama,
    Id_posisi : req.body.Id_posisi,
    Id_jurusan : req.body.Id_jurusan,
    Id_kelas : req.body.Id_kelas,
    Keterangan : req.body.Keterangan,
    Tgl_lahir : req.body.Tgl_lahir, };
  let sql = "INSERT INTO teams SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Edit data product berdasarkan id
app.put('/teams/:id',(req, res) => {
  let sql = "UPDATE teams SET Nim='"+req.body.Nim+"',  Nama='"+req.body.Nama+"',  Id_posisi='"+req.body.Id_posisi+"', Id_jurusan='"+req.body.Id_jurusan+"',Id_kelas='"+req.body.Id_kelas+"', Keterangan='"+req.body.Keterangan+"', Tgl_lahir='"+req.body.Tgl_lahir+"' WHERE Nim ="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete data product berdasarkan id
app.delete('/teams/:id',(req, res) => {
  let sql = "DELETE FROM teams WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});