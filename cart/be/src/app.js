console.log("jai siya ram")

const express = require("express");

const app = express();

app.use("",(req,resp)=>
    {
        resp.send("hello jai siya ram");
    }
    );

app.use("/route",(req,resp)=>
    {
        resp.send("hello jai siya ram i /route");
    }
    );

app.listen(3000,()=>{
    console.log("server listening on 3000");
});



