<script>
import moment from 'moment'
import { Utils } from 'quasar'

export default {
  template: 'vh-form',
  data () {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('DD/MM/YYYY'),
        done: false
      }
    }
  },
  methods: {
    submit () {
      const itemForm = JSON.parse(JSON.stringify(this.expense))

      itemForm.id = Utils.uid()

      this.$store.commit('ADD_EXPENSE', itemForm)
      this.reset()
    },
    reset () {
      this.expense.amount = ''
      this.expense.description = ''
      this.expense.date = moment().format('DD/MM/YYYY')
      this.$refs.amount.focus()
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit">
      <input ref="amount" class="vh-input" type="number" v-model="expense.amount" placeholder="R$" required>
      <input class="vh-input" type="text" v-model="expense.description" placeholder="Description">
      <input class="vh-input" type="text" v-model="expense.date" placeholder="Date">
      <button class="primary vh-button">Save</button>
  </form>
</template>

<style lang="styl">
.vh-input
  width: 100%;
  padding: 10px;
.vh-button
  width: 100%;
  margin-top: 10px;
</style>
