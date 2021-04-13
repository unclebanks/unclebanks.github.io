<template>
  <div
    id="storageBox"
  >
    <label class="checkbox">
      <input
        id="autoSort"
        type="checkbox"
      >
      Auto sort
    </label>
    <div class="field has-addons mb-1">
      <p class="control">
        <input
          v-model="nameSearchText"
          class="input is-small"
          type="text"
          placeholder="Enter poke name"
        >
      </p>
      <p class="control">
        <a class="button is-small is-static">
          Search
        </a>
      </p>
    </div>
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
      :page-size="15"
      :filter="filter"
      list-id="storageList"
      list-class="manageTeamEnabled"
    >
      <template
        #item="{ item, realIndex }"
      >
        <StoragePokemon
          :ui="ui"
          :index="realIndex"
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

const nameFilter = (name) => {
    const lowerName = name.toLowerCase();
    return (poke) => poke.pokeName().toLowerCase().includes(lowerName);
};

export default {
    components: {
        StoragePokemon,
        Paginated,
    },

    props: {
        ui: { type: Object, required: true },
    },

    data: function () {
        return {
            nameSearchText: '',
        };
    },

    computed: {
        ...mapGetters({
            storage: 'pokemon/sortedStorage',
        }),

        filter() {
            return nameFilter(this.nameSearchText);
        },
    },
};
</script>
