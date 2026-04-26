import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(helmet({
  contentSecurityPolicy: false // Disabled for exact replica of standard mock dev env. No more blocked DOM bugs!
}));

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Serve static compiled UI
app.use(express.static(join(__dirname, 'dist')));

// Fallback logic for Client Side Routing (Express 5 safe regex)
app.get(/^(.*)$/, (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Using stable listen callback
app.listen(port, "0.0.0.0", () => {
  console.log(`Stable Server is running securely on port ${port}`);
});
