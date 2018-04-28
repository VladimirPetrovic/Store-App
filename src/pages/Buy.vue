<template>
  <div>
    <div v-if="product.quantity !== 0">
      <h3 class="ml-1">Buy product</h3>
      <div class="mt-2 ml-3 mb-2">
        Product title: {{ product.title}}<br>
        Product quantity: {{ product.quantity}}<br>
      </div>
      <div class="col-3 mb-4">
        <select class="custom-select" v-model="selectedCustomer">
          <option v-for="customer in customers" :key="customer.id" :value="customer">
            {{ customer.firstName }}
          </option>
        </select>
      </div>
      <button class="btn btn-primary btn-sm ml-3" @click="buyProduct(product)">Confirm</button>
      <router-link to="/products" class="btn btn-secondary btn-sm ml-2" >Cancel</router-link>
    </div>
    <div v-if="product.quantity === 0">
      <h3 class="ml-2">Product is sold out!</h3>
      <router-link to="/products" class="btn btn-secondary btn-sm ml-2" >Go back to Products</router-link>
    </div>
  </div>
</template>

<script>
import { productService } from '../utils/ProductService.js'
import { customerService } from '../utils/CustomerService.js'

export default {
  data() {
    return {
      product: productService.getProduct(this.$route.params.id),
      customers: customerService.getCustomers(),
      selectedCustomer: {}
    }
  },
  methods: {
    buyProduct(product) {
      if (Object.keys(this.selectedCustomer).length === 0) {
        alert('Please select customer')
      } else {
        productService.decreaseQty(product.id)
        customerService.addNewProductToCustomer(this.selectedCustomer, product)
        productService.updateProduct(product, this.selectedCustomer)
      }
    }
  }
}
</script>
