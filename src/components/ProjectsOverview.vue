<template>
  <div class="display-box" id="projects-overview">
    <h2>Projects</h2>
    <div class="projects-boxes" id="lines"></div>
    <div class="projects-boxes" id="content">
      <b-row>
        <b-col>
          <font-awesome-icon icon="biohazard" size="10x"></font-awesome-icon>
          <p>There is a biohazard!</p>
        </b-col>
        <b-col>
          <font-awesome-icon icon="brain" size="10x"></font-awesome-icon>
          <p>There is a brain!</p>
        </b-col>
        <b-col>
          <font-awesome-icon icon="chart-pie" size="10x"></font-awesome-icon>
          <p>There is a chart pie!</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped>
#projects-overview {
  position: relative;
}
h2 {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.projects-boxes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#lines {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 70%;
  width: 76%;
}
#content {
  width: 75%;
}
#content p {
  margin-top: 16px;
  font-weight: bold;
}
</style>
