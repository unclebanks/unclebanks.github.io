<template>
  <SettingsModal :ui="ui" />
  <StoryModal :ui="ui" />
</template>

<script>
import SettingsModal from './modals/SettingsModal.vue';
import StoryModal from './modals/StoryModal.vue';

export default {
    components: {
        SettingsModal,
        StoryModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
