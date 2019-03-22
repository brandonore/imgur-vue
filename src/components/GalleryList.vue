<template>
    <div>
        <div class="image-container" v-if="isLoggedIn">
            <img v-for="image in allImages" :src="image.link" />
        </div>
        <h3 v-else>Please login to get started</h3>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'GalleryList',
    computed: mapGetters(['allImages', 'isLoggedIn']),
    methods: mapActions(['fetchImages']),
    created() {
        this.fetchImages();
    }
}
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }
    img {
        max-width: 100%;
        padding: 5px;
    }
    h3 {
        text-align: center;
        font-weight: 200;
    }
</style>
