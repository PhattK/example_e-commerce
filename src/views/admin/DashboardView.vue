<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";

const priceChart = {
    options: {
        chart: {
            id: "vuechart-example",
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ]
}

const donutChart = {
    options: {
        chart: {
            type: 'donut'
        }
    },
    series: [44, 55, 41, 17, 15]
}

</script>

<template>
    <AdminLayout>
        <div class="font-bold text-3xl my-4 p-2">Dashboard</div>
        <div class="stats w-full mb-4 shadow">
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        class="inline-block h-8 w-8 stroke-current">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" 
                        d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                    </svg>
                </div>
                <div class="stat-title">Order</div>
                <div class="stat-value">31K</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512"
                        class="inline-block h-8 w-8 stroke-current">
                        <path 
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" 
                        d="M248 0L208 0c-26.5 0-48 21.5-48 48l0 112c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-112c0-26.5-21.5-48-48-48L328 0l0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80zM64 256c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0zM352 512l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2l0 160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                </div>
                <div class="stat-title">Products</div>
                <div class="stat-value">4,200</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        class="inline-block h-8 w-8 stroke-current">
                        <path 
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" 
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </div>
                <div class="stat-title">Users</div>
                <div class="stat-value">1,200</div>
            </div>
        </div>
        <div class="flex">
            <div class="flex-1">
                <apexchart  
                type="bar" 
                :options="priceChart.options" 
                :series="priceChart.series">
                </apexchart>
            </div>
            <div class="flex-1">
                <apexchart  
                type="donut" 
                :options="donutChart.options" 
                :series="donutChart.series">
                </apexchart>
            </div>
        </div>
    </AdminLayout>
</template>
