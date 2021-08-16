<template>
  <CardModal
    name="ceruleancity"
    title="Cerulean City"
  >
    <template #body>
      <img
        id="ceruleanCityModalBox"
        usemap="#ceruleanCitymap"
      >

      <map
        name="ceruleanCitymap"
      >
        <area
          shape="rect"
          coords="286,0,339,67"
          onclick="userInteractions.ceruleanCityToNuggetBridge()"
        >
        <area
          shape="rect"
          coords="267,206,334,271"
          onclick="userInteractions.ceruleanPokeCenter()"
        >
        <area
          shape="rect"
          coords="360,333,414,387"
          onclick="userInteractions.ceruleanPokeMart()"
        >
        <area
          shape="rect"
          coords="373,227,466,292"
          onclick="userInteractions.ceruleanGym()"
        >
        <area
          shape="rect"
          coords="373,113,470,162"
          onclick="userInteractions.checkStory()"
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
