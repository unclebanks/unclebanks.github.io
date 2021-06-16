<template>
  <CardModal
    name="kantoroute15"
    title="Route 15"
  >
    <template #body>
      <img
        id="kantoRoute15ModalBox"
        usemap="#kantoRoute15Map"
      >

      <map
        name="kantoRoute15Map"
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
