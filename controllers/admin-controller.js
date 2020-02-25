import { Product } from '../models/products'

export const postAddProduct = (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    })
    product
    .save()
    // .then(result => {
    //     console.log('new product added')
    //    res.send('new product check db')
    // )}
    .catch(err => console.log(err))
    product.fetchAll()
.then(product => {
    res.json(product)
})
}


export const getAllProducts = (req, res, next) => {
    Product.find()
    .then (product => {
        res.json(product)
        })
        .catch(err => console.log(err))
    }

    export const getProductById = (req, res, next) => {
        const productId = req.body.productId
        console.log(productId)
        .then(product => {
            if(!product) {
                return res.redirect('/')
            }
            res.json(product)
        })
        .catch(err => console.log(err))
    }

    export const postEditProduct = (req, res, next) => {
        const productId = res.body.productId
        const updatedTitle = req.body.title
        const updatedPrice = req.body.price
        const updatedDesc = req.body.description
        const updatedImg = req.body.image
        Product.findById(productId)
        .then(product => {
            product.title = updatedTitle
            product.price = updatedPrice
            product.description = updatedDesc
            product.image = updatedImg
            return product.save()
        })
        product
        .save()
        .then(result => {
            res.redirect('/admin/getAllProducts')
        })
    }

    export const postDeleteProduct = (req, res, next) => {
        const prodId = req.body.productId
        Product.findByIdAndRemove(prodId)
        .then(() => {
            res.redirect('/admin/getAllProducts')
        })
        .catch(err => console.log(err))
    }