<template>
  <CardModal
    name="ceruleancity"
    title="Cerulean City"
  >
    <template #body>
      <div
        id="ceruleanCityModalBox"
      >
        <area
        shape= "rect"
        coords= "259,9,306,58"
          oneclick="userInteractions.nuggetBridgeEvent()"
         
        >

        <area 
        shape= "rect"
        coords= "337,97,417,144"
          onclick="userInteractions.checkStory()"
         > 
        
        <area
          shape= "rect"
          coords= "241,88,303,140"
          onclick="userInteractions.ceruleanPokeCenter()"
          
        >
        
        <area 
        shape= "rect"
        coords="321,304,374,348"
          onclick="userInteractions.ceruleanPokeMart()"
          
        >
      
        >
        <area
        shape= "rect"
        coords= "335,203,421,262"
        onclick= "userInteractions.CeruleanGym">
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