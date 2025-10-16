const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { full_name, email, phone, message } = req.body

  console.log('Consultation form received:', { full_name, email, phone })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const htmlContent = `
  <img src="https://github.com/dcifligu/consultation_images/blob/main/ConsultationFormEmail.png?raw=true" style="width: 700px; height: 300px; display: block; margin: auto;" />
  <table style="width: 700px; margin: auto; height: fit; background-color: white;">
    <tr>
      <td>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;">Name: <span style="font-size: 16px; font-family: Arial, sans-serif;">${full_name}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;">E-mail: <span style="font-size: 16px; font-family: Arial, sans-serif;">${email}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;">Phone: <span style="font-size: 16px; font-family: Arial, sans-serif;">${phone}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;">Message: <span style="font-size: 16px; font-family: Arial, sans-serif;">${message}</span></h1>
      </td>
    </tr>
  </table>
  `

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Consultation Request',
    priority: 'high',
    html: htmlContent
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Consultation email sent successfully')
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending consultation email:', error)
    res.status(500).json({ message: 'Failed to send email', error: error.message })
  }
}
