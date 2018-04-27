<template>
  <div>
    <input type="text" class="mt-2 ml-1" v-model="search" placeholder="Search" />
    <table class="table mt-1 ml-1">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
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
      search: '',
      products: []
    }
  },
  created() {
    this.products = productService.getProducts();
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
