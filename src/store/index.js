import { createStore, createLogger } from 'vuex'
import identity from './modules/identity'

const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  modules: {
    identity
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
