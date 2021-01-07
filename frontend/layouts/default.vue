<template>
  <v-app dark>  
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-spacer/>
      <v-toolbar-title v-text="title" class="text-center" />
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Todo List'
    }
  }
}
</script>
