<template>
    <v-app :theme="theme">
    <v-app-bar dense>
      <v-app-bar-title>Vue Capacitor - POC</v-app-bar-title>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="switchTheme"
      >Toggle Theme</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <PwaPoc />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PwaPoc from './components/PwaPoc'

export default {
  name: 'App',
  components: {
    PwaPoc
  },
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    switchTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
