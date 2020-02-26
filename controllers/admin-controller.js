import { Product } from '../models/product'

export const postAddProduct = (req, res, next) => {
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      artist: req.body.artist
    })
    product
      .save()
      .then(result => {
        console.log('Created Product')
        res.send('Created Product.  Check your DB')
        //res.redirect('/admin/products')
      })
      .catch(err => {
        console.error(err)
      })
  }
  
  export const getAllProducts = (req, res, next) => {
    Product.find()
      .then(products => {
        res.json(products)
      })
      .catch(err => {
        console.log(err)
      })
  }
  // read one
  export const getProductById = (req, res, next) => {
    const prodId = req.body.productId
    Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/')
      }
      res.json(product)
    })
    .catch(err => console.log(err))
  }
  
  // update
  export const postEditProduct = (req, res, next) => {
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedPrice = req.body.price
    const updatedDesc = req.body.description
    const updatedImageUrl = req.body.imageUrl
    const updatedArtist = req.body.artist
  
    Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle
      product.price = updatedPrice
      product.description = updatedDesc
      product.imageUrl = updatedImageUrl
      product.artist = updatedArtist
      return product.save()
    })
    .then(result => {
      console.log('Updated Product')
      res.redirect('/admin/getAllProducts')
    })
    .catch(err => console.log(err))
  }
  
  export const postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId
    Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('Deleted Product')
      res.redirect('/admin/getAllProducts')
    })
    .catch(err => console.log(err))
  }