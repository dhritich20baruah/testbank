const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
const slugify = require('slugify')

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
    },
    jobSnippet: {
        type: String,
    },
    jobLink: {
        type: String,
    },
    jobDetails: {
        type: String, 
    },
    jobCategory: {
        type: String, 
    },
    jobImage:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sanitizedHtml: {
        type: String,
    }
})

jobSchema.pre('validate', function (next) {
    if (this.jobTitle) {
      this.slug = slugify(this.jobTitle, { lower: true, strict: true })
    }
  
    if (this.markdown) {
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
  
    next()
  })
  
  module.exports = mongoose.model('Job', jobSchema)