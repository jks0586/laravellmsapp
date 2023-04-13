import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
    },
    withCredentials: false,
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response,'yyy');
    const resdata={
        status:response.status,
        status_code:response.status,
        statusText:response.statusText,
        errors:response.data.errors,
        message:response.data.message,
        data:response.data.data,
    }
    return resdata;
  }, function (error) {

    // console.log(error.response);
    const resdata={
        status:error.response.data.status,
        status_code:error.response.status,
        statusText:error.response.statusText,
        errors:error.response.data.errors,
        message:error.response.data.message,
        data:[],

    }
    return resdata;
    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
  });



export default axios
