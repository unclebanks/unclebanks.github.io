<template>
  <CardModal
    name="oaklabnooak"
    title="Oak's Lab"
  >
    <template #body>
      <img
        id="oaklabNoOakModalBox"
        usemap="#oakLabNoOakMap"
      >

      <map
        name="oakLabNoOakMap"
      >
        <area
          shape="rect"
          coords="354,310,381,348"
          onclick="userInteractions.oakAide1()"
        >
        <area
          shape="rect"
          coords="98,343,126,383"
          onclick="userInteractions.oakAide2()"
        >
        <area
          shape="rect"
          coords="160,117,191,158"
          onclick="userInteractions.blueOakLab()"
        >
        <area
          shape="rect"
          coords="182,391,233,426"
          onclick="userInteractions.oakLabExit()"
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
