const  mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    redirecturlID:{
        type:String,
        required:true,
    },
    visitHistoryURL:[{
     timestamp:{
        type:Number
     }
    
    }],
},
    { timestamp:true}

)

const URL = mongoose.model("urlshorthen",urlSchema);

module.exports = URL;