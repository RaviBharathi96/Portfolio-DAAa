const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`--- New Inquiry --- \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    res.status(200).json({ success: true });
});

app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));