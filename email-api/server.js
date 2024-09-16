require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Nodemailer configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Sender Email
    pass: process.env.PASSWORD // Sender App Password
  }
})

// Endpoint to handle form submission
app.post('/consultation-email', async (req, res) => {
  const { full_name, email, phone, message } = req.body

  const htmlContent = `
  <img src="https://github.com/dcifligu/consultation_images/blob/b2a273a96d9a208b6992e5ee7a0432943c5e9879/ConsulatitonFormEmail.png?raw=true" style="width: 700px; height: 300px; display: block; margin: auto;" />
  <table style="width: 700px; margin: auto; height: fit; background-color: white;">
    <tr>
      <td>
        <h1 style="font-size: 20px; font-weight: 600; font-family: Arial, sans-serif;">Name: <span style="font-size: 16px; font-family: Arial, sans-serif;">${full_name}</span></h1>
        <h1 style="font-size: 20px; font-weight: 600; font-family: Arial, sans-serif;">E-mail: <span style="font-size: 16px; font-family: Arial, sans-serif;">${email}</span></h1>
        <h1 style="font-size: 20px; font-weight: 600; font-family: Arial, sans-serif;">Phone: <span style="font-size: 16px; font-family: Arial, sans-serif;">${phone}</span></h1>
        <h1 style="font-size: 20px; font-weight: 600; font-family: Arial, sans-serif;">Message: <span style="font-size: 16px; font-family: Arial, sans-serif;">${message}</span></h1>
      </td>
    </tr>
  </table>
  `

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // Recipient Mail
    subject: 'New Consultation Request',
    priority: 'high', // Mark as high priority
    html: htmlContent
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).send({ message: 'Failed to send email' })
  }
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
