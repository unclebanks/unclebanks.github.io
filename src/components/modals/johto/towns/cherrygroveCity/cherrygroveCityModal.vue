<template>
  <CardModal
    name="cherrygrovecity"
    title="Cherrygrove City"
  >
    <template #body>
      <img
        id="cherrygroveCityModalBox"
        usemap="#cherrygroveCityMap"
      >

      <map
        name="cherrygroveCityMap"
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
