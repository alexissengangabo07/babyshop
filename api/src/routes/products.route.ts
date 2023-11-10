import { Router } from "express";
import * as ProductsController from "../controllers/products.controller";
// import checkAuth from "../middlewares/token";

const route = Router();

route.get('/', /*checkAuth,*/ProductsController.getProducts)
    .get('/:id', ProductsController.getProduct)
    .post('/', ProductsController.createProduct)
    .patch('/:id', ProductsController.updateProduct)
    .delete('/:id', ProductsController.deleteProduct);


export default route;