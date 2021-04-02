import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 90000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
if (process.env.NODE_ENV == 'production') { // 线上 正式发布环境
    // 线上测试环境
    if (process.env.type === 'test') {

        // axios.defaults.baseURL = '//api.iktapp.com/testiktw/';//配置接口地址

    // 线上正式环境
    } else {

        // axios.defaults.baseURL = '//m.iktapp.com/iktw/';//配置接口地址

    }
// 开发测试环境
} else if (process.env.NODE_ENV == 'development') {

  axios.defaults.baseURL = '//m.iktapp.com/iktwt/';//线上
  // axios.defaults.baseURL = 'http://192.168.2.195:8095';//本地

}

axios.defaults.withCredentials = true
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    if (config.data && config.data.isForm) {
      config.data = qs.stringify(config.data);
      // config.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
      config.headers['Content-type'] = 'application/json';
    } else if (config.data && config.data.isJson) {
      config.headers['Content-type'] = 'application/json';
    } else if (config.data && config.data.isPicture) {
      config.headers['Content-type'] = 'multipart/form-data';
    } else if (config.data) {
      config.data = qs.stringify(config.data);
      config.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }
  }

  if (config.url.indexOf("/Media/uploadImage") > -1) {
    config.headers = {
      // 'Content-Type':'multipart/form-data'
    }
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {

  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (response) {
          resolve(response.data);
        }
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//返回一个Promise(发送get请求)
export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//返回一个Promise(发送put请求)
export function put(url, param) {
  return new Promise((resolve, reject) => {
    axios.put(url, param)
      .then(response => {
        // switch(response.data.code){
        //   case 401:
        // }
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//返回一个Promise(发送delete请求)
export function Delete(url, param) {
  return new Promise((resolve, reject) => {
    axios.delete(url, param)
      .then(response => {
        // switch(response.data.code){
        //   case 401:
        // }
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  post,
  get,
  put,
  Delete
}
