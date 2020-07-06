'use strict';

module.exports = function (app) {
    var todoList = require('./controller');
    var connection = require('./conn');
    const path = require("path");
    var multer = require('multer');
    const storage = multer.diskStorage({
        destination: path.join(__dirname + './publik/images/'),
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() +
                path.extname(file.originalname));
        }
    });
    const upload = multer({
        storage: storage
    }).single('picture');

    app.route('/')
        .get(todoList.index);
    // app.route('/teams')
    //     .get(todoList.teams);
    // app.route('/teamsbyId/:id')
    //     .get(todoList.teamsbyId);
    // app.route('/product')
    //     .get(todoList.product);
    // app.route('/layananplus')
    //     .get(todoList.layananplus);
    // app.route('/jaminan')
    //     .get(todoList.jaminan);
    // app.route('/messages')
    //     .get(todoList.messages);
    // app.route('/teams/post')
    //     .post(todoList.createTeams);
    // app.route('/product')
    //     .post(todoList.product);
    // app.route('/layananplus')
    //     .post(todoList.layananplus);
    // app.route('/addPicture')
    //     .post(todoList.createFoto);

    app.post('/addPicture', function (req, res) {

        upload(req, res, err => {
            if (err) throw err
            var sql = "insert INTO teams (Nim, Nama, Foto, Keterangan, Tgl_lahir)  VALUES('182731','adada','" + req.file.filename + "','zczczc','12-07-2000')";
            connection.query(sql, function (err, results) {
                //script lain misal redirect atau alert :D 
            })
        })
    });
};