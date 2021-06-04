<template>
  <CardModal
    name="saffroncity"
    title="Saffron City"
  >
    <template #body>
      <div
        id="saffronCityModalBox"
      >
        <button
          onclick="userInteractions.justTestStuff()"
          class="button"
        >
          TEST
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
