<template>
  <CardModal
    name="kantoroute5"
    title="Route 5"
  >
    <template #body>
      <img
        id="kantoRoute5ModalBox"
        usemap="#kantoRoute5Map"
      >

      <map
        name="kantoRoute5Map"
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
