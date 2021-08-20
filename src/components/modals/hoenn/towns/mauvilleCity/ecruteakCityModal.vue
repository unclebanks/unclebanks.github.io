<template>
  <CardModal
    name="ecruteakcity"
    title="Ecruteak City"
  >
    <template #body>
      <img
        id="ecruteakCityModalBox"
        usemap="#ecruteakCityMap"
      >

      <map
        name="ecruteakCityMap"
      >
        <area
          shape="rect"
          coords="0,0,0,0"
          onclick="userInteractions.test()"
        >
      </map>
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
