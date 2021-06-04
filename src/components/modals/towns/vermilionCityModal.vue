<template>
  <CardModal
    name="vermilioncity"
    title="Vermilion City"
  >
    <template #body>
      <div
        id="vermilionCityModalBox"
      >
        <button
          onclick="userInteractions.vFisherman()"
          class="button"
        >
          Fishing Guru
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
