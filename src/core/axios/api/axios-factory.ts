// import Modal from 'ant-design-vue/lib/modal/Modal';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const useAxios = (endPoint?: string, timeout = 30000) => {
    const instance = axios.create({
        baseURL: endPoint ?? import.meta.env.VITE_API_ENDPOINT,
        timeout,
    });
    instance.interceptors.request.use(requestInterceptors);
    instance.interceptors.response.use(responseInterceptors);
    return { instance };
};

/**
 * request拦截器
 *
 *
 * @param {InternalAxiosRequestConfig<any>} request
 * @return {*}
 */
const requestInterceptors = (request: InternalAxiosRequestConfig<any>) => {
    return request;
};

const responseInterceptors = (error: any) => {
    const errorCode = error?.response?.status;
    switch (errorCode) {
        case 400:
            break;
        case 500:
        default:
            break;
    }
    // const modal = Modal.info();
    return error;
};
