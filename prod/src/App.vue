<template>
  <enviroment :section="section"></enviroment>
  <router-view v-slot="{ Component }">
      <component :is="Component" @sectionChange="handleSectionChange" />
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
  methods: {
    handleSectionChange(section) {
      this.section = section;
    }
  }
}
</script>