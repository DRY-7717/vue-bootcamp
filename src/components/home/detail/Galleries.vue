<template>
    <section id="gallery">
        <transition mode="out-in">
            <img :key="defaultImage" :src="`../src/assets/img/${defaultImage}`" alt=""
                class="w-full mt-6 rounded-2xl img-thumbnail">
        </transition>
        <div class="grid grid-cols-4 gap-4 mt-4">

            <div class="overflow-hidden cursor-pointer  rounded-2xl"
                :class="{ 'ring-2 ring-indigo-500': defaultImage == gallery.image }" v-for="gallery in galleries"
                :key="gallery.id" @click="changeRing(gallery.image)">
                <img :src="`../src/assets/img/${gallery.image}`" class="w-full" alt="">
            </div>

        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const defaultImage = ref('gallery-5.png')
const galleries = ref([
    {
        'id': 1,
        'image': 'gallery-2.png'
    },
    {
        'id': 2,
        'image': 'gallery-3.png'
    },
    {
        'id': 3,
        'image': 'gallery-4.png'
    },
    {
        'id': 4,
        'image': 'gallery-5.png'
    },
])

const changeRing = (image) => {
    defaultImage.value = image
}
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