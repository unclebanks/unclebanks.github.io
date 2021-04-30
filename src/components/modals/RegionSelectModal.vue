<template>
  <CardModal
    name="regionselect"
    title="Region Select"
  >
    <template #body>
      <div id="regionBox">
        <div
          id="regionSelect"
        />
        <span>REGION SELECT</span><br>
        <button
          id="kantoButton"
          class="button"
          value="Kanto"
          @click="ui.goToKanto()"
        >
          KANTO
        </button>
        <button
          id="johtoButton"
          class="button"
          @click="ui.goToJohto()"
        >
          JOHTO
        </button>
        <button
          id="hoennButton"
          class="button"
          @click="ui.goToHoenn()"
        >
          HOENN
        </button><br>
        <button
          id="sinnohButton"
          class="button"
          value="Sinnoh"
          @click="ui.goToSinnoh()"
        >
          SINNOH
        </button>
        <button
          id="unovaButton"
          class="button"
          value="Unova"
          @click="ui.goToUnova()"
        >
          UNOVA
        </button>
        <button
          id="kalosButton"
          class="button"
          value="Kalos"
          @click="ui.goToKalos()"
        >
          KALOS
        </button><br>
        <button
          id="alolaButton"
          class="button"
          value="Alola"
          @click="ui.goToAlola()"
        >
          ALOLA
        </button>
        <button
          id="galarButton"
          class="button"
          value="Galar"
          @click="ui.goToNone()"
        >
          GALAR
        </button><br>
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
};
</script>
