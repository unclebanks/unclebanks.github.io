<template>
  <CardModal
    name="lavendertown"
    title="Lavender Town"
  >
    <template #body>
      <div
        id="lavenderTownModalBox"
      >
        <button
          onclick="userInteractions.justTestStuff()"
          class="button"
        >
          NOTHING
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
