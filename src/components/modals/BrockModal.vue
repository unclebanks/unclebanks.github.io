<template>
  <CardModal
    name="brock"
    title="Brock"
  >
    <template #body>
      <div id="brockProfile">
        <div id="brockInfo">
          <h4>Brock</h4><br>
          <div id="brockImage" />
          <h2>Information</h2>
          <p>Brock is the PEWTER CITY Gym Leader who specializes in ROCK type POKEMON</p>
          <div id="brockInformation">
            <div id="brockPokemon">
              <h4>Brock's Team</h4>
              <p id="brockMon1" />
              <p>Geodude</p>
              <p id="brockMon2" />
              <p>Onix</p>
            </div>
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
