<script setup>
import { ref, onMounted } from "vue";
import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/user/cart.js";

const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
})

</script>

<template>
    <UserLayout>
        <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8">
            <div>
                <div class="text-xl"><b>Your order is successful!</b></div>
                <div>Hi {{ orderData.name }}</div>
                <div>เตรียมรอรับสินค้าได้เลย</div>
            </div>
            <div class="divider divider-primary"></div>
            <div class="grid grid-cols-4 gap-2">
                <div class="flex flex-col">
                    <div class="font-semibold">Order Date</div>
                    <div>{{ orderData.createdDate }}</div>
                </div>
                <div>
                    <div class="font-semibold">Order Number</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>
                <div>
                    <div class="font-semibold">Payment Method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-semibold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider divider-primary"></div>
                <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 p-4 items-center">
                    <div class="w-full">
                        <img :src="product.imageUrl">
                    </div>
                    <div><b>{{ product.name }}</b></div>
                    <div>จำนวน : {{ product.quantity }}</div>
                    <div>{{ product.price*product.quantity }}</div>
                </div>
            <div class="divider divider-primary"></div>
            <div class="flex justify-between">
                <div class="font-semibold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="flex justify-between">
                <div class="font-semibold">ค่าส่ง</div>
                <div>0</div>
            </div>
            <div class="divider divider-primary"></div>
            <div class="flex justify-between">
                <div class="font-semibold">ราคาทั้งสิ้น</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="divider divider-primary"></div>
            <div class="font-semibold text-center">ขอบคุณที่อุดหนุน</div>
        </div>
    </UserLayout>
</template>