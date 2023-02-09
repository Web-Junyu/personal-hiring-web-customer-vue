import { createPinia } from 'pinia';
import { App } from 'vue';

export const injectPinia = (app: App<Element>): void => {
    const pinia = createPinia();
    app.use(pinia);
};
