<template>
  <CardModal
    name="azaleatown"
    title="Azalea Town"
  >
    <template #body>
      <img
        id="azaleaTownModalBox"
        usemap="#azaleaTownMap"
      >

      <map
        name="azaleaTownMap"
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
