<template>
  <q-input
    v-model="search"
    outlined
    dense
    placeholder="Поиск по имени или городу"
    clearable
    @clear="onClear"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'SearchBar',

  data() {
    return {
      search: ''
    }
  },

  created() {
    this.debouncedSearch = debounce(this.emitSearch, 400)
  },

  beforeDestroy() {
    this.debouncedSearch.cancel()
  },

  methods: {
    onInput() {
      this.debouncedSearch()
    },

    emitSearch() {
      this.$store.dispatch('partners/setSearchQuery', this.search)
    },

    onClear() {
      this.search = ''
      this.emitSearch()
    }
  },

  watch: {
    searchQuery(val) {
      this.search = val
    }
  },

  computed: {
    searchQuery() {
      return this.$store.getters['partners/searchQuery']
    }
  }
}
</script>