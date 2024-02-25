<template >
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard v-for="category in categories" :key="category.id" :name="category.name"
                :count="category.products_count" :thumbnails="category.thumbnails" :id="category.id" />
        </div>
    </div>
</template> 
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CategoriesCard from '@/components/home/categories/CategoriesCard.vue';
const categories = ref([]);


async function getCategories() {
    try {
        const response = await axios.get('https://zullkit-backend.demo.belajarkoding.com/api/categories')
        categories.value = response.data.data.data
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getCategories()
})




</script>