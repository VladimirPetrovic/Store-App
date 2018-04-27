const customers = [
  {
    id: 1,
    firstName: 'Pera',
    lastName: 'Peric',
    email: 'pera@peric.com',
    products: [
      { title: 'Juice' },
      { title: 'Milk' },
      { title: 'Bread' }
    ]
  },
  {
    id: 2,
    firstName: 'Joca',
    lastName: 'Jocic',
    email: 'joca@jocic.com',
    products: []
  },
  {
    id: 3,
    firstName: 'Mika',
    lastName: 'Brca',
    email: 'mika@brca.com',
    products: []
  }
]

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
}

export const customerService = new CustomerService()