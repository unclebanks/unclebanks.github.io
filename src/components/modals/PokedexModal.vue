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
            <div class="card">
              <header class="card-header">
                <p class="card-header-title py-1">
                  # {{ pokedexId(entry) }}
                </p>
                <div class="card-header-icon">
                  <span class="icon is-svg">
                    <i
                      class="pokeball"
                      :class="caughtIndicationClass(entry)"
                    />
                  </span>
                </div>
              </header>

              <div class="card-image">
                <figure class="image is-96x96">
                  <span
                    v-if="entry.flag > 0"
                    class="icon is-svg type-icon"
                  >
                    <i :class="type1(entry)" />
                  </span>

                  <img
                    :src="pokeImage(entry)"
                  >

                  <span
                    v-if="entry.flag > 0 && isDualType(entry)"
                    class="icon is-svg type-icon"
                  >
                    <i :class="type2(entry)" />
                  </span>
                  <span
                    v-else-if="entry.flag > 0"
                    class="icon"
                  />
                </figure>
              </div>

              <div class="card-footer">
                <p class="card-footer-item py-1">
                  {{ entry.flag > 0 ? entry.name : '???' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';
import POKEDEX from '../../modules/db';
import { pokeImage } from '../../modules/poke';

export default {
    components: {
        CardModal,
    },

    methods: {
        type1(entry) {
            if (entry.flag === 0) { return ''; }
            return POKEDEX[entry.id - 1].stats.types[0].toLowerCase();
        },

        type2(entry) {
            if (entry.flag === 0) { return ''; }
            const types = POKEDEX[entry.id - 1].stats.types;
            return types[types.length - 1].toLowerCase();
        },

        isDualType(entry) {
            return POKEDEX[entry.id - 1].stats.types.length === 2;
        },

        caughtIndicationClass(entry) {
            switch (entry.flag) {
            case 5: case 7: return 'prev-caught';
            case 6: return 'caught';
            case 8: return 'caught-shiny';
            default: return '';
            }
        },

        pokeImage(entry) {
            const shinyOrNormal = entry.flag === 8 ? 'shiny' : 'normal';
            return pokeImage(shinyOrNormal, 'front', entry.name);
        },

        pokedexId(entry) {
            return POKEDEX[entry.id - 1].id;
        },
    },
};
</script>
