<template>
  <CardModal
    name="johtoroute29"
    title="Route 29"
  >
    <template #body>
      <img
        id="johtoRoute29ModalBox"
        usemap="#johtoRoute29Map"
      >

      <map
        name="johtoRoute29Map"
      >
        <area
          shape="rect"
          coords="0,0,20,20"
          onclick="userInteractions.test()"
        >
      </map>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
