<template>
  <CardModal
    name="goldhouse"
    title="Gold's House"
  >
    <template #body>
      <img
        id="goldHouseModalBox"
        usemap="#goldHouseMap"
      >

      <map
        name="goldHouseMap"
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
