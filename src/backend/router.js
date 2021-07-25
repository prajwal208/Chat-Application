const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    res.send("Server has getting started");
})

module.exports = router;