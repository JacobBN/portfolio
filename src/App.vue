<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  scrollbar-width: thin; /* https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width */
}
::-webkit-scrollbar { /* https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar */
  width: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.display-box {
  display: inline-block;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
}
</style>
