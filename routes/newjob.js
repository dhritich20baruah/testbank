const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Job = require('../models/Job')

const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', ensureAuthenticated, (req, res) => {
    Job.find({}, function (err, job) {
        if (err) {
            console.log(err);
        } else {
            res.render('job', { job: job })
        }
    }).sort({ createdAt: 'desc' })
})

router.post('/job-add', async (req, res) => {
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

//edit
router.get('/edit/:id', async (req, res) => {
    const job = await Job.findById(req.params.id)
    res.render('edit', { job: job })
})

router.put('/jobs/:id', async (req, res, next) => {
    req.job = await Job.findById(req.params.id)
    next()
}, saveArticleAndRedirect('/'))

//delete
router.post('/delete/:id', async (req, res) => {
    await Job.findByIdAndDelete(req.params.id)
    res.redirect('/job/')
})

function saveArticleAndRedirect(path) {
    return async (req, res) => {
        let job = req.job
        job.jobTitle = req.body.jobTitle
        job.jobSnippet = req.body.jobSnippet
        job.jobLink = req.body.jobLink
        job.jobDetails = req.body.jobDetails
        job.jobImage = req.body.jobImage
        job.jobCategory = req.body.jobCategory
        console.log(job)
        try {
            job = await job.save()
            res.redirect(`/job/${job.id}`)
        } catch (e) {
            res.render(`/job/${path}`, { job: job })
        }
    }
}

module.exports = router