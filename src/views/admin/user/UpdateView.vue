<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminUserStore } from '@/stores/admin/user'
const adminUserStore = useAdminUserStore()
import { useEventStore } from '@/stores/event'
const eventStore = useEventStore()

const route = useRoute()
const router = useRouter()
const userIndex = ref(-1)
const userData = reactive({
    name: '',
    role: '',
    status: ''
})

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)
        userData.name = selectedUser.name
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }
})

const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    eventStore.popupMessage('info', 'Update Success')
    router.push({ name: 'admin-user-list'})
}

const formData = [
    {
        name: 'Name',
        field: 'name',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']
    },
]
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8">
            <div class="text-2xl font-bold">
                Update
                <span class="badge badge-primary">
                    ID: {{ userIndex }}
                </span>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="userData[form.field]" v-if="form.type === 'text'" type="text" class="input input-bordered w-full" />
                    <select v-model="userData[form.field]" v-if="form.type === 'select'" class="select select-bordered">
                        <option v-for="choice in form.dropdownList">
                            {{ choice }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="mt-4 flex justify-end">
                <RouterLink :to="{name:'admin-user-list'}" class="btn btn-ghost">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateUser()">Update</button>
            </div>
        </div>
    </AdminLayout>
</template>