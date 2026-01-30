import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import itemRoutes from './routes/item.routes';
import connectDB from './config/database';
import helmet from 'helmet';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;


app.use(helmet());

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to CredPal Assessment API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
