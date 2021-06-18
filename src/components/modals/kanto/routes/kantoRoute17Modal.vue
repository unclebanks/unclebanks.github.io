<template>
  <CardModal
    name="kantoroute17"
    title="Route 17"
  >
    <template #body>
      <img
        id="kantoRoute17ModalBox"
        usemap="#kantoRoute17Map"
      >

      <map
        name="kantoRoute17Map"
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
