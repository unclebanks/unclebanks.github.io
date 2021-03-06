<template>
  <SettingsModal :ui="ui" />
  <StatisticsModal />
  <TownModal />
  <StoryModal :ui="ui" />
</template>

<script>
import SettingsModal from './modals/SettingsModal.vue';
import StatisticsModal from './modals/StatisticsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import TownModal from './modals/TownModal.vue';

export default {
    components: {
        SettingsModal,
        StatisticsModal,
        TownModal,
        StoryModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
