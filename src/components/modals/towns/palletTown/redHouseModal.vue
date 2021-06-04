<template>
  <CardModal
    name="redhouse"
    title="Red's House"
  >
    <template #body>
      <div
        id="redHouseModalBox"
      >
        <button
          onclick="userInteractions.redMom()"
          class="button"
        >
          Red's Mom
        </button><br>
        <button
          onclick="userInteractions.redTV()"
          class="button"
        >
          Red's TV
        </button><br>
        <button
          onclick="userInteractions.redRoom()"
          class="button"
        >
          Red's Room
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
