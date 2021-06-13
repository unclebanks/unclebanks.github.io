<template>
  <CardModal
    name="seasidebillhouseafterconvert"
    title="Bill's Cottage"
  >
    <template #body>
      <img
        id="seasideBillHouseAfterConvertModalBox"
        usemap="#billCottageAfterMap"
      >

      <map
        name="billCottageAfterMap"
      >
        <area
          shape="rect"
          coords="223,148,258,193"
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
