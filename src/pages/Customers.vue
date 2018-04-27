<template>
  <div>
    <table class="table mt-4">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, key) in customers" :key="key">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteCustomer(key)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CustomerService from '../utils/CustomerService.js'
const customerService = new CustomerService()

  export default {
    data() {
      return {
        customers: []
      }
    },
    created() {
      this.customers = customerService.customers()
    },
    methods: {
      deleteCustomer(key) {
        this.customers.splice(key, 1)
      }
    }
  }
</script>

<style>

</style>
