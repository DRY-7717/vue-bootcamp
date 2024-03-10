<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <NavLogo />
            <NavUserInfoVue v-if="auth.user" :user="auth.user.data" />
            <AuthButton v-else />
            <NavigationLink />
        </div>
    </nav>
</template>
<script setup>
import NavLogo from "./NavLogo.vue";
import NavigationLink from "./NavigationLink.vue";
import AuthButton from "./AuthButton.vue";
import NavUserInfoVue from "./NavUserInfo.vue";
import { useauthStore } from "@/stores/auth";


const auth = useauthStore()


</script>