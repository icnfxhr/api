const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const productController = require('./controllers/productController');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById);
app.post('/api/products', productController.createProduct);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});