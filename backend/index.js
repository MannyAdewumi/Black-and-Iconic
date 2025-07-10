import express from 'express';
import dotenv from 'dotenv';
import AuthRoutes from './src/routes/AuthRoutes.js';
import UserRoutes from './src/routes/UserRoutes.js';
import ImageRoutes from './src/routes/ImageRoutes.js';
import CollectionRoutes from './src/routes/CollectionRoutes.js';
import cors from 'cors';
import connectDB from './src/config/db.js';
import cloudinary from './src/utils/cloudinary.js';

dotenv.config();
connectDB();


const app = express();


//middleware
app.use(express.json());
app.use(cors());



//routes

app.use('/api/images', ImageRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/collect', CollectionRoutes);




app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${5000}`)
})
