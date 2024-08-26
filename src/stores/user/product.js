import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'P1',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      status: 'open',
      price: 100,
    },
    {
      name: 'P2',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 20,
      about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      status: 'open',
      price: 100,
    }],
    loaded: false
  }),
  actions: {
    filterProduct (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  } 
})
