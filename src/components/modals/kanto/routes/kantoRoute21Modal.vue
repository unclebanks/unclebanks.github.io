<template>
  <CardModal
    name="kantoroute21"
    title="Route 21"
  >
    <template #body>
      <img
        id="kantoRoute21ModalBox"
        usemap="#kantoRoute21Map"
      >

      <map
        name="kantoRoute21Map"
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
