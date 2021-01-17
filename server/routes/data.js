const router = require('express').Router();
let Counter = require('../models/counter.js');

router.get("/", async (req, res) => {
    await Counter.find({ status: "In" }, function (err, level) {
        if (err) {
            res.send(err.message)
        }
        else {
            res.status(200).json("123");
        }
    })
    // res.status(200).json("123");
});
// module.exports = (app) => {
//     app.get('/data', (req, res, next) => {
//         // await Counter.find({ status: "In" }, function (err, level) {
//         //     if (err) {
//         //         res.send(err.message)
//         //     }
//         //     res.status(200).json("123");
//         // })
//         console.log("SSS")
//         // res.status(200).json("123");
//         res.send("SS");
//     });
// }
module.exports = router;