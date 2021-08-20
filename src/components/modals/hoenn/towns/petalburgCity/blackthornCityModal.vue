<template>
  <CardModal
    name="blackthorncity"
    title="Blackthorn City"
  >
    <template #body>
      <img
        id="blackthornCityModalBox"
        usemap="#blackthornCityMap"
      >

      <map
        name="blackthornCityMap"
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
