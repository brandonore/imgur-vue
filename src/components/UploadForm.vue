<template>
    <div class="dropper">
        <input type="file" 
            multiple
            accept="image/*" 
            @change="uploadImages($event.target.files)"/> 
        <span>Drag files or click to upload!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',
    methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
    .dropper {
        height: 30vh;
        border: 1px dashed black;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all .2s linear;
    }
    .dropper:hover {
        background-color: #eee;
    }
    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
</style>
