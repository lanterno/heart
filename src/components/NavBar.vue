<template>
  <div>
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3><a href="#">Welcome to LifePete</a></h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1">
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
            <li>
              <label style="display: inline; padding-top: 0.60rem" for="modal-password">super powers?</label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <!--the following input field is used for the enter-password button-->
  <input class="modal-state" id="modal-password" type="checkbox">
  <div class="modal">
    <label class="modal-bg" for="modal-password"></label>
    <div class="modal-body">
      <label class="btn-close" for="modal-password">X</label>
      <h4 class="modal-title">Password?</h4>
      <h5 class="modal-subtitle">Hey there!</h5>
      <p class="modal-text">You can take a look around, but you can only control the timer
        after you give me the password :)</p>
      <div class="form-group">
        <label for="password">Here👇:</label>
        <input v-model="authSecret" type="password" placeholder="secret" id="password">

      </div>
      <button :disabled="passwordFormLoading" v-on:click="checkAndSavePassword" name="key1">
        <div v-if="passwordFormLoading" class="lds-heart"><div></div></div>
        <span v-else>Submit</span>
      </button>
      <span>{{ passwordFormResponseMessage }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const domain = 'http://localhost:7999'

export default {
  name: 'NavBar',
  data () {
    return {
      authSecret: null,
      passwordFormLoading: false,
      passwordFormResponseMessage: ''
    }
  },
  methods: {
    checkAndSavePassword () {
      this.passwordFormLoading = true
      axios.post(
          `${domain}/talk/ding`,
          {},
          { headers: { 'X-API-Token': this.authSecret } }
      )
        .then(() => {
          this.passwordFormResponseMessage = 'Password is good, you can now close the window'
          this.$store.dispatch('identity/authenticate', this.authSecret)
        })
        .catch(() => {
          this.passwordFormResponseMessage = 'Wrong password!'
        })
        .then(() => {
          this.passwordFormLoading = false
        })
    }
  }
}
</script>

<style scoped>

</style>
