<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            Image Storage
        </router-link>

        <div class="right menu">
            <!-- if user is logged in show menu buttons -->
            <div class="horizontal" v-if="isLoggedIn">
                <router-link to="/" class="item">Gallery</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <!-- if user is not logged in show login button -->
            <a class="ui item" href="#" @click="login" v-else>
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>

