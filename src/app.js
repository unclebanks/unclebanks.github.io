import { createApp } from 'vue';
import App from './components/App.vue';

export default () => {
    const app = createApp(App);

    return app.mount('#app');
};
