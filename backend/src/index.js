import express from 'express';
import cors from 'cors';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins (adjust in production)
app.use(cors());

// Basic root route to test the server
app.get('/', (req, res) => {
  res.send('HMCTS Task Management API is running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
