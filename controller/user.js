const User = require("../models/userId");
const {v4:uuidv4} = require("uuid")
const {getUser,setUser} = require("../service/user");

async function handlesignup(req,res){
    console.log(req.body);
    const {username,password,email}= req.body;
    console.log(username,password,email);

    await User.create({
        username,
        email,
        password,
    });
    return res.render("./pages/login");
}
async function handlelogin(req,res){
    console.log(req.body);
    const {password,email}= req.body;
     const user = await User.findOne({email,password});
     console.log("rendering login");
    if(!user)
        return res.render("./pages/login",{
    error:`invalid user`});

    
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId);
    return res.redirect("/")
        };


module.exports = {handlesignup,handlelogin};
