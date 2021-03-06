<template>
  <SettingsModal :ui="ui" />
  <TownModal />
  <StoryModal :ui="ui" />
</template>

<script>
import SettingsModal from './modals/SettingsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import TownModal from './modals/TownModal.vue';

export default {
    components: {
        SettingsModal,
        TownModal,
        StoryModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
