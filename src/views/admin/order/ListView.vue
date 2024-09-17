<script setup>
import { RouterLink } from "vue-router";
import { useAdminOrderStore } from "@/stores/admin/order";
import AdminLayout from '@/layouts/AdminLayout.vue'
import Table from '@/components/Table.vue'

const adminOrderStore = useAdminOrderStore()
</script>

<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl font-bold p-2">
                Orders
            </div>
        </div>
        <Table :headers="['Customer Name', 'Price', 'Status', 'UpdateAt', '']">
            <tr v-for="(order, index) in adminOrderStore.list">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }} ฿</td>
                <td>
                    <div class="badge badge-outline">
                        {{ order.status }}
                    </div>
                </td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink :to="{name:'admin-order-detail',params:{id: index}}" class="btn">See Detail</RouterLink>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>