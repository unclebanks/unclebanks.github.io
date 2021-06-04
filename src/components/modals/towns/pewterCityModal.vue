<template>
  <CardModal
    name="pewtercity"
    title="Pewter City"
  >
    <template #body>
      <div
        id="pewterCityModalBox"
      >
        <button
          onclick="userInteractions.pewterMuseumEvent()"
          class="button"
        >
          Museum
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
