const customers = [
  { id: 1, firstName: 'Pera', lastName: 'Peric', email: 'pera@peric.com' },
  { id: 2, firstName: 'Joca', lastName: 'Jocic', email: 'joca@jocic.com' },
  { id: 3, firstName: 'Mika', lastName: 'Brca', email: 'mika@brca.com' },
  { id: 4, firstName: 'Test', lastName: 'Testic', email: 'test@testic.com' },
  { id: 5, firstName: 'Jova', lastName: 'Jovic', email: 'jova@jovic.com' }
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