<template>
  <CardModal
    name="statistics"
    title="Statistics"
  >
    <template #body>
      <div>
        <ul id="statisticsList" />
      </div>
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
