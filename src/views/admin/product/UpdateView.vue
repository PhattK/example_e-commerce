<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminProductStore } from "@/stores/admin/product";
const adminProductStore = useAdminProductStore()

const router = useRouter()
const route  = useRoute()

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'imageUrl',
        field: 'imageUrl'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    },
]

const productIndex = ref(-1)
const mode = ref('Add')

const productData = reactive({
    name: '',
    imageUrl: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const updateProduct = () => {
    if (mode.value === 'Edit'){
        adminProductStore.updateProduct(productIndex.value, productData)
    } else {
        adminProductStore.addProduct(productData)
    }
    router.push({ name: 'admin-product-list'})
}

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'Edit'
        const selectedProduct = adminProductStore.getProduct(productIndex.value)
        productData.name = selectedProduct.name
        productData.imageUrl = selectedProduct.imageUrl
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status
    }
})
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8">
            <div class="text-2xl font-bold">{{ mode }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input type="text" class="input input-bordered w-full" v-model="productData[form.field]" />
                </label>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Status</span>
                    </div>
                    <select v-model="productData.status" class="select select-bordered">
                        <option disabled selected>Choose Status</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </label>
            </div>
            <div class="mt-4 flex justify-end">
                <RouterLink :to="{name:'admin-product-list'}" class="btn btn-ghost">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateProduct()">{{ mode }}</button>
            </div>
        </div>
    </AdminLayout>
</template>