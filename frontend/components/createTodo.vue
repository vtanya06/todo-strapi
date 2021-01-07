<template>
  <div>
    <div class="flex flex-column mt3"><br>
      <v-row class="justify-center"> 
        <v-col cols="6">
          <v-text-field label="New Todo" outlined v-model="description" @keyup.enter="createtodo()"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn large-color="primary" @click="createtodo()">Add</v-btn>
        </v-col>
       </v-row>
    </div>
  </div>
</template>

<script>
import { CREATE_MUTATION } from '~/apollo/queries/todo/graphql'
import todosQuery from '~/apollo/queries/todo/todos'

  export default {
    name: 'CreateTodo',
    data () {
      return {
        description: '',
      }
    },
    methods: {
      createtodo() {
        const {description} = this.$data
        this.$apollo.mutate({
        mutation: CREATE_MUTATION,
        variables: {
         description
    },
    refetchQueries: [
        { query: todosQuery }
      ]
  })
  
      }
  }}
</script>