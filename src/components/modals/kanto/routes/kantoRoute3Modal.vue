<template>
  <CardModal
    name="kantoroute3"
    title="Route 3"
  >
    <template #body>
      <img
        id="kantoRoute3ModalBox"
        usemap="#kantoRoute3Map"
      >

      <map
        name="kantoRoute3Map"
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
