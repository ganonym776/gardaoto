'use strict';

var response = require('./res');
var connection = require('./conn');
const path = require("path");

exports.index = function (req, res) {
    res.sendFile(path.join(__dirname + '/page/dashboard.html'))
};
// exports.teams = function (req, res) {
//     connection.query('SELECT * FROM teams', function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.teamsbyId = function (req, res) {
//     connection.query("SELECT * FROM teams where Nim="+req.params.Id, function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.product = function (req, res) {
//     connection.query('SELECT * FROM product', function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.layananplus = function (req, res) {
//     connection.query('SELECT * FROM layananplus', function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.jaminan = function (req, res) {
//     connection.query('SELECT * FROM jaminan', function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.messages = function (req, res) {
//     connection.query('SELECT * FROM messages', function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };
// exports.createTeams = function (req, res) {
//     var Nim = req.body.Nim;
//     var Nama = req.body.Nama;
//     var Id_posisi = req.body.Id_posisi;
//     var Id_jurusan = req.body.Id_jurusan;
//     var Id_kelas = req.body.Id_kelas;
//     var Keterangan = req.body.Keterangan;
//     var Tgl_lahir = req.body.Tgl_lahir;

//     connection.query('insert into teams(Nim, Nama, Id_posisi, Id_jurusan, Id_kelas, Keterangan, Tgl_lahir) values(?,?,?,?,?,?,?)', [Nim, Nama, Id_posisi, Id_jurusan, Id_kelas, Keterangan, Tgl_lahir], function (error, rows, fields) {
//         if (error) {
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };

// exports.createFoto = function (req, res) {
//     upload(req, res, err => {
//         if (err) throw err
//         var sql = "insert INTO teams (Nim, Nama, Foto, Keterangan, Tgl_lahir)  VALUES('182731','adada','" + req.file.filename + "','zczczc','12-07-2000')";
//         connection.query(sql, function (err, results) {
//             //script lain misal redirect atau alert :D 
//         })
//     })
// };

