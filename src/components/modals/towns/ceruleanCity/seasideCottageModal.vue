<template>
  <CardModal
    name="seasidecottage"
    title="Seaside Cottage"
  >
    <template #body>
      <div
        id="seasideCottageModalBox"
      >
        <button
          onclick="userInteractions.billsHouse()"
          class="button"
        >
          Bill's Cottage
        </button><br>
        <button
          onclick="userInteractions.billsBackyard()"
          class="button"
        >
          Bill's Backyard
        </button><br>
      </div>
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
