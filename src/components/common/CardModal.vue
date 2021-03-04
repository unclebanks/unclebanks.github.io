<template>
  <div
    :id="modalName"
    class="modal"
  >
    <div class="modal-background" />
    <div
      :id="dialogName"
      class="modal-card"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
        <button
          class="delete"
          aria-label="close"
        />
      </header>

      <section class="modal-card-body">
        <slot name="body" />
      </section>

      <footer class="modal-card-foot">
        <button class="button">
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
    },

    computed: {
        modalName() { return `${this.name}Modal`; },
        dialogName() { return `${this.name}Dialog`; },
    },
};
</script>
