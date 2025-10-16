const nodemailer = require('nodemailer')
const formidable = require('formidable')
const fs = require('fs')

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

  // Parse form data with formidable
  const form = formidable({ multiples: true })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err)
      return res.status(500).json({ message: 'Failed to parse form data' })
    }

    // Extract form fields (formidable returns arrays)
    const formData = {}
    Object.keys(fields).forEach((key) => {
      formData[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key]
    })

    console.log('Intake form received from:', formData.full_name)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })

    // Prepare attachments
    let attachments = []
    if (files.file) {
      const fileArray = Array.isArray(files.file) ? files.file : [files.file]
      attachments = fileArray.map((file) => ({
        filename: file.originalFilename || file.newFilename,
        path: file.filepath
      }))
    }

    const htmlContent = `
    <img src="https://github.com/dcifligu/consultation_images/blob/main/IntakeFormEmail.png?raw=true" style="width: 700px; height: 300px; display: block; margin: auto;" />
    <table style="width: 700px; margin: auto; height: fit; color: #212121; padding: 5px;">
      <tr>
        <td>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Full Name:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.full_name}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Email:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.email}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Phone:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.phone}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Claim Type:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.claimType}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>VIN Number:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.vinNumber}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Vehicle Details:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel} ${formData.vehicleTrim}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Mileage:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.vehicleMileage}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Accident Date:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.accidentDate}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>State:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.state}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Estimated Repair:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">$${formData.estimatedRepair}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Prior Accidents:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.priorAccidents}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Previous Estimated Repair:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">$${formData.prevEstimatedRepair || 'N/A'}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Leasing:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.leasing}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Insurance:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.insurance}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Fault Insurance:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.faultInsurance}</span></h1>
        <h1 style="font-size: 18px; font-weight: 500; font-family: Arial, sans-serif;"><strong>Message:</strong> <span style="font-size: 16px; font-family: Arial, sans-serif;">${formData.message}</span></h1>
        </td>
      </tr>
    </table>
    `

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Intake Form: ${formData.full_name}`,
      html: htmlContent,
      attachments: attachments
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Intake email sent successfully')
      
      // Clean up uploaded files
      attachments.forEach(att => {
        fs.unlink(att.path, () => {})
      })
      
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending intake email:', error)
      res.status(500).json({ message: 'Failed to send email.', error: error.message })
    }
  })
}

// Disable body parsing, need to handle with formidable
export const config = {
  api: {
    bodyParser: false
  }
}
