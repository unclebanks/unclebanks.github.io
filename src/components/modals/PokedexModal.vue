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
            class="dexEntry column is-4 has-text-centered"
            :class="`pokeDex${entry.flag}`"
            :data-type1="type1(entry)"
            :data-type2="type2(entry)"
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
import POKEDEX from '../../modules/db';

export default {
    components: {
        CardModal,
    },

    methods: {
        type1(entry) {
            if (entry.flag === 0) { return ''; }
            return POKEDEX[entry.id - 1].stats[0].types[0].toLowerCase();
        },

        type2(entry) {
            if (entry.flag === 0) { return ''; }
            const types = POKEDEX[entry.id - 1].stats[0].types;
            return types[types.length - 1].toLowerCase();
        },
    },
};
</script>
