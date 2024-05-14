const express = require("express");
const  {handlegeneratenewshortId} =require("../controller/url")
const  {handleredirection} =require("../controller/url")
const  {handleDeatails} =require("../controller/url")
const router = express.Router();

router.post("/",handlegeneratenewshortId);
router.get("/:shortID",handleredirection);
router.get("/details/:shortID",handleDeatails);
module.exports = router;