export default class CustomerService {
    customers() {
        return [
            { id: 1, firstName: 'Pera', lastName: 'Peric', email: 'pera@peric.com' },
            { id: 2, firstName: 'Joca', lastName: 'Jocic', email: 'joca@jocic.com' },
            { id: 3, firstName: 'Mika', lastName: 'Brca', email: 'mika@brca.com' },
            { id: 4, firstName: 'Test', lastName: 'Testic', email: 'test@testic.com' },
            { id: 5, firstName: 'Jova', lastName: 'Jovic', email: 'jova@jovic.com' },
        ]
    }
}

export const customerService = new CustomerService()