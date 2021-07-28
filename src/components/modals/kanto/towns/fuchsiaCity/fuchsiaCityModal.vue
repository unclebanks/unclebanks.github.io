<template>
  <CardModal
    name="fuchsiacity"
    title="Fuchsia City"
  >
    <template #body>
      <img
        id="fuchsiaCityModalBox"
        usemap="#fuchsiaCitymap"
      >

      <map
        name="fuchsiaCitymap"
      >
        <area
          shape="rect"
          coords="293,0,374,81"
          onclick="userInteractions.fuchsiaToSafariEntrance()"
        >
        <area
          shape="rect"
          coords="308,367,375,427"
          onclick="userInteractions.fuchsiaPokeCenter()"
        >
        <area
          shape="rect"
          coords="119,161,175,213"
          onclick="userInteractions.fuchsiaPokeMart()"
        >
        <area
          shape="rect"
          coords="80,372,173,442"
          onclick="userInteractions.fuchsiaGym()"
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
