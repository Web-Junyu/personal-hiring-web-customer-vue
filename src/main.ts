import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import { injectPinia } from '@/shared/setup-application';

const app = createApp(App);
injectPinia(app);
app.mount('#app');
