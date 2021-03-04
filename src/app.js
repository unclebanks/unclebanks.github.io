import { createApp } from 'vue';

// Modals
import SettingsModal from './components/modals/SettingsModal.vue';

// Main UI
import App from './components/App.vue';

export default () => {
    const app = createApp(App);
    const settingsModal = createApp(SettingsModal);

    return {
        app: app.mount('#app'),
        settings: settingsModal.mount('#settingsContainer'),
    };
};
