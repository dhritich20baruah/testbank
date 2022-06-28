const express = require('express');
const router = express.Router();

router.get('/jeemain2021s1', (req, res)=>{
    res.render("jeemain2021s1")
})
router.get('/jeemain2021s2', (req, res)=>{
    res.render("jeemain2021s2")
})

router.get('/jeemain2021shift1questions', (req, res)=>{
    res.render("jeemain2021shift1questions")
})

router.get('/jeemain2021shift2questions', (req, res)=>{
    res.render("jeemain2021shift2questions")
})

module.exports = router