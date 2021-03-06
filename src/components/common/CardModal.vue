<template>
  <div
    :id="modalName"
    class="modal"
  >
    <div :class="showClose ? 'modal-background' : 'modal-background-no-close'" />
    <div
      :id="dialogName"
      class="modal-card"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
        <button
          v-show="showClose"
          class="delete"
          aria-label="close"
        />
      </header>

      <section class="modal-card-body">
        <slot name="body" />
      </section>

      <footer class="modal-card-foot">
        <button
          v-show="showClose"
          class="button"
        >
          Close
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: { type: String, default: '', required: true },
        title: { type: String, default: '', required: true },
        showClose: { type: Boolean, default: true },
    },

    computed: {
        modalName() { return `${this.name}Modal`; },
        dialogName() { return `${this.name}Dialog`; },
    },
};
</script>
