import storage from 'localforage'

export function addExpense (expense) {
  storage.setItem(expense.id, expense)
}

export function rmExpense (expense) {
  storage.removeItem(expense.id, expense)
}

export function setDone (expense) {
  const item = storage.getItem(expense.id, expense)
  item.done = expense.done

  storage.setItem(expense.id, expense)
}

export function getExpenses () {
  let list = []

  storage.keys().then(keys => {
    keys.forEach(key => {
      storage.getItem(key).then(value => list.push(value))
    })
  })

  return list
}
