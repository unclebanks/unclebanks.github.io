<template>
  <CardModal
    name="kantoroute8"
    title="Route 8"
  >
    <template #body>
      <img
        id="kantoRoute8ModalBox"
        usemap="#kantoRoute8Map"
      >

      <map
        name="kantoRoute8Map"
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
