const Queue = require('bull')
const nodemailer = require('nodemailer')

const emailQueue = new Queue('email', {
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

emailQueue.process(async (job, done) => {
  const { email, mailOptions } = job.data

  try {
    await transporter.sendMail(mailOptions)
    done()
  } catch (error) {
    console.error('Error sending email:', error)
    done(error)
  }
})

module.exports = emailQueue
