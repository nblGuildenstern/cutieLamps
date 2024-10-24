export default function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req;
    const ledState = query.state; // "ON" or "OFF"
    
    // Here, add the logic to handle the LED state
    if (ledState === "ON") {
      // Code to turn on the LED
      console.log("LED is ON");
    } else if (ledState === "OFF") {
      // Code to turn off the LED
      console.log("LED is OFF");
    }
    
    res.status(200).json({ message: `LED turned ${ledState}` });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
