import axios from 'axios'

const GITHUB_SEARCH = ' https://api.github.com/search'

export default class API {
  static get() {
    return axios.get(GITHUB_SEARCH + '/users?q=type:user+location:thailand+repos:%3E30')
  }
}
