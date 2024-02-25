<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ items.name }}</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div v-if="items.products != 0" class="w-full flex flex-wrap">
                <ItemsCard v-for="item in items.products" :key="item.id" :name="item.name" :image="item.thumbnails" />
            </div>
            <div class="w-full lg:mx-4 mx-1" v-else>
                Data not found.
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import ItemsCard from '../items/ItemsCard.vue';
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';


const route = useRoute();

const items = ref([])

async function getItems() {
    try {
        const response = await axios.get(`https://zullkit-backend.demo.belajarkoding.com/api/categories?id=${route.params.id}&show_product=1`)
        items.value = response.data.data
        console.log(items.value.products);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getItems()
})

</script>