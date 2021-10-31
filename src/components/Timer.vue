<template>
  <section class="section">

  <div class="paper container">
    <div class="form-group">
      <h2>Choose project:</h2>
      <select :disabled="ProjectSelectorDisabled" v-model="selectedProject">
        <option v-for="project in projects" :key="project.name" :value="project.id">
          {{ project.name }}
        </option>
      </select>
      <div class="selector-box"></div>
      <label for="timer-toggle" class="paper-switch-tile">
        <input @input="toggleTimer" id="timer-toggle" name="timer-toggle" type="checkbox" v-model="isBeating"/>
        <div class="paper-switch-tile-card border">
          <div class="paper-switch-tile-card-front border background-warning">Off</div>
          <div class="paper-switch-tile-card-back border background-secondary">On</div>
        </div>
      </label>
      <br>
      <span>{{ statusMessage }}</span>
      <br>
      <span>{{ statusMessageLine2 }}</span>
      <div class="status"></div>
    </div>
  </div>
  </section>

</template>

<script>
import axios from 'axios'
const domain = 'https://api.lifepete.com'
// const domain = 'http://localhost:7999'
export default {
  name: 'Timer',
  data () {
    return {
      projects: [],
      selectedProject: null,
      isBeating: null,
      statusMessage: 'Welcome. Please choose an action',
      statusMessageLine2: ''
    }
  },
  mounted () {
    axios.get(`${domain}/projects`)
      .then(response => (this.projects = response.data))
    axios.get(`${domain}/heart/sounds`)
      .then(response => {
        if (response.data.isBeating) {
          this.isBeating = true
          this.selectedProject = response.data.project
        } else {
          this.selectedProject = response.data.lastBeatOn
          this.isBeating = false
        }
      })
  },
  computed: {
    ProjectSelectorDisabled () {
      return this.isBeating
    },
    isAuthenticated () {
      return this.$store.state.identity.isAuthenticated
    },
    password () {
      return this.$store.state.identity.APIKey
    }
  },
  methods: {
    projectStart () {
      const projectStartURL = `${domain}/projects/${this.selectedProject}/start`
      axios.post(projectStartURL, {}, {
        headers: {
          'X-API-Token': this.password
        }
      })
        .then(response => {
          this.statusMessage = `Project Started on ${response.data.start}`
          this.statusMessageLine2 = `timesheet ID: ${response.data.id}`
          console.log('starting log succeeded!')
        })
        .catch(() => {
          this.statusMessage = 'OOOpsi!!'
          console.log('Faced an exception!')
        })
    },
    projectStop () {
      const projectStopURL = `${domain}/projects/${this.selectedProject}/stop`
      axios.post(projectStopURL, {}, {
        headers: {
          'X-API-Token': this.password
        }
      })
        .then(response => {
          this.statusMessage = `Project Stopped on ${response.data.end}`
          this.statusMessageLine2 = `timesheet ID: ${response.data.id}`
        })
    },
    toggleTimer () {
      // the value here is the old value
      if (this.isBeating) {
        console.log('Stopping work')
        this.projectStop()
      } else {
        console.log('Starting work')
        this.projectStart()
      }
    }
  }
}
</script>

<style scoped>

</style>
