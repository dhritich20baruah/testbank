const express = require('express');
const router = express.Router();

router.get('/rrbClerkPrelims2020', (req, res)=>{
    res.render("rrbClerkPrelims2020")
})

router.get('/rrbClerkPrelimsQuestions2020', (req, res)=>{
    res.render("rrbClerkPrelimsQuestions2020")
})

module.exports = router