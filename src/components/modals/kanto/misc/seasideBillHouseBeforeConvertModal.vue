<template>
  <CardModal
    name="seasidebillhousebeforeconvert"
    title="Bill's Cottage"
  >
    <template #body>
      <img
        id="seasideBillHouseBeforeConvertModalBox"
        usemap="#billCottageBeforeMap"
      >

      <map
        name="billCottageBeforeMap"
      >
        <area
          shape="rect"
          coords="321,198,352,227"
          onclick="userInteractions.billEvent()"
        >
        <area
          shape="rect"
          coords="127,157,196,211"
          onclick="userInteractions.billsComputerKanto()"
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
