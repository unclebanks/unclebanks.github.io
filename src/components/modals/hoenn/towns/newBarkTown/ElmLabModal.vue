<template>
  <CardModal
    name="elmlab"
    title="Elm's Lab"
  >
    <template #body>
      <img
        id="elmlabModalBox"
        usemap="#elmLabMap"
      >

      <map
        name="elmLabMap"
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
