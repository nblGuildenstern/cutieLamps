const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to control the ESP8266
app.post('/led', async (req, res) => {
  const { color, ip } = req.body;

  try {
    // Forward the command to the ESP8266 via its IP address
    const response = await axios.get(`http://${ip}/RGB?color=${color}`);
    res.status(200).send(`LED color changed to ${color}`);
  } catch (error) {
    console.error('Error sending request to ESP8266:', error.message);
    res.status(500).send('Failed to change LED color');
  }
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
