<template>
  <li
    class="listpoke"
  >
    <p>
      <a
        href="#"
        @click="ui.changePokemon(index)"
      ><img :src="poke.image().party"></a>
    </p>
    <a
      href="#"
      class="pokeListName"
      :class="classes(poke)"
      :status="pokeStatus(poke)"
      @click="ui.changePokemon(index)"
    >{{ poke.pokeName() }} ({{ poke.level() + (poke.prestigeLevel ? (`p${poke.prestigeLevel}`) : '') }})</a>
    <br>
    <button
      class="pokeEvolveButton"
      @click="ui.evolvePokemon(index)"
    >
      Evolve
    </button>
    <button
      class="pokePrestigeButton"
      @click="ui.prestigePokemon(index)"
    >
      Prestige
    </button>
    <button
      class="pokeUpButton"
      @click="ui.pokemonToUp(index)"
    >
      <i
        class="fa fa-arrow-up"
        aria-hidden="true"
      />
    </button>
    <button
      class="pokeDownButton"
      @click="ui.pokemonToDown(index)"
    >
      <i
        class="fa fa-arrow-down"
        aria-hidden="true"
      />
    </button>
    <button
      class="toStorageButton"
      @click="ui.moveToStorage(index)"
    >
      PC
    </button>
  </li>
</template>

<script>
const dynamicClasses = {
    'canEvolve': (poke) => poke.canEvolve(),
    'canPrestige': (poke) => poke.canPrestige(),
};

export default {
    props: {
        ui: { type: Object, required: true },
        poke: { type: Object, required: true },
        index: { type: Number, required: true },
    },

    methods: {
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

        classes(poke) {
            return Object.keys(dynamicClasses)
                .filter((classname) => dynamicClasses[classname](poke))
                .concat(this.pokeStatus(poke));
        },
    },
};
</script>
