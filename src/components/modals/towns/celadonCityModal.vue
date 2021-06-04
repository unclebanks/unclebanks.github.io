<template>
  <CardModal
    name="celadoncity"
    title="Celadon City"
  >
    <template #body>
      <div
        id="celadonCityModalBox"
      >
        <button
          onclick="userInteractions.gameCorner()"
          class="button"
        >
          Game Corner
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
