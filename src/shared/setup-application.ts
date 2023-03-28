import { routes } from '@/core/routes/routes';
import { createPinia } from 'pinia';
import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

export const injectPinia = (app: App<Element>): void => {
    const pinia = createPinia();
    app.use(pinia);
};

export const injectRouter = (app: App<Element>): void => {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });
    app.use(router);
};
