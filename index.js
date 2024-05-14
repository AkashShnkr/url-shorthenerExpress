const express = require("express");
const app = express();
const PORT = 8000;


app.listen(8000,(req,res)=>{
    console.log.log(`Server is running at PORT ${PORT}`);
})