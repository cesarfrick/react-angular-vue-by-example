<template>
  <div id="app">
    <v-header></v-header>

    <router-view></router-view>

    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-footer': Footer,
  },
};
</script>
