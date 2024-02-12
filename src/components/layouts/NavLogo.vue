<template >
    <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <img src="@/assets/img/logo.svg" class="h-8 ml-3 sm:ml-0 sm:h-8" alt="Flowbite Logo" />
    </RouterLink>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
</script>