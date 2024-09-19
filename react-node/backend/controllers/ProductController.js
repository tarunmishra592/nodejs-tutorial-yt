const ProductModel = require('../models/Product')

const productCreateHandler = async (req, res) => {
    const { name, category, price } = req.body
    const newProduct = new ProductModel({ name, category, price })
    await newProduct.save()
    res.status(201).json({ status: true, message: 'Product Created' })
}

module.exports = {
    productCreateHandler
}