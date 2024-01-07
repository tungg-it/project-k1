import express from 'express';
import productRouter from './product.router';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/products', productRouter);

export default router;
