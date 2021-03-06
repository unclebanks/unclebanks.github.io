<template>
  <CardModal
    name="story"
    :show-close="showClose"
  >
    <template #body>
      <div>
        <div id="storyContent" />
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

    props: {
        ui: { type: Object, required: true },
    },

    data: function () {
        return {
            showClose: false,
        };
    },
};
</script>
