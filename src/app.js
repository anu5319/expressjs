const express=require("express");
const app=express();
const AuthRoute=require("./routes/auth");
/*app.get("/",(req,res)=>{res.send("ok");
})
app.post("/",(req,res)=>{
    res.send(req.body);
})*/

app.use(express.json());

app.use("/",AuthRoute);

app.listen(8000,()=>{
    console.log("server running at 8000");
})
