import { Router } from 'express'

export const productRouter = Router()

import { getAllProducts, postAddProduct, getProductById, postEditProduct, postDeleteProduct, getByGenre } from '../controllers/admin-controller'

productRouter.get('/shop-products', getAllProducts)
productRouter.post('/add-product', postAddProduct)

productRouter.get('/product-id', getProductById)
productRouter.put('/product-edit', postEditProduct)
productRouter.post('/product-delete', postDeleteProduct)
productRouter.get('/products-genre', getByGenre)