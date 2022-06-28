const express = require('express');
const router = express.Router();

router.get('/jeeadv2021paper1', (req, res)=>{
    res.render("jeeadv2021paper1")
})

router.get('/jeeadv2021paper1questions', (req, res)=>{
    res.render("jeeadv2021paper1questions")
})

router.get('/jeeadv2021paper2', (req, res)=>{
    res.render("jeeadv2021paper2")
})

router.get('/jeeadv2021paper2questions', (req, res)=>{
    res.render("jeeadv2021paper2questions")
})

module.exports = router