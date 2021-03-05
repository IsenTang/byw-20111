import axios from 'axios';
import Common from './common.js';

const api = axios.create({
    baseURL: Common.baseUrl,
    timeout: 200000,
});


// 添加请求拦截器
api.interceptors.request.use( (config) => {
        // 在发送请求之前做些什么
        const id = localStorage.getItem("userid") || '';        
        if (id) {
            config.headers["user"] = id
        }
    
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
});
  
// // 请求拦截
// api.interceptors.request.use( config => {
//         console.log('config', config)
//         const id = JSON.parse(localStorage.getItem("userid")) || '';        
//         if (id) {
//             config.headers["user"] = id
//         }
    
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     },
// );


/**
 * @description 发起get请求
 * @param {*} url 服务地址
 * @param {*} data get时带的数据
 */
export const get = async (url, data) => {
    const response = await api.get(url, data).then(res => {
        return res.data
    }).catch(err => {
        errorHandler(err);
    })
    return response;
}


/**
 * @description 发起post请求
 * @param {*} url 服务地址
 * @param {*} data post的数据
 */
 export const post = async (url, data) => {
    const response = await api.post(url, data).then(res => {
        return res.data
    }).catch(err => {
        errorHandler(err);
    })
    return response;
}


/**
 * @description 发起put请求
 * @param {*} url 服务地址
 * @param {*} data put的数据
 */
export const put = async (url, data) => {
    const response = await api.put(url, data).then(res => {
        return res.data
    }).catch(err => {
        errorHandler(err);
    })
    return response;
}


/**
 * @description 发起delete请求
 * @param {*} url 服务地址
 * @param {*} data delete的数据
 */
export const del = async (url, data) => {
  // axios 0.20版本最新bug，2020.8
  // https://github.com/axios/axios/issues/3220
  // https://github.com/axios/axios/pull/3282
  const response = await api.request({ data, url, method: 'delete'});
  return response.data;
}

// 处理错误
const errorHandler = (error) => {
    console.log(error)
    console.log(error.response);
    let msg = error && error.response && error.response.data && error.response.data.message || '请求发生错误，请重试';
    alert(msg);
}
