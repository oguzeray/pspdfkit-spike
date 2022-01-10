import { Api } from 'src/__generated__/Api'

const pspdfkitApi = new Api({
  baseURL: 'http://localhost:5000/',
  headers: {
    Authorization: `Token token=secret`,
  },
})
export default pspdfkitApi.api
