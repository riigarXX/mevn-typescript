<template>
<div>
  <Navbar/>
  <div class="container p-5">
    <router-view/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar 
}
});
</script>
