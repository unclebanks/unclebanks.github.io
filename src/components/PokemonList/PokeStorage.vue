<template>
  <div
    id="storageBox"
  >
    <input
      id="autoSort"
      type="checkbox"
    ><label for="autoSort"><span class="checkDescription">Auto sort</span></label><br>
    <select
      id="pokeSortOrderSelect"
      v-model="$store.state.pokemon.storageSortMethod"
    >
      <option value="lvl">
        Level
      </option>
      <option value="dex">
        Pokedex #
      </option>
      <option value="vlv">
        Level, attack
      </option>
      <option value="time">
        Newest
      </option>
    </select>
    <select
      id="pokeSortDirSelect"
      v-model="$store.state.pokemon.storageSortDirection"
    >
      <option value="asc">
        Asc
      </option>
      <option value="desc">
        Desc
      </option>
    </select>
    <Paginated
      :get-key="(poke) => poke.pokeName()"
      :list="storage"
      list-id="storageList"
      list-class="manageTeamEnabled"
    >
      <template
        #item="{ item, index, offset }"
      >
        <StoragePokemon
          :ui="ui"
          :index="index + offset"
          :poke="item"
        />
      </template>
    </Paginated>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StoragePokemon from './StoragePokemon.vue';
import Paginated from '../common/Paginated';

export default {
    components: {
        StoragePokemon,
        Paginated,
    },

    props: {
        ui: { type: Object, required: true },
    },

    computed: {
        ...mapGetters({
            storage: 'pokemon/sortedStorage',
        }),
    },
};
</script>
