<template>
  <div
    id="storageBox"
    style="display: none;"
  >
    <input
      id="autoSort"
      type="checkbox"
    ><label for="autoSort"><span class="checkDescription">Auto sort</span></label><br>
    <select
      id="pokeSortOrderSelect"
      onchange="userInteractions.changePokeSortOrder()"
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
      onchange="userInteractions.changePokeSortOrder()"
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
        v-for="(poke, index) in $store.state.pokemon.storage"
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
