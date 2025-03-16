import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

import './style.css';
import router from './router';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');