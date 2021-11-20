<template>
  <div id="partyBox">
    <div
      id="rosterBox"
    >
      <p>
        <button
          id="heal"
          class="button"
        >
          Heal
        </button>
      </p>
      <p>
        <button
          class="button"
          onclick="userInteractions.viewMap()"
        >
          Map
        </button>
      </p>
      <p>
        <button
          class="button"
          onclick="userInteractions.viewShop()"
        >
          Shop
        </button>
      </p>
      <p>
        <button
          class="button"
          onclick="userInteractions.viewPokeDex()"
        >
          Pokedex
        </button>
      </p>
      <p>
        <button
          class="button"
          onclick="userInteractions.viewSettings()"
        >
          Settings
        </button>
      </p>
      <p>
        <button
          class="button"
          onclick="userInteractions.viewBag()"
        >
          Bag
        </button>
      </p>
      <input
        id="enableDelete"
        v-model="manageTeam"
        type="checkbox"
      ><label for="enableDelete"><span class="checkDescription">Manage Team</span></label>
      <ul
        id="rosterList"
        :class="manageTeam ? 'manageTeamEnabled' : ''"
      >
        <PartyPokemon
          v-for="(poke, index) in $store.state.pokemon.party"
          :id="`listPoke${index}`"
          :key="poke.pokeName()"
          :poke="poke"
          :index="index"
          :ui="ui"
          :player="player"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import PartyPokemon from './PartyPokemon.vue';

export default {
    components: {
        PartyPokemon,
    },

    props: {
        ui: { type: Object, required: true },
        player: { type: Object, required: true },
    },

    data: function () {
        return {
            manageTeam: false,
        };
    },
};
</script>
