import { createApp } from 'vue';
import store from './store';

// Main UI
import App from './components/App.vue';

export default () => {
    const app = createApp(App).use(store);

    return {
        app: app.mount('#app'),
    };
};
