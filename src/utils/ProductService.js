const products = [
  {
    id: 1,
    title: 'Juice',
    quantity: 300,
    customers: [
      { id: 1,  firstName: 'Pera'}
    ]
  },
  {
    id: 2,
    title: 'Milk',
    quantity: 200,
    customers: [
      { id: 1, firstName: 'Pera' },
      { id: 3, firstName: 'Mika' }
    ]
  },
  {
    id: 3,
    title: 'Bread',
    quantity: 0,
    customers: [
      { id: 1, firstName: 'Pera' },
      { id: 2, firstName: 'Joca' },
      { id: 3, firstName: 'Mika' }
    ]
  }
]
let product ={}
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
  getProduct(id) {
    return products.find(product => product.id == id)
  }
  updateProduct(soldItem, buyer) {
    products.find(product => product.id == soldItem.id).customers.push(buyer)
  }
}

export const productService = new ProductService()