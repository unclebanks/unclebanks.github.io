import { createApp } from 'vue';
import App from './components/App.vue';
import PokemonList from './components/PokemonList.vue';
import RoutesBox from './components/RoutesBox.vue';
import ViewSelect from './components/ViewSelect.vue';
import Inventory from './components/Inventory.vue';
import EnemyBox from './components/EnemyBox.vue';
import PlayerBox from './components/PlayerBox.vue';
import Console from './components/Console.vue';
import NavBox from './components/NavBox.vue';

export default () => {
    const app = createApp(App);

    app.component('PokemonList', PokemonList);
    app.component('RoutesBox', RoutesBox);
    app.component('ViewSelect', ViewSelect);
    app.component('Inventory', Inventory);
    app.component('EnemyBox', EnemyBox);
    app.component('PlayerBox', PlayerBox);
    app.component('Console', Console);
    app.component('NavBox', NavBox);

    return app.mount('#app');
};
