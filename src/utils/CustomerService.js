const customers = [
  {
    id: 1,
    firstName: 'Pera',
    lastName: 'Peric',
    email: 'pera@peric.com',
    products: [
      { id: 1, title: 'Juice' },
      { id: 2, title: 'Milk' },
      { id: 3,  title: 'Bread' }
    ]
  },
  {
    id: 2,
    firstName: 'Joca',
    lastName: 'Jocic',
    email: 'joca@jocic.com',
    products: [
      { id: 3, title: 'Bread' }
    ]
  },
  {
    id: 3,
    firstName: 'Mika',
    lastName: 'Brca',
    email: 'mika@brca.com',
    products: [
      { id: 2, title: 'Milk' },
      { id: 3, title: 'Bread' }
    ]
  }
]
let customer = {}
export default class CustomerService {
  getCustomers() {
    return customers;
  }
  deleteCustomer(key) {
    customers.splice(key, 1)
  }
  getCustomer(id) {
    return customers.find(customer => customer.id == id)
  }
  addCustomer(newCustomer) {
    newCustomer.id = customers.length + 1
    customers.push(newCustomer)
  }
  addNewProductToCustomer(buyer, product) {
    customer = customers.find(customer => customer.id === buyer.id)
    customer.products.push(product)
  }
}

export const customerService = new CustomerService()