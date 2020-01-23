<template>
  <div class="display-box" id="about">
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
          <b-nav-item @click="toggleActiveTab('Contact Info')" v-bind:active="activeTab === 'Contact Info'">
            Contact Info
          </b-nav-item>
        </b-nav>
      </template>

      <b-card-text v-show="activeTab === 'General'">
        Some info here on the general tab.
      </b-card-text>

      <b-card-text v-show="activeTab === 'Experience'">
        Some info here on this other experience tab.
      </b-card-text>

      <b-card-text v-show="activeTab === 'Education'">
        Look at all that education.
      </b-card-text>

      <b-card-text v-show="activeTab === 'Contact Info'">
        Let's put some social media buttons here.
      </b-card-text>
    </b-card>
    <img alt="A lake" src="../assets/lake.jpg" />
  </div>
</template>

<script>
export default {
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
#about {
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
