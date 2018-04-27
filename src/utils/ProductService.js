const products = [
  { id: 1, title: 'Juice', quantity: 300 },
  { id: 2, title: 'Milk', quantity: 200 },
  { id: 3, title: 'Bread', quantity: 50 },
  { id: 4, title: 'Beer', quantity: 1000 },
  { id: 5, title: 'Cigarets', quantity: 500 }
]
export default class ProductService {
  getProducts() {
    return products
  }
  increaseQty(id) {
    products.find(product => {
      if (product.id === id) {
        product.quantity++
      }
    })
  }
  decreaseQty(id) {
    products.find(product => {
      if (product.id === id) {
        product.quantity--
      }
    })
  }
}

export const productService = new ProductService()