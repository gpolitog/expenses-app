<script>
import { Dialog, Toast } from 'quasar'
import { setDone } from '../../persistence'

export default {
  template: 'vh-list',
  computed: {
    list () {
      return this.$store.state.Expenses.list
    }
  },
  methods: {
    askRemove (expense) {
      const self = this

      Dialog.create({
        title: 'Confirm remove',
        buttons: [{
          label: 'Disagree'
        },
        {
          label: 'Agree',
          handler () {
            self.remove(expense)
          }
        }]
      })
    },
    remove (expense) {
      this.$store.commit('REMOVE_EXPENSE', expense)
      Toast.create.negative({
        html: 'Removed item!',
        timeout: 250
      })
    },
    toggle (expense) {
      expense.done = !expense.done
      setDone(expense)

      if (expense.done) {
        Toast.create.positive({
          html: 'Paid item!',
          timeout: 250
        })
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="expense-box" v-for="expense in list">
      <div @click="toggle(expense)">
        <p :class="{ done: expense.done }">R$ {{ expense.amount }} - {{ expense.date }}</p>
        <p :class="{ done: expense.done }">{{ expense.description }}</p>
      </div>
      <i @click.prevent="askRemove(expense)" class="material-icons delete-icon">delete_forever</i>
      <hr v-show="list.length > 0">
    </div>
  </div>
</template>

<style lang="styl">
.expense-box
  margin-top: 10px;
  position: relative;
  cursor: pointer;

.delete-icon
  color: #c00;
  position: absolute;
  bottom: 10px;
  margin-bottom: 15px;
  right: 0;
  font-size: 2.5em;

.done
  font-style: italic;
  color: #ccc;
</style>
