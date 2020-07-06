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
 
//tampilkan semua data admin
app.get('/views/admins',(req, res) => {
  let sql = "SELECT * FROM admins";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan semua data jaminan
app.get('/views/jaminan',(req, res) => {
  let sql = "SELECT * FROM jaminan";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan semua data layananplus
app.get('/views/layananplus',(req, res) => {
  let sql = "SELECT * FROM layananplus";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan semua data products
app.get('/views/products',(req, res) => {
  let sql = "SELECT * FROM products";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//tampilkan data admin berdasarkan Nim
app.get('/views/admins/:nim',(req, res) => {
  let sql = "SELECT * FROM admins WHERE Nim="+req.params.nim;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan data jaminan berdasarkan kode jaminan
app.get('/views/jaminan/:kd_jaminan',(req, res) => {
  let sql = "SELECT * FROM jaminan WHERE Kd_jaminan="+req.params.Kd_jaminan;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan data layananplus berdasarkan id layanan
app.get('/views/layananplus/:id_layanan',(req, res) => {
  let sql = "SELECT * FROM layananplus WHERE Id_layanan="+req.params.Id_layanan;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan data products berdasarkan kode products
app.get('/views/products/:kd_product',(req, res) => {
  let sql = "SELECT * FROM products WHERE Kd_product="+req.params.Kd_product;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Tambahkan data admin baru
app.post('/views/admins',(req, res) => {
  let data = {nim: req.body.nim, username: req.body.username, password: req.body.password };
  let sql = "INSERT INTO admins SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Tambahkan data jaminan baru
app.post('/views/jaminan',(req, res) => {
  let data = {Kd_jaminan: req.body.Kd_jaminan, Gmbr_jaminan: req.body.Gmbr_jaminan, Nm_jaminan: req.body.Nm_jaminan, Deskripsi_jaminan: req.body.Deskripsi_jaminan };
  let sql = "INSERT INTO jaminan SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Tambahkan data layananplus baru
app.post('/views/layananplus',(req, res) => {
  let data = {Id_layanan: req.body.Id_layanan, Gmbr_layanan: req.body.Gmbr_layanan, Nm_layanan: req.body.Nm_layanan, Deskripsi_layanan: req.body.Deskripsi_layanan };
  let sql = "INSERT INTO layananplus SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Tambahkan data products baru
app.post('/views/products',(req, res) => {
  let data = {Kd_product: req.body.Kd_product, Gmbr_product: req.body.Gmbr_product, Nm_product: req.body.Nm_product, Deskripsi_product: req.body.Deskripsi_product, Tgl_terbit: req.body.Tgl_terbit };
  let sql = "INSERT INTO jaminan SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Edit data admin berdasarkan Nim
app.put('/views/admins/:Nim',(req, res) => {
  let sql = "UPDATE admins SET Nim='"+req.body.nim+"',  username='"+req.body.username+"',  password='"+req.body.password+"' WHERE id ="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Edit data jaminan berdasarkan kode jaminan
app.put('/views/jaminan/:kd_jaminan',(req, res) => {
  let sql = "UPDATE jaminan SET Kd_jaminan='"+req.body.Kd_jaminan+"',  Gmbr_jaminan='"+req.body.Gmbr_jaminan+"',  Nm_jaminan='"+req.body.Nm_jaminan+"', Deskripsi_jaminan='"+req.body.Deskripsi_jaminan+"', WHERE Kd_jaminan ="+req.params.Kd_jaminan;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Edit data layananplus berdasarkan id jaminan
app.put('/views/layananplus/:id_layanan',(req, res) => {
  let sql = "UPDATE layanan SET Id_layanan='"+req.body.Id_layanan+"',  Gmbr_layanan='"+req.body.Gmbr_layanan+"',  Nm_layanan='"+req.body.Nm_layanan+"', Deskripsi_layanan='"+req.body.Deskripsi_layanan+"', WHERE Id_layanan ="+req.params.Id_layanan;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Edit data products berdasarkan kode products
app.put('/views/products/:kd_products',(req, res) => {
  let sql = "UPDATE products SET Kd_product='"+req.body.Kd_product+"',  Gmbr_product='"+req.body.Gmbr_product+"',  Nm_product='"+req.body.Nm_product+"', Deskripsi_product='"+req.body.Deskripsi_product+"', Tgl_terbit='"+req.body.Tgl_terbit+"', WHERE Kd_product ="+req.params.Kd_product;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete data admin berdasarkan Nim
app.delete('/views/admins/:Nim',(req, res) => {
  let sql = "DELETE FROM admins WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete data jaminan berdasarkan kode jaminan
app.delete('/views/jaminan/:kd_jaminan',(req, res) => {
  let sql = "DELETE FROM jaminan WHERE kd_jaminan="+req.params.Kd_jaminan+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete data layananplus berdasarkan id layanan
app.delete('/views/layananplus/:id_layanan',(req, res) => {
  let sql = "DELETE FROM layananplus WHERE Id_layanan="+req.params.Id_layanan+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete data products berdasarkan kode product
app.delete('/views/products/:kd_product',(req, res) => {
  let sql = "DELETE FROM products WHERE kd_product="+req.params.Kd_product+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});