import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

//createApp(App).use(router,store).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))

const app = createApp(App);

// Add router and store to the app instance
app.use(router);
app.use(store);

const vm = app.mount('#app');

// Wait for the next tick before sending postMessage
vm.$nextTick(() => {
  window.postMessage({ payload: 'removeLoading' }, '*');
});
