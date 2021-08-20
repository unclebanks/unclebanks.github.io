<template>
  <CardModal
    name="fortreecity"
    title="Fortree City"
  >
    <template #body>
      <img
        id="fortreeCityModalBox"
        usemap="#fortreeCityMap"
      >

      <map
        name="fortreeCityMap"
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
