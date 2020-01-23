<template>
  <div class="home">
    <Welcome></Welcome>
    <ProjectsOverview></ProjectsOverview>
    <About></About>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import ProjectsOverview from '@/components/ProjectsOverview.vue'
import About from '@/components/About.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    ProjectsOverview,
    About
  }
}
</script>
