import axios from "axios";
import { getToken } from "./token"

export default {
    setupAxios() {
        axios.defaults.withCredentials = false;
        axios.defaults.baseURL = "http://localhost:4000/";
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.interceptors.request.use(function (config) {
            const token = getToken();
            if (token != null)
                config.headers.Authorization = token;

            return config;
        });
    }
}
