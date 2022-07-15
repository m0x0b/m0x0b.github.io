<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <enviroment :section="section"></enviroment>
  <router-view v-slot="{ Component }">
    <component :is="Component" @changeTab="handleChangeTab" />
  </router-view>
</template>

<script>
import Enviroment from './components/Enviroment.vue'

import { RouterView } from 'vue-router'

export default {
  name: "m0x0b",
  data() {
    return {
      section: 0
    }
  },
  components: {
    Enviroment
  },
}
</script>