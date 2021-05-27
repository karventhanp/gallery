const express=require("express")
const router=express.Router()
const conn=require("../db")

router.get("/getimages",(req,res)=>{
    const sqlGetImages="SELECT * FROM gallery WHERE type LIKE 'image%'"
    conn.query(sqlGetImages,(error,results)=>{
        if(!error)
            res.send(results)
    });
});

router.get("/getaudios",(req,res)=>{
    const sqlGetAudios="SELECT * FROM gallery WHERE type LIKE 'audio%'"
    conn.query(sqlGetAudios,(error,results)=>{
        if(!error)
         res.send(results)
    });
});

router.get("/getvideos",(req,res)=>{
    const sqlGetVideos="SELECT * FROM gallery WHERE type LIKE 'video%'"
    conn.query(sqlGetVideos,(error,results)=>{
        if(!error)
         res.send(results)
    });
});

module.exports=router