import axios from 'axios'

export default class API {
  get() {
    return facade.get('/posts')
  }
}
