<template>
  <div class="display-box" id="welcome">
    <h1>Welcome to my Development Site!</h1>
    <img alt="A lake" src="../assets/lake.jpg" />
  </div>
</template>

<style scoped>
#welcome {
  position: relative;
}
h1 {
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 66%;
  transform: translateX(-50%);

  color: white;
}
img {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path */
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 86%);
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 86%);
}
</style>
