import express from 'express';
import productController from '@controllers/product';
const router = express.Router();

router.get('/', productController.product);
router.get('/:productId', productController.productDetail);

export default router;
