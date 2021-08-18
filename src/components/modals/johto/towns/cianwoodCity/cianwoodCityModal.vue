<template>
  <CardModal
    name="cianwoodcity"
    title="Cianwood City"
  >
    <template #body>
      <img
        id="cianwoodCityModalBox"
        usemap="#cianwoodCityMap"
      >

      <map
        name="cianwoodCityMap"
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
