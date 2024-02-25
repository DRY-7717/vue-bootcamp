<template>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <RouterLink :to="{ name: 'category-items', params: { id: id } }">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img alt="Placeholder" class="block w-full h-auto" :src="thumbnails" />
                </div>
            </RouterLink>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <RouterLink :to="{ name: 'category-items', params: { id: id } }"
                        class="font-semibold text-black no-underline hover:underline">
                        {{ name }}
                    </RouterLink>
                </h1>
                <span class="block text-sm font-light text-gray-500 no-underline">
                    {{ count }} items
                </span>
            </header>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    id: Number,
    name: String,
    count: Number,
    thumbnails: String

})
</script>