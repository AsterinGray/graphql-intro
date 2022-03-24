const { v4: uuid } = require('uuid')

const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input
    const newCategory = {
      id: uuid(),
      name,
    }
    categories.push(newCategory)
    return newCategory
  },
  addProduct: (parent, { input }, { products }) => {
    const newProduct = { id: uuid(), ...input }
    products.push(newProduct)
    return newProduct
  },
  addReview: (parent, { input }, { reviews }) => {
    const newReview = { id: uuid(), ...input }
    reviews.push(newReview)
    return newReview
  },
  deleteProduct: (parent, { id }, { products, reviews }) => {
    products = products.filter((product) => product.id !== id)
    reviews = reviews.filter((review) => review.productId !== id)
    return true
  },
  deleteReview: (parent, { id }, { reviews }) => {
    reviews = reviews.filter((review) => review.id !== id)
    return true
  },
  deleteCategory: (parent, { id }, { categories, products }) => {
    categories = categories.filter((category) => category.id !== id)
    products = products.map((product) => {
      if (product.categoryId === id) return { ...product, categoryId: null }
      else return product
    })
    return true
  },
  updateProduct: (parent, { id, input }, { products }) => {
    const index = products.findIndex((category) => category.id !== id)
    if (index === -1) return null
    products[index] = { ...products[index], ...input }
    return categories[index]
  },
  updateReview: (parent, { id, input }, { reviews }) => {
    const index = reviews.findIndex((category) => category.id !== id)
    if (index === -1) return null
    reviews[index] = { ...reviews[index], ...input }
    return reviews[index]
  },
  updateCategory: (parent, { id, input }, { categories }) => {
    const index = categories.findIndex((category) => category.id !== id)
    if (index === -1) return null
    categories[index] = { ...categories[index], ...input }
    return categories[index]
  },
}

module.exports = Mutation
