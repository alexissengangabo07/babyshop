import { Router } from "express";
import * as ordersController from "../controllers/orders.controller";

const route = Router();

route.get('/', ordersController.getOrders)
    .get('/:id', ordersController.getOrder)
    .post('/', ordersController.createOrder)
    .patch('/:id', ordersController.updateOrder)
    .delete('/:id', ordersController.deleteOrder);


export default route;