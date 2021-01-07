import gql from 'graphql-tag'

export const CREATE_MUTATION = gql`
mutation($description: String){
    createTodo(input: {
      data: {
        description: $description,
        done: false,
      }
    }){
      todo{
        id
        description
        done
      }
    }
  }
`
