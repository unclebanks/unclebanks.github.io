<template>
  <CardModal
    name="olivinecity"
    title="Olivine City"
  >
    <template #body>
      <img
        id="olivineCityModalBox"
        usemap="#olivineCityMap"
      >

      <map
        name="olivineCityMap"
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
