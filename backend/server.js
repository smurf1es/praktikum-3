import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import pegawaiRoutes from './routes/pegawaiRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is up and running!');
});

app.use('/api/pegawai', pegawaiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);