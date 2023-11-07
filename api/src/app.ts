import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from 'morgan';
import endpointHandler from './middlewares/endpoint';
import errorHandler from "./middlewares/errors";
import userRoute from './routes/users.route';
import categoryRoute from './routes/prodCategories.route';
import productRoute from './routes/products.route';
import orderRoute from './routes/orders.route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan('dev'));
//Routes
app.use('/api/users', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

app.use(endpointHandler);
app.use(errorHandler);

export default app;