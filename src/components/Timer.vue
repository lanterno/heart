<template>
  <section class="section">

  <div class="paper container">
    <h2>Choose project:</h2>
    <select v-model="selectedProject">
      <option v-for="project in projects" :key="project.name" :value="project.id">
        {{ project.name }}
      </option>
    </select>
    <div class="selector-box"></div>
    <div class="toggle">
      <button v-on:click="projectStart">start</button>
      <button v-on:click="projectStop">stop</button>
    </div>
    <span>{{statusMessage}}</span>
    <br>
    <span>{{statusMessageLine2}}</span>
    <div class="status"></div>
  </div>
  </section>
</template>

<script>
import axios from "axios";
let domain = 'http://localhost:7999'
export default {
  name: "Timer",
  data () {
    return {
      projects: [],
      selectedProject: null,
      statusMessage: "Welcome. Please choose an action",
      statusMessageLine2: ""
    }
  },
  mounted () {
    axios.get(`${domain}/projects`)
        .then(response => (this.projects = response.data))
  },
  methods: {
    projectStart () {
      let projectStartURL = `${domain}/projects/${this.selectedProject}/start`
      axios.post(projectStartURL, {})
          .then(response => {
            this.statusMessage = `Project Started on ${response.data.start}`;
            this.statusMessageLine2 = `timesheet ID: ${response.data.id}`;
            console.log("starting log succeeded!");
          })
          .catch(function () {
            this.statusMessage = "OOOpsi!!";
            console.log("Faced an exception!")
          })
    },
    projectStop () {
      let projectStopURL = `${domain}/projects/${this.selectedProject}/stop`
      axios.post(projectStopURL, {})
          .then(response => {
            this.statusMessage = `Project Stopped on ${response.data.end}`;
            this.statusMessageLine2 = `timesheet ID: ${response.data.id}`;
          })
    }
  }
}
</script>

<style scoped>

</style>