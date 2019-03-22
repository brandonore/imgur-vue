<template>
    <div>
        <AppHeader></AppHeader>
        <div class="ui container main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader
    }
}
</script>

<style scoped>
    .main {
        margin-top: 50px;
    }
</style>
