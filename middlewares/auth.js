const {getUser} = require('../service/user');

async function restrictTouserloginonly(req,res,next){
    const useruuid = req.cookies.uid;

    if(!useruuid) return res.redirect("/static/login");
    const getuser =getUser(useruuid);

    if(!getuser) return res.redirect("static/login");
    req.user=user;

    next();
}