<template>
  <CardModal
    name="pokedex"
    title="Pokedex"
  >
    <template #body>
      <div
        id="pokedexBox2"
      >
        <select
          id="dexView"
        >
          <option value="all">
            All
          </option>
        </select>
        <div
          id="dexList2"
          class="columns is-multiline"
        >
          <div
            v-for="entry in $store.getters['pokedex/dataWithUnseen']"
            :key="entry.id"
            class="column is-4 has-text-centered"
            :class="`pokeDex${entry.flag}`"
          >
            <figure class="image is-96x96">
              <img
                :src="`assets/sprites/normal/front/${entry.name}.png`"
              >
            </figure>
            <p>{{ entry.id }} {{ entry.flag > 0 ? entry.name : '???' }}</p>
          </div>
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
