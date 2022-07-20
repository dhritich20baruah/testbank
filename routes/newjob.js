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
    const { jobTitle, jobSnippet, jobLink, jobDetails, jobCategory, jobImage } = req.body;
    const newJob = await new Job({
        jobTitle,
        jobSnippet,
        jobLink,
        jobDetails, 
        jobImage,
        jobCategory
    })
    newJob.save((err, Job) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
    console.log(newJob)
})

router.get('/jobs/:id', async (req, res) => {
    const job = await Job.findById(req.params.id)
    const jobs = await Job.find().sort({ createdAt: 'desc' })
    res.render('job_details', { job: job, jobs: jobs })
  })

// router.get('/jobs/:id', (req, res) => {
//     const id = req.params.id;
//     Job.findById(id).then(result=>{
//         res.render('job_details', { job: result, title: 'Job Details'})
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     Job.find({}, function(err, job){
//         if(err){
//             console.log(err);
//         }else{
//             res.render('job_details', {job: job})
//         }
//     }).sort({createdAt: 'desc'})

// })

module.exports = router