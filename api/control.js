import axios from 'axios';

//const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req;
    const ledState = query.state; // "ON", "OFF", "red", "blue", etc.
    
    const esp8266IP = 'http://192.168.84.121';  // Replace with your ESP8266 IP
    try {
      const response = await axios.get(`${esp8266IP}/RGB?color=${ledState}`);
      res.status(200).json({ message: response.data });
    } catch (error) {
      res.status(500).json({ message: 'Failed to control LED', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
