<template>
  <div class="home">
    <Scroll-View>
      <WelcomeHeader key="WelcomeHeader"></WelcomeHeader>
      <ProjectsOverview key="ProjectsOverview"></ProjectsOverview>
      <AboutFooter key="AboutFooter"></AboutFooter>

      <Navigation v-bind:items="['WelcomeHeader', 'ProjectsOverview', 'AboutFooter']"></Navigation>
    </Scroll-View>
  </div>
</template>

<script>
import WelcomeHeader from '@/components/WelcomeHeader.vue'
import ProjectsOverview from '@/components/ProjectsOverview.vue'
import AboutFooter from '@/components/AboutFooter.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    WelcomeHeader,
    ProjectsOverview,
    AboutFooter,
    Navigation
  }
}
</script>
