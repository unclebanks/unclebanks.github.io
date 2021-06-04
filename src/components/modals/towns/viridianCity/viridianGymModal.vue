<template>
  <CardModal
    name="viridiangym"
    title="Viridian Gym"
  >
    <template #body>
      <div
        id="viridianGymModalBox"
      >
        <button
          onclick="userInteractions.viridianPokeMartEvent()"
          class="button"
        >
          Needs Stuff
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
