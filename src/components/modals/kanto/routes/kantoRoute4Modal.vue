<template>
  <CardModal
    name="kantoroute4"
    title="Route 4"
  >
    <template #body>
      <img
        id="kantoRoute4ModalBox"
        usemap="#kantoRoute4Map"
      >

      <map
        name="kantoRoute4Map"
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
