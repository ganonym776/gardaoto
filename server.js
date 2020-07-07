var path = require('path');
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination : path.join(__dirname + './assets/img/uploads'),
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
    }
});
const upload = multer({
    storage : storage
}).single('Foto');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/assets/'))
app.use(express.static(__dirname + '/page/'))
// app.use(express.static(__dirname + '/'))
var response = require('./res');
var routes = require('./routes');
routes(app);
//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gardaoto'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

// fase login
app.post('/login', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		conn.query('SELECT * FROM admins WHERE Username = ? AND Password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				res.redirect('/dashboard.html');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

//tampilkan semua data messages
app.get('/messages', (req, res) => {
    let sql = "SELECT * FROM messages";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Tambahkan message baru
app.post('/messages', (req, res) => {
    let data = {
        Email: req.body.Email,
        Judul_massages: req.body.Title,
        Isi_massages: req.body.Isi
    };
    let sql = "INSERT INTO messages SET ?";
    let query = conn.query(sql, data, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            res.redirect('/kontak.html')
        }
    });
});

//Delete data messages berdasarkan id
app.delete('/messages/:id', (req, res) => {
    let sql = "DELETE FROM messages WHERE Id_massages=" + req.params.id + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan semua data team
app.get('/team', (req, res) => {
    let sql = "SELECT * FROM team";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan team  berdasarkan id
app.get('/team/:id', (req, res) => {
    let sql = "SELECT * FROM team WHERE Nim=" + req.params.id+"";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Tambahkan team baru
app.post('/team', upload, (req, res, next) => {
    let data = {
        Nim: req.body.Nim,
        Nama: req.body.Nama,
        Foto: req.file.Foto,
        Posisi: req.body.Posisi,
        Jurusan: req.body.Jurusan,
        Kelas: req.body.Kelas,
        Keterangan: req.body.Keterangan,
        Tgl_lahir: req.body.Tgl_lahir
    };
    let sql = "INSERT INTO team SET ?";
    let query = conn.query(sql, data, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            res.redirect('/Team.html')
        }
    });
});

//Edit data team berdasarkan id
app.put('/team/:id', (req, res) => {
    let sql = "UPDATE team SET Nama='" + req.body.Nama + "',  Posisi='" + req.body.Posisi + "', Jurusan='" + req.body.Jurusan + "',Kelas='" + req.body.Kelas + "', Keterangan='" + req.body.Keterangan + "', Tgl_lahir='" + req.body.Tgl_lahir + "' WHERE Nim =" + req.params.id;
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            response.ok(rows, res)
        }
    });
});

//Delete data team berdasarkan id
app.delete('/team/:id', (req, res) => {
    let sql = "DELETE FROM team WHERE Nim=" + req.params.id + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});



//tampilkan semua data product
app.get('/products', (req, res) => {
    let sql = "SELECT * FROM products";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan data product berdasarkan id
app.get('/products/:id', (req, res) => {
    let sql = "SELECT * FROM products WHERE Kd_product=" + req.params.id; +"";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Tambahkan data product baru
app.post('/products', (req, res) => {
    let data = { Nm_product: req.body.Nm_product, Deskripsi_product: req.body.Deskripsi_product, Tgl_terbit: req.body.Tgl_terbit };
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Edit data product berdasarkan id
app.put('/products/:Id', (req, res) => {
    let sql = "UPDATE products SET Nm_product= " + req.body.Nm_product + ", Deskripsi_product= " + req.body.Deskripsi_product + ",Tgl_terbit=" + req.body.Tgl_terbit + " where Kd_product="+req.params.Id+"";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Delete data product berdasarkan id
app.delete('/products/:id', (req, res) => {
    let sql = "DELETE FROM products WHERE Kd_product=" + req.params.id + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});


//tampilkan semua data jaminan
app.get('/jaminan', (req, res) => {
    let sql = "SELECT * FROM jaminan";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan semua data layananplus
app.get('/layananplus', (req, res) => {
    let sql = "SELECT * FROM layananplus";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan data jaminan berdasarkan kode jaminan
app.get('/jaminan/:Kd_jaminan', (req, res) => {
    let sql = "SELECT * FROM jaminan WHERE Kd_jaminan=" + req.params.Kd_jaminan + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//tampilkan data layananplus berdasarkan id layanan
app.get('/layananplus/:Id_layanan', (req, res) => {
    let sql = "SELECT * FROM layananplus WHERE Id_layanan=" + req.params.Id_layanan + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Tambahkan data jaminan baru
app.post('/jaminan', (req, res) => {
    let data = { Nm_jaminan: req.body.Nm_jaminan, Deskripsi_jaminan: req.body.Deskripsi_jaminan };
    let sql = "INSERT INTO jaminan SET ?";
    let query = conn.query(sql, data, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Tambahkan data layananplus baru
app.post('/layananplus', (req, res) => {
    let data = { Nm_layanan: req.body.Nm_layanan, Deskripsi_layanan: req.body.Deskripsi_layanan };
    let sql = "INSERT INTO layananplus SET ?";
    let query = conn.query(sql, data, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Edit data jaminan berdasarkan kode jaminan
app.put('/jaminan/:Kd_jaminan', (req, res) => {
    let sql = "UPDATE jaminan SET Nm_jaminan='" + req.body.Nm_jaminan + "', Deskripsi_jaminan='" + req.body.Deskripsi_jaminan + "', WHERE Kd_jaminan =" + req.params.Kd_jaminan+"";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Edit data layananplus berdasarkan id jaminan
app.put('layananplus/:Id_layanan', (req, res) => {
    let sql = "UPDATE layanan SET Nm_layanan='" + req.body.Nm_layanan + "', Deskripsi_layanan='" + req.body.Deskripsi_layanan + "', WHERE Id_layanan =" + req.params.Id_layanan+"";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Delete data jaminan berdasarkan kode jaminan
app.delete('/jaminan/:Kd_jaminan', (req, res) => {
    let sql = "DELETE FROM jaminan WHERE kd_jaminan=" + req.params.Kd_jaminan + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Delete data layananplus berdasarkan id layanan
app.delete('/layananplus/:Id_layanan', (req, res) => {
    let sql = "DELETE FROM layananplus WHERE Id_layanan=" + req.params.Id_layanan + "";
    let query = conn.query(sql, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            response.ok(rows, res)
        }
    });
});

//Server listening
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});
