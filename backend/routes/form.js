const express = require("express")
const multer = require("multer")
const fs = require("fs")
const conn = require("../db")
const router = express.Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage,
    limits: { fileSize: 20000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "audio/mpeg" || file.mimetype == "audio/ogg" || file.mimetype == "audio/wav" || file.mimetype == "video/mp4" || file.mimetype == "video/webm" || file.mimetype == "video/ogg")
            cb(null, true)
        else {
            cb(null, false)
            return cb(new Error("This formate is not allowed"))
        }
    }
})


router.route("/filedata").post(upload.single("file"), (req, res) => {
    let name
    if (!req.body.formdata) {
        name = req.file.originalname
    }
    else {
        name = req.body.formdata
    }
    fs.readFile(`./uploads/${req.file.filename}`, 'base64', (err, data) => {
        if (err)
            console.log(err)
        else {
            const { mimetype } = req.file
            const sqlInsert = "INSERT INTO gallery(name,type,data,date)VALUES(?,?,?,?)"
            conn.query(sqlInsert, [name, mimetype, data, new Date()], (error, results) => {
                if (error)
                    console.log(error)
                else {
                    fs.unlink("./uploads/" + req.file.filename, (err) => {
                        if (err)
                            console.log(err)
                    });
                }

            });
        }
    });
    res.send()
});

module.exports = router