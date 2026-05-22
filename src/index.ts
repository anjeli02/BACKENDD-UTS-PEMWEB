import express from 'express';
import cors from 'cors';
import eventRoute from './routes/eventRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import speakerRoute from './routes/speakerRoute.js'; 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Event Management - Beauty Class sudah aktif!");
});

// Gunakan route yang sudah diimport
app.use('/categories', categoryRoute);
app.use('/events', eventRoute);
app.use('/speakers', speakerRoute); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app; // Tetap biarkan ini tidak apa-apa