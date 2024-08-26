<script setup>
import { onMounted, ref } from "vue";
import UserLayout from "@/layouts/UserLayout.vue";

const profileImageUrl = ref('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')
const email = ref('')
const name = ref('')

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        email: email.value,
        name: name.value
    }
    localStorage.setItem('profile-data', JSON.stringify(profileData))
    alert('Success Update Profile')
}

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.imageUrl
        email.value = profileData.email
        name.value = profileData.name
    }
})
</script>

<template>
    <UserLayout>
        <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8">
            <div class="font-bold text-xl mb-2">Profile</div>
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img :src="profileImageUrl" />
                        </div>
                    </div>
                    <input type="file" @change="handleFileUpload">
                </div>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Email</span>
                    </div>
                    <input v-model="email" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Name</span>
                    </div>
                    <input v-model="name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </label>
                <button @click="updateProfile" class="btn btn-primary w-full mt-4">Update Profile</button>             
            </div>
        </div>
    </UserLayout>
</template>