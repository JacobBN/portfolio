<template>
  <div class="display-box" id="about-footer">
    <h2>About</h2>
    <b-card id="about-card" v-bind:title="activeTab" body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header pills align="center">
          <b-nav-item @click="toggleActiveTab('General')" v-bind:active="activeTab === 'General'">
            General
          </b-nav-item>
          <b-nav-item @click="toggleActiveTab('Experience')" v-bind:active="activeTab === 'Experience'">
            Experience
          </b-nav-item>
          <b-nav-item @click="toggleActiveTab('Education')" v-bind:active="activeTab === 'Education'">
            Education
          </b-nav-item>
        </b-nav>
      </template>

      <b-card-text v-show="activeTab === 'General'">
        Some info here on the general tab.

        <ContactInfo></ContactInfo>
      </b-card-text>

      <b-card-text v-show="activeTab === 'Experience'">
        Some info here on this other experience tab.

        <ContactInfo></ContactInfo>
      </b-card-text>

      <b-card-text v-show="activeTab === 'Education'">
        Look at all that education.

        <ContactInfo></ContactInfo>
      </b-card-text>
    </b-card>
    <img alt="Jacob at Arches National Park" src="../assets/JBN-Arches.jpg" draggable="false"/>
  </div>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'about-footer',
  components: {
    ContactInfo
  },
  data: function () {
    return {
      activeTab: 'General'
    }
  },
  methods: {
    toggleActiveTab (newActiveTab) {
      this.activeTab = newActiveTab
    }
  }
}
</script>

<style scoped>
#about-footer {
  position: relative;
  padding-top: 24px;
}
#about-card {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  border: 1px solid darkgray;
}
img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100%;

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path */
  -webkit-clip-path: polygon(0 86%, 100% 92%, 100% 100%, 0 100%);
  clip-path: polygon(0 86%, 100% 92%, 100% 100%, 0 100%);
}
</style>
