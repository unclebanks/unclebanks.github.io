<template>
  <button
    class="button"
    :class="classes"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
    props: {
        classes: { type: String, default: '' },
        text: { type: String, default: '' },
    },
};
</script>
