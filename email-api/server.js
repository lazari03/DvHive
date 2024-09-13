const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Nodemailer configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deivi.cifligu@gmail.com', // Your Gmail address
    pass: 'qoii vrrb xpnn vgon' // Your password
  }
})

// Endpoint to handle form submission
app.post('/consultation-email', async (req, res) => {
  const { full_name, email, phone, message } = req.body

  const mailOptions = {
    from: email,
    to: 'fiona.kertalli@gmail.com', // Your email
    subject: 'New Consultation Request',
    text: `Full Name: ${full_name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).send({ message: 'Failed to send email' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
