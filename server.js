const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: 'testmaildvhive@gmail.com', // Your email
    pass: 'qwertyd.1234' // Your email password
  }
})

app.post('/send-email', (req, res) => {
  const { full_name, email, phone, message } = req.body

  const mailOptions = {
    from: email,
    to: 'deivi.cifligu@gmail.com', // Your email where you want to receive the form data
    subject: `New Contact Form Submission from ${full_name}`,
    text: `
    Name: ${full_name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ status: 'fail' })
    } else {
      res.send({ status: 'success' })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
