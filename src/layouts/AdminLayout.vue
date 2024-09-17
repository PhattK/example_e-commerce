<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const menus = [
    {
        name: 'Dashboard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'User',
        routeName: 'admin-user-list'
    },
    {
        name: 'Product',
        routeName: 'admin-product-list'
    },
    {
        name: 'Order',
        routeName: 'admin-order-list'
    },
    {
        name: 'Logout',
        routeName: 'admin-login'
    },
]

const route = useRoute()
const activeMenu = ref('')

onMounted(() => {
    activeMenu.value = route.name
})
</script>

<template>
    <div class="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mx-4">
            <slot></slot>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li class="text-3xl font-bold"><a>Backoffice</a></li>
            <li v-for="menu in menus">
                <RouterLink 
                :to="{ name: menu.routeName }"
                :class="menu.routeName === activeMenu ? 'active' : ''"
                >
                    {{ menu.name }}
                </RouterLink>
            </li>
            </ul>
        </div>
    </div>
</template>