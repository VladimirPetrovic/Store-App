<template>
  <div>
    <table class="table mt-4 ml-1">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { productService } from '../utils/ProductService.js'
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.products = productService.getProducts();
  }
}
</script>
