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
    <ul
      v-if="!$store.state.loading"
      id="storageList"
      class="manageTeamEnabled"
    >
      <StoragePokemon
        v-for="(poke, index) in $store.getters['pokemon/sortedStorage']"
        :key="poke.pokeName()"
        :ui="ui"
        :index="index"
        :poke="poke"
      />
    </ul>
  </div>
</template>

<script>
import StoragePokemon from './StoragePokemon.vue';

export default {
    components: {
        StoragePokemon,
    },

    props: {
        ui: { type: Object, required: true },
    },

    data: function () {
        return {
            test: false,
        };
    },
};
</script>
