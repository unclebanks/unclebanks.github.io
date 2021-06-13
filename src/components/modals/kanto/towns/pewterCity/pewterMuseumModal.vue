<template>
  <CardModal
    name="pewtermuseum"
    title="Pewter Museum"
  >
    <template #body>
      <div
        id="pewterMuseumModalBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.pewterMuseumScientist()"
          class="button"
        >
          Scientist
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
