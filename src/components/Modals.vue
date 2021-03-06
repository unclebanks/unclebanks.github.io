<template>
  <SettingsModal :ui="ui" />
</template>

<script>
import SettingsModal from './modals/SettingsModal.vue';

export default {
    components: {
        SettingsModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
