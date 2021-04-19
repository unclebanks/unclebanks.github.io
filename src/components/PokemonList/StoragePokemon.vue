<template>
  <li
    :id="`storagePoke${index}`"
    class="is-flex is-flex-wrap-wrap is-justify-content-space-between"
  >
    <a
      href="#"
      :class="`pokeListName ${pokeStatus(poke)}`"
      :status="pokeStatus(poke)"
    >{{ poke.pokeName() }} ({{ poke.level() }})
    </a><br>
    <div
      class="buttons are-small"
    >
      <button
        v-if="!isPinned(poke)"
        class="button is-rounded"
        @click="pin(poke)"
      >
        Pin
      </button>
      <button
        v-else
        class="button is-rounded"
        @click="unpin(poke)"
      >
        Unpin
      </button>
      <button
        class="button is-rounded"
        @click="ui.moveToRoster(index)"
      >
        Active
      </button>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    props: {
        index: { type: Number, required: true },
        poke: { type: Object, required: true },
        ui: { type: Object, required: true },
    },

    computed: {
        ...mapGetters({
            isPinned: 'pokemon/isPinned',
        }),
    },

    methods: {
        ...mapMutations({
            pin: 'pokemon/pinStorage',
            unpin: 'pokemon/unpinStorage',
        }),

        /// Duplicate, refactor please.
        pokeStatus(poke) {
            if (poke.alive()) {
                if (poke === this.$store.getters['pokemon/active']) {
                    if (poke.shiny()) {
                        return 'activeShiny';
                    }
                    return 'activeNormal';
                }
                if (poke.shiny()) {
                    return 'inactiveShiny';
                }
                return 'inactiveNormal';
            }
            return 'dead';
        },
    },
};
</script>
