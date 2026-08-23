import express from 'express';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const data = req.body;
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'aiontechsupport@gmail.com',
      subject: 'New Admission Application',
      html: `
        <h2>New Admission Application</h2>
        <p><strong>Name:</strong> ${data.applicantName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.contactNo}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsappNo || 'N/A'}</p>
        <p><strong>DOB:</strong> ${data.dob}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <p><strong>Pincode:</strong> ${data.pincode}</p>
        <p><strong>Address:</strong> ${data.address}</p>
      `
    });
    res.json(response);
  } catch (error: any) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
});

// In production, serve the dist folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 3000) : 3001;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
