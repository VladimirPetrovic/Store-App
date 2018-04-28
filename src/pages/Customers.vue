<template>
  <div>
    <table class="table mt-4 ml-1">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Handle</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, key) in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteCustomer(key)">Delete</button>
          </td>
          <td>
            <router-link :to="'/customers/'+customer.id" class="text-center align-middle col-1">Latest purchase</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="addCustomer">
      <div class="form-group col-4">
        <label for="firstName">First Name</label>
        <input type="text" v-model="newCustomer.firstName" class="form-control" id="firstName">
      </div>
      <div class="form-group col-4">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="newCustomer.lastName" class="form-control" id="lastName">
      </div>
      <div class="form-group col-4">
        <label for="email">Email address</label>
        <input type="email" v-model="newCustomer.email" class="form-control" id="email">
      </div>
      <button class="btn btn-primary btn-sm ml-3 mb-2">Add Customer</button>
    </form>
  </div>
</template>

<script>
import { customerService } from '../utils/CustomerService.js'

  export default {
    data() {
      return {
        customers: customerService.getCustomers(),
        newCustomer: {
          firstName: '',
          lastName: '',
          email: ''
        }
      }
    },
    methods: {
      deleteCustomer(key) {
        customerService.deleteCustomer(key)
      },
      addCustomer() {
        customerService.addCustomer(this.newCustomer)
        this.newCustomer = {}
      }
    }
  }
</script>
