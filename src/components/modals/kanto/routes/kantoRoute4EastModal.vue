<template>
  <CardModal
    name="kantoroute4east"
    title="Route 4"
  >
    <template #body>
      <img
        id="kantoRoute4EastModalBox"
        usemap="#kantoRoute4EastMap"
      >

      <map
        name="kantoRoute4EastMap"
      >
        <area
          shape="rect"
          coords="0,95,50,320"
          onclick="userInteractions.route4EastToRoute4West()"
        >
        <area
          shape="rect"
          coords="424,162,597,320"
          onclick="userInteractions.route4EastToCeruleanCity()"
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
