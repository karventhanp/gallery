const mysql = require("mysql")

const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: 'image_audio_video'
});

module.exports=conn