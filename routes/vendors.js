const express = require('express')
const router = express.Router
const path = reqire('path')

router.use('./bootstrap', express.static(path.join(__dirname, "../node_modules/bootstrap/dist")))
router.use('/jquery', express.static(path.join(__dirname, "../node_module/jquery/dist")))
module.exports = router