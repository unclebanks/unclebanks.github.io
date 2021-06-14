<template>
  <CardModal
    name="cinnabarislandpokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="cinnabarPokeCenterModalBox"
      >
        <button
          onclick="userInteractions.fuchsiaPokeMartEvent()"
          class="button"
        >
          PokeMart Attendant
        </button><br>
        <button
          onclick="userInteractions.viewShop()"
          class="button"
        >
          Shop
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
