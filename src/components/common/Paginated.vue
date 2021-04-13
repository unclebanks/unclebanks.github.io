<template>
  <div class="buttons are-small has-addons is-centered mb-0">
    <button
      class="button"
      :disabled="page === 1"
      @click="page = 1"
    >
      &lt;&lt;
    </button>
    <button
      class="button"
      :disabled="page === 1"
      @click="page--"
    >
      &lt;
    </button>
    <span class="m-2">{{ page }} / {{ totalPages }}</span>
    <button
      class="button"
      :disabled="page === totalPages"
      @click="page++"
    >
      &gt;
    </button>
    <button
      class="button"
      :disabled="page === totalPages"
      @click="page = totalPages"
    >
      &gt;&gt;
    </button>
  </div>
  <p>
    Showing
    {{ offset + 1 }}
    -
    {{ offset + pagedItems.length }}
    of
    {{ list.length }}
    <span v-if="isFiltered">(filtered)</span>
  </p>
  <ul
    :id="listId"
    :class="listClass"
  >
    <slot name="listWrapper">
      <template
        v-for="({ item, realIndex }, index) in pagedItems"
        :key="getKey(item)"
      >
        <slot
          name="item"
          :item="item"
          :index="index"
          :offset="offset"
          :realIndex="realIndex"
        />
      </template>
    </slot>
  </ul>
</template>

<script>
const getOffset = (pageSize, page) => (page - 1) * pageSize;

const getPage = (list, pageSize, page) => {
    const offset = getOffset(pageSize, page);
    return list.slice(offset, offset + pageSize);
};

export default {
    props: {
        list: { type: Array, required: true },
        getKey: { type: Function, required: true },
        pageSize: { type: Number, default: 10 },
        listId: { type: String, default: '' },
        listClass: { type: String, default: '' },
        filter: { type: Function, default: null },
    },

    data: function () {
        return {
            page: 1,
        };
    },

    computed: {
        offset() {
            return getOffset(this.pageSize, this.page);
        },

        indexedList() {
            return this.list.map((item, index) => ({ item, realIndex: index }));
        },

        filteredList() {
            return this.filter
                ? this.indexedList.filter(({ item }) => this.filter(item))
                : this.indexedList;
        },

        pagedItems() {
            return getPage(this.filteredList, this.pageSize, this.page);
        },

        totalPages() {
            return Math.max(1, Math.ceil(this.filteredList.length / this.pageSize));
        },

        isFiltered() {
            return this.filteredList.length < this.list.length;
        },
    },

    watch: {
        totalPages(newMax) {
            if (this.page > newMax) {
                this.page = newMax;
            }
        },
    },
};
</script>
