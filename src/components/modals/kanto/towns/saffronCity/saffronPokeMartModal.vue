<template>
  <CardModal
    name="saffroncitypokemart"
    title="PokeMart"
  >
    <template #body>
      <div
        id="saffronPokeMartModalBox"
      >
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
