<template>
  <CardModal
    name="oaklab"
    title="Oak's Lab"
  >
    <template #body>
      <img
        id="oaklabModalBox"
        usemap="#oakLabMap"
      >

      <map
        name="oakLabMap"
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
          coords="193,85,224,127"
          onclick="userInteractions.oakLabOak()"
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
