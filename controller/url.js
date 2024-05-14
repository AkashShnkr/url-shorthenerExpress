const shortid = require('shortid');
const URL = require("../models/user");
const { Timestamp } = require('mongodb');
async function handlegeneratenewshortId(req, res) {
    const shortId = shortid(8);
    const body = req.body;
    if (!body.url) return res.status(400).json({ err: ` url is required. ` });

    await URL.create({
        shortID: shortId,
        redirecturlID: body.url,
        visitHistoryURL: [],
    })

    return res.json({ id: shortId });




}
async function handleredirection(req, res) {
    const shortID = req.params.shortID;
    const result = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistoryURL: [
                { Timestamp: Date.now(), }
            ]
        }
    })
    res.redirect(result.redirecturlID);
}

async function handleDeatails(req, res) {
    const shortID = req.params.shortID;
    const result =await URL.findOne({shortID});
   
     return res.json({
        click: result.visitHistoryURL.length

        , Analytic: result.visitHistoryURL
     });
}


module.exports = {
    handlegeneratenewshortId,
    handleredirection, handleDeatails
}