<template>
  <CardModal
    name="ceruleancity"
    title="Cerulean City"
  >
    <template #body>
      <div
        id="ceruleanCityModalBox"
      >
        <button
          onclick="userInteractions.nuggetBridgeEvent()"
          class="button"
        >
          Nugget Bridge
        </button><br>
        <button
          onclick="userInteractions.checkStory()"
          class="button"
        >
          Burgled House
        </button><br>
        <button
          onclick="userInteractions.ceruleanPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.ceruleanPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.ceruleanGym()"
          class="button"
        >
          Cerulean Gym
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
