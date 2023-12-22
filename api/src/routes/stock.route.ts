import { Router } from "express";
import * as ProductsStockController from "../controllers/stock.controller";
// import checkAuth from "../middlewares/token";

const route = Router();

route.get('/', /*checkAuth,*/ProductsStockController.getProductsInStock)
    .get('/:id', ProductsStockController.getProductInStock)
    .post('/', ProductsStockController.createProductStock)
    .patch('/:id', ProductsStockController.updateProductStock)
    .delete('/:id', ProductsStockController.deleteProductStock);


export default route;