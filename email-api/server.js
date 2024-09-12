const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

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
app.post('/send-email', async (req, res) => {
  const { full_name, email, phone, message } = req.body

  // Read the image file and convert it to base64
  const imagePath = path.resolve(__dirname, 'img/logo.svg')
  const imageBase64 = fs.readFileSync(imagePath).toString('base64')

  // Create a new PDF document using Puppeteer
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setContent(`
  <style>
  html {
    -webkit-print-color-adjust: exact;
  }
  </style>

  <div style="width: 99%; height: 99%; margin: auto; border-radius: 16px; background-color: #212121;">
    <div>
      <img src="data:image/svg+xml;base64,${imageBase64}" style="height: 96px; width: 96px; margin: 10px;" />
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; color: white; margin: 24px;">
      <div style="padding: 48px 0;">
        <h1 style="text-align: center; font-size: 1.875rem;">You just received a customer reply.</h1>
        <span style="text-align: center; font-size: 1.125rem; width: 100%; color: #FDCE83;">You can view the full information below</span>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; color: white; margin: 0 20px;">
      <span style="font-size: 1.650rem">Full Name:</span>
      <span style="font-size: 1.25rem">${full_name}</span>

      <span style="font-size: 1.650rem">Email:</span>
      <span style="font-size: 1.25rem">${email}</span>

      <span style="font-size: 1.650rem">Phone Number:</span>
      <span style="font-size: 1.25rem">${phone}</span>

      <span style="font-size: 1.650rem">Message:</span>
      <span style="font-size: 1.25rem">${message}</span>
    </div>
    <div style="background-color: #FDCE83; width: 80%; margin: auto; margin-top:100px !important; height: 2px; border-radius: 1px;">
  </div>
`)

  const pdfPath = 'output.pdf'
  await page.pdf({ path: pdfPath, format: 'A4' })

  await browser.close()

  const mailOptions = {
    from: email,
    to: 'deivi.cifligu@gmail.com', // Your email
    subject: 'New Consultation Request',
    attachments: [
      {
        filename: 'output.pdf',
        path: pdfPath
      }
    ]
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
