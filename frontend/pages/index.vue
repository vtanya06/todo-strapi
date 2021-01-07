<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
       <v-row class="d-fex justify-center"> 
        <create-todo></create-todo>
       </v-row>
       <div class="text-center">
          <h3>Description , Status</h3><br>
       </div>
        <div v-for="todo in filteredList" v-bind:key="todo">
        <div>
            <p>{{ todo.description }} , {{ todo.done}}
          
            <v-btn icon color="red" @click="deletetodo(todo.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            </p>
        </div>
      </div>

    <div v-if="filteredList.length == 0">
       <p>Todo List Empty</p>
    </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import todosQuery from '~/apollo/queries/todo/todos'
import CreateTodo from '../components/createTodo.vue'

export default {
data() {
    return {
      // Initialize an empty todos variable
      todos: [],
      query: ''
    }
  },
  apollo: {
    todos: {
      prefetch: true,
      query: todosQuery
    }
  },
  
  computed: {
    // Search system
    filteredList() {
      return this.todos.filter(todo => {
        return todo.description.toLowerCase().includes(this.query.toLowerCase())
                console.log(todo.description)

      })
    },
  },
components: {
CreateTodo
}
}
</script>