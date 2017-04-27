<script>
import VhForm from './expenses/Form.vue'
import VhList from './expenses/List.vue'
import { getExpenses } from '../persistence'

export default {
  components: { VhForm, VhList },
  mounted () {
    const listExpenses = getExpenses()
    this.$store.commit('SET_EXPENSE', listExpenses)
  }
}
</script>

<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        Cash Expenses
      </q-toolbar-title>
    </div>

    <div class="container">
      <vh-form></vh-form>
      <vh-list></vh-list>
    </div>

  </q-layout>
</template>

<style lang="styl">
.container
  padding: 20px;
</style>
