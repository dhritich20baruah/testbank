const express = require('express');
const router = express.Router();

const Job = require('../models/Job')

const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', (req, res)=>{
    Job.find({}, function(err, job){
        if(err){
            console.log(err);
        }else{
            res.render('job', {job: job})
        }
    }).sort({createdAt: 'desc'})
})

router.post('/job-add', async (req, res)=>{
    const { jobTitle, jobSnippet, jobLink, jobDetails } = req.body;
    const newJob = await new Job({
        jobTitle,
        jobSnippet,
        jobLink,
        jobDetails
    })
    newJob.save((err, Job) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
    console.log(newJob)
})

module.exports = router