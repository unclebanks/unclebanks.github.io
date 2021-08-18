<template>
  <CardModal
    name="goldenrodcity"
    title="Goldenrod City"
  >
    <template #body>
      <img
        id="goldenrodCityModalBox"
        usemap="#goldenrodCityMap"
      >

      <map
        name="goldenrodCityMap"
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
