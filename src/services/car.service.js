import {axiosInstance} from "./axios.service";

import {urls} from "../configs";


const carService = {
    getAll: () => axiosInstance.get(urls.cars),
    create: (car) => axiosInstance.post(urls.cars, car),
    updateById: (id, data) => axiosInstance.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
}

export {carService}