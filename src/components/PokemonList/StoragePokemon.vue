<template>
  <li
    :id="`storagePoke${index}`"
  >
    <a
      href="#"
      :class="`pokeListName ${pokeStatus(poke)}`"
      :status="pokeStatus(poke)"
    >{{ poke.pokeName() }} ({{ poke.level() }})
    </a>
    <br>
    <button
      class="pokeUpButton"
      @click="ui.pokemonToUp(index, 'storage')"
    >
      <i
        class="fa fa-arrow-up"
        aria-hidden="true"
      />
    </button>
    <button
      class="pokeDownButton"
      @click="ui.pokemonToDown(index, 'storage')"
    >
      <i
        class="fa fa-arrow-down"
        aria-hidden="true"
      />
    </button>
    <button
      class="pokeFirstButton"
      @click="ui.pokemonToFirst(index, 'storage')"
    >
      #1
    </button>
    <button
      class="toStorageButton"
      @click="ui.moveToRoster(index)"
    >
      Active
    </button>
  </li>
</template>

<script>
export default {
    props: {
        index: { type: Number, required: true },
        poke: { type: Object, required: true },
        ui: { type: Object, required: true },
    },

    methods: {
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
