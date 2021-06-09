<template>
  <CardModal
    name="kanto"
    title="Kanto"
  >
    <template #body>
        id="kantoMap"
        usemap="#kantomap"
      >

      <map
        id="kantoMapTEST"
        name="kantomap"
      >
        <area
          class="kantotestbox"
          shape="rect"
          coords="10,11,44,40"
          onclick="userInteractions.test()"
          stroke="black"
        >
      </map>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
