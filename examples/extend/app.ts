import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'I am overload axios'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get')
axios.options('/extend/options')
axios.delete('/extend/delete')
axios.head('/extend/head')
axios.post('/extend/post', { msg: 'post'} )
axios.put('/extend/put', { msg: 'put'} )
axios.patch('/extend/patch', { msg: 'post'} )


export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type {number}
   */
  code: number
  /**
   * 数据
   * @type { T }
   */
  result: T
  /**
   * 消息
   * @type { string }
   */
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()
