import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return 'Hello world and get mockData'
    }
  }
] as MockMethod[]