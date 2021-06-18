<template>
  <CardModal
    name="kantoroute25"
    title="Route 25"
  >
    <template #body>
      <img
        id="kantoRoute25ModalBox"
        usemap="#kantoRoute25Map"
      >

      <map
        name="kantoRoute25Map"
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
