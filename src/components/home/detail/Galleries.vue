<template>
    <section id="gallery">
        <transition mode="out-in">
            <img :key="thumbnail" :src="thumbnail" alt="" class="w-full mt-6 rounded-2xl img-thumbnail">
        </transition>
        <div class="grid grid-cols-4 gap-4 mt-4">

            <div class="overflow-hidden cursor-pointer  rounded-2xl "   v-for="gallery in galleries" :key="gallery.id" :class="{ 'ring-2 ring-indigo-500': thumbnail == gallery.url }" @click="changeImage(gallery.url)">
                <img :src="gallery.url" class="w-full h-full object-cover object-center" alt="">
            </div>
             
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const galleries = ref([])
const thumbnail = ref("")


async function getItems() {
    const response = await axios.get(`https://zullkit-backend.demo.belajarkoding.com/api/products?id=${route.params.id}`)
    thumbnail.value = response.data.data.thumbnails
    galleries.value = response.data.data.galleries
}

const changeImage = (image) => {
    thumbnail.value = image
}


onMounted(() => {
    getItems()
})


</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: 0.5s;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-20px);
    opacity: 0;

}
</style>