const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const conn=require("./db")
const form=require("./routes/form")
const data=require("./routes/data")

conn.getConnection(err => {
    if (err)
        console.log(err)
});

app.get("/",(req,res)=>{
    res.send("Hello karventhan!")
});


app.use("/form",form);
app.use("/data",data);

app.listen(5000,()=>console.log(`Server started on port 5000`));