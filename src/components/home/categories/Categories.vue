<template >
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard v-for="card in cards" :key="card.id" :title="card.title"  :count="card.count" :image="card.image" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CategoriesCard from './CategoriesCard.vue';

const cards = ref([
    {
        "id": 1,
        "title": "Rendang",
        "image": "categories-1.jpg",
        "count": 22
    },
    {
        "id": 2,
        "title": "Air Mineral",
        "image": "categories-2.jpg",
        "count": 22
    },
    {
        "id": 3,
        "title": "Bakso",
        "image": "categories-3.jpg",
        "count": 22
    },
    {
        "id": 4,
        "title": "Gulai Tunjang",
        "image": "categories-4.jpg",
        "count": 22
    },
])
</script>