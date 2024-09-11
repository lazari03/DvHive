const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer configuration for SMTP2GO
const transporter = nodemailer.createTransport({
  host: 'mail.smtp2go.com',
  port: 2525,
  auth: {
    user: 'unyt.edu.al', // Your SMTP2GO username
    pass: 'P9Ef3F919rNFC07T' // Your SMTP2GO password
  }
});

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  const { full_name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'deivi.cifligu@gmail.com', // Your email
    subject: 'New Consultation Request',
    text: `Name: ${full_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});