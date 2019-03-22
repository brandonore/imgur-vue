import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import GalleryList from './components/GalleryList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: GalleryList },
        { path: '/upload', component: UploadForm},
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');