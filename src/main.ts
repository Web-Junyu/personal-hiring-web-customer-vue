import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import { injectPinia, injectRouter } from '@/shared/setup-application';

const app = createApp(App);
injectPinia(app);
injectRouter(app);
app.mount('#app');
