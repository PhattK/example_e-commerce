<script setup>
import { RouterLink } from "vue-router";
import AdminLayout from '@/layouts/AdminLayout.vue'
import Table from '@/components/Table.vue'

import { useAdminUserStore } from '@/stores/admin/user'
const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateUser(index, selectedUser)
}

</script>

<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl font-bold p-2">
                Users
            </div>
        </div>
        <Table :headers="['Name', 'Role', 'Status', 'UpdateAt', '']">
            <tr v-for="(user, index) in adminUserStore.list">
                <td>{{ user.name }}</td>
                <td>{{ user.role }}</td>
                <td>
                    <div class="badge" :class="user.status === 'active' ? 'badge-success' : 'badge-ghost'">
                        {{ user.status }}
                    </div>
                </td>
                <td>{{ user.updateAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink :to="{ name: 'admin-user-update', params: {id: index}}" class="btn">Edit</RouterLink>
                        <button @click="changeStatus(index)" class="btn">
                            {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                        </button>
                    </div>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>