<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">Заявки партнёров</div>
    <SearchBar />
  </q-page>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'PartnersPage',

  components: {
    SearchBar
  }
}
</script>
