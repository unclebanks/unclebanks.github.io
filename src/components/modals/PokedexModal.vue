<template>
  <CardModal
    name="pokedex"
    title="Pokedex"
  >
    <template #body>
      <div
        id="pokedexBox"
      >
        <select
          id="dexView"
        >
          <option value="all">
            All
          </option>
        </select>
        <div id="dexList">
          <li
            v-for="entry in $store.getters['pokedex/dataWithUnseen']"
            :key="entry.id"
            :class="`pokeDex${entry.flag}`"
          >
            {{ entry.id }} {{ entry.name }}
          </li>
        </div>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
