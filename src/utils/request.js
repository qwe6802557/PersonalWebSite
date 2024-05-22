import axios from 'axios';

// 创建一个 Axios 实例
const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 10000, // 设置请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 比如在请求头中添加token
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        if(config.method == 'get'){
            config.params  =  config.params || {}
            config.params.t = new Date().getTime()
        }

        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data
        if(res instanceof Blob) {
            return response;
        }
        if (res.code === 'success') {
            return response.data
        } else if(res.code === 1000){
            return response.data.data
        } else if(res.code === 200){
            return response.data.data
        } else {
            return Promise.reject(response.data)
        }

        return response.data;
    },
    error => {
        let data = {}
        if(error.response.status == 401){
            location.href = '#/login?'+Math.random()
            return Promise.resolve(data)
        }else if(error.response.status == 403){
            return Promise.reject(error)
        }else if(error.response.status == 400 || error.response.status == 500){
            return Promise.reject(error.response.data)
        }else if(error.response.status == 504){
            //localStorage.setItem('LOGOUTSTATUS', 'loginOut')
            return Promise.resolve(data)
        }else{
            return Promise.reject(error)
        }
    }
);

export default request;
