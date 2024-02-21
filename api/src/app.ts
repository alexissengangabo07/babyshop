import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from 'morgan';
import endpointHandler from './middlewares/endpoint';
import userRoute from './routes/users.route';
import productRoute from './routes/products.route';
import productStockRoute from './routes/stock.route';
import orderRoute from './routes/orders.route';

const app = express();
dotenv.config();

app.use(express.json({ limit: '80mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:8081', 'exp://localhost:8081', 'exp://192.168.18.7:8081', 'http://10.0.2.2:8081','http://192.168.18.7:8081'],
// }));
app.use(morgan('dev'));
//Routes
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/stock', productStockRoute);
app.use('/api/order', orderRoute);

app.use(endpointHandler);
// app.use(errorHandler);

export default app;