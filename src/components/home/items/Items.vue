<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <ItemsCard v-for="item in items" :key="item.id" :name="item.name" 
                :image="item.thumbnails" :id="item.id" />
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import ItemsCard from './ItemsCard.vue'
import { ref, onMounted } from "vue";

const items = ref([])

async function getItems() {
    try {
        const response = await axios.get('https://zullkit-backend.demo.belajarkoding.com/api/products')
        items.value = response.data.data.data
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getItems()
})

</script>