const axios = require('axios');
const MY_TOKEN = "7911820745:AAHaQ-1TrIWkjLUaLC7zBIBgxc7fdVg0jWs";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            })
        },
        post(method, data) {
            return axious({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            })
        }
    }
}

module.exports = { axiousInstance: getAxiosInstance() }