<template>
  <CardModal
    name="viridiancity"
    title="Viridian City"
  >
    <template #body>
      <div
        id="viridianCityModalBox"
      >
        <button
          id="pokemart"
          onclick="userInteractions.viridianPokeMartEvent()"
          class="button"
        >
          PokeMart Attendant
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
