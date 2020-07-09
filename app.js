const app = new Vue({
  el: '#app',
  data: {
    tasks: [],
    newTask: null
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch(e) {
        localStorage.removeItem('tasks')
      }
    }
  },
  methods: {
    addTask(event) {
      if (!this.newTask) return

      let task = {
        item: this.newTask,
        isDone: false
      }
      this.tasks.push(task)
      this.newTask = ''
      this.saveTasks()
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    saveTasks() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    }
  }
})

