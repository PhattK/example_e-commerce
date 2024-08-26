<script setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";

import { useCartStore } from "@/stores/user/cart.js";

const FormData = [
    {
        name: 'Email Address',
        field: 'email',
    },
    {
        name: 'Name',
        field: 'name',
    },
    {
        name: 'Address',
        field: 'address',
    },
    {
        name: 'Note',
        field: 'note',
    },
]

const router = useRouter()
const cartStore = useCartStore()

const userFormData = reactive({})

const payment = () => {
    cartStore.placeorder(userFormData)
    router.push({ name: 'success'})
}
</script>

<template>
    <UserLayout>
        <h1 class="text-2xl font-bold m-4">Checkout</h1>
        <div class="flex">
            <section class="flex-auto w-64 font-semibold bg-base-200 p-4">
                <label v-for="form in FormData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <textarea v-if="form.field === 'address' || form.field === 'note'" v-model="userFormData[form.field]" class="textarea textarea-bordered h-24" :placeholder="form.name"></textarea>
                    <input v-else v-model="userFormData[form.field]" type="text" :placeholder="form.name" class="input input-bordered w-full" />
                </label>
                <button @click="payment" class="btn btn-neutral mt-4 w-full">ชำระเงิน</button>
            </section>
            <section class="flex-auto w-32 font-semibold bg-primary p-4">
                <div v-for="item in cartStore.items" class="flex pb-4">
                    <div class="flex-1">
                        <img class="w-full p-6" :src="item.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full py-6">
                            <div>
                                <div><b>{{ item.name }}</b></div>
                                <div>จำนวน: {{ item.quantity }}</div>
                            </div>
                            <RouterLink class="cursor-pointer" :to=" {name: 'cart'} ">Edit</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider divider-neutral"></div>
                <div class="text-xl font-semibold">Order summary</div>
                <div class="flex justify-between py-2">
                    <div>ราคาสินค้าทั้งหมด</div>
                    <div>{{ cartStore.summaryPrice }}</div>
                </div>
                <div class="flex justify-between py-2">
                    <div>ค่าส่ง</div>
                    <div>0</div>
                </div>
                <div class="divider divider-neutral"></div>
                <div class="flex justify-between py-2">
                    <div>ราคาทั้งสิ้น</div>
                    <div>{{ cartStore.summaryPrice }}</div>
                </div>
            </section>
        </div>
    </UserLayout>
</template>