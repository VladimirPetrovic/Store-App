<template>
  <div>
    <div class="mt-3 ml-2">
      First name: {{ customer.firstName }}<br>
      Last name: {{ customer.lastName }}<br>
      Email: {{ customer.email }}<br>
      List of products:<br>
      <ul v-for="(product, key) in customer.products" :key="key">
        <li>{{ product.title }}</li>
      </ul>
      <router-link to="/customers">Return to customers</router-link>
    </div>
  </div>
</template>

<script>
import { customerService } from '../utils/CustomerService.js'

export default {
  data() {
    return {
      customer: {}
    }
  },
  created() {
    let customerId = this.$route.params.id
    this.customer = customerService.getCustomer(customerId)
  }
}
</script>
