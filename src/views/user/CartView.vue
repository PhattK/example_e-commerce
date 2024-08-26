<script setup>
import { RouterLink } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";

import { useCartStore } from "@/stores/user/cart.js";

const cartStore = useCartStore()

const removeItemInCart = (index) => {
  cartStore.removeItemInCart(index)
}

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

</script>

<template>
    <UserLayout>
        <h1 class="text-2xl font-bold m-4">Shopping Cart</h1>
        <div class="flex">
            <div class="flex-auto w-64 font-semibold bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">
                    Cart is Empty
                </div>
                <div v-for="(item, index) in cartStore.items" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl" alt="">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div class="relative grid grid-cols-2">
                                <div>
                                    <div><b>{{ item.name }}</b></div>
                                    <div>{{ item.about }}</div>
                                    <div>{{ item.price }}</div>
                                </div>
                                <div>
                                    <select v-model="item.quantity" class="select select-bordered w-1/2 mx-6" @change="changeQuantity($event, index)">
                                        <option v-for="quantity in [1,2,3,4,5]">
                                            {{ quantity }}
                                        </option>
                                    </select>
                                </div>
                                <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                    <Close></Close>
                                </div>
                            </div>
                            <div><b>In Stock</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto w-32 font-semibold bg-primary p-4">
                <div class="text-xl font-semibold">Order summary</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ราคารวม</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                </div>
                <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-full mt-4">ชำระเงิน</RouterLink>
            </div>
        </div>
    </UserLayout>
</template>