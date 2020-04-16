import { Vinyl } from '../models/product'

// create
export const postAddProduct = (req, res, next) => {
  const vinyl = new Vinyl({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    //imageUrl: req.body.imageUrl,
    artist: req.body.artist,
  })
  vinyl
    .save()
    .then(result => {
      console.log('Created Product')
      res.send('Created Product! Check your DB')
      // res.redirect('/admin/products')
    })
    .catch(err => console.log(err))
}

 export const getAllProducts = (req, res, next) => {
  Vinyl.find()
    .then(products => {
      res.json(products)
    })
    .catch(err => console.log(err))
}


// read one
export const getProductById = (req, res, next) => {
  const prodId = req.body.productId
  console.log(prodId)
  Vinyl.findById(prodId)
    .then(vinyl => {
      if (!vinyl) {
        return res.redirect('/')
      }
      res.json(vinyl)
    })
    .catch(err => console.log(err))
}

// update
export const postEditProduct = (req, res, next) => {
  const prodId = req.body.productId
  const updatedTitle = req.body.title
  const updatedPrice = req.body.price
  const updatedDesc = req.body.description
  const updatedArt = req.body.artist 
  //const updatedImageUrl = req.body.imageUrl
  
  Vinyl.findById(prodId)
  .then(vinyl => {
    vinyl.title = updatedTitle
    vinyl.price = updatedPrice
    vinyl.description = updatedDesc
    vinyl.artist = updatedArt
    //vinyl.imageUrl = updatedImageUrl
    return vinyl.save()
  })
    .then(result => {
      console.log('Updated product')
      res.redirect('/shop/getAllProducts')
    })
    .catch(err => console.log(err))
}

// delete

export const postDeleteProduct = ( req, res, next) => {
    const prodId = req.body.productId
    Vinyl.findByIdAndRemove(prodId)
    .then(() => {
        console.log('Deleted the product')
        res.redirect('/shop/shop-products')
    })
    .catch(err => console.log(err))
} 

export const getByGenre = (req, res, next) => {
  const vinylGenres = req.body.description
  Vinyl.find(vinylGenres)
  .then(vinyl => {
    vinyl = vinylGenres
    return vinyl.save()
  })
    .then(result => {
      console.log(vinyl)
    })
  .catch(err => console.log(err))
}