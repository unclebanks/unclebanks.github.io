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
          <br>
          <div id="brockPokemon">
            <h4>Brock's Team</h4>
            <div id="brockMon1">
              Geodude
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
