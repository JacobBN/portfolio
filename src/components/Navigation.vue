<template>
  <div id="navigation">
    <font-awesome-icon v-if="WelcomeHeader"
                       v-b-popover.hover.right="'Back to Top'"
                       @click="updatePosition('WelcomeHeader')"
                       class="fa-icon"
                       icon="arrow-circle-up"
                       size="2x"></font-awesome-icon>

    <font-awesome-icon v-if="ProjectsOverview"
                       v-b-popover.hover.right="'Projects Overview'"
                       @click="updatePosition('ProjectsOverview')"
                       class="fa-icon"
                       icon="briefcase"
                       size="2x"></font-awesome-icon>

    <font-awesome-icon v-if="AboutFooter"
                       v-b-popover.hover.right="'About Me Section'"
                       @click="updatePosition('AboutFooter')"
                       class="fa-icon"
                       icon="address-card"
                       size="2x"></font-awesome-icon>
  </div>
</template>

<script>
import { $scrollview } from 'vue-scrollview'

export default {
  name: 'navigation',
  props: {
    items: Array
  },
  data: function () {
    return {
      WelcomeHeader: false,
      ProjectsOverview: false,
      AboutFooter: false
    }
  },
  created: function () {
    this.items.forEach((item) => {
      switch (item) {
        case 'WelcomeHeader':
          this.WelcomeHeader = true
          break
        case 'ProjectsOverview':
          this.ProjectsOverview = true
          break
        case 'AboutFooter':
          this.AboutFooter = true
          break
      }
    })
  },
  methods: {
    updatePosition (item) {
      $scrollview.scrollToComponent(item, 0)
    }
  }
}
</script>

<style>
#navigation {
  z-index: 100;
  position: fixed;
  right: -3px;
  top: 50%;
  transform: translateY(-50%);

  width: 63px;
  min-height: 60px;
  border-radius: 3px;
  border: 1px solid darkgray;
  background: white;

  padding-top: 6px;
  padding-bottom: 6px;
}
</style>

<style scoped>
#navigation svg {
  margin-top: 4px;
  margin-bottom: 4px;
}
.fa-icon:hover {
  color: #476480;
}
</style>
