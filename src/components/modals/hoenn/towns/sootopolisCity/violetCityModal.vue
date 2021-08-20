<template>
  <CardModal
    name="violetcity"
    title="Violet City"
  >
    <template #body>
      <img
        id="violetCityModalBox"
        usemap="#violetCityMap"
      >

      <map
        name="violetCityMap"
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
