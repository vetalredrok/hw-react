import axios from "axios";

import {baseURL} from "../configs";


const axiosService = axios.create({baseURL: baseURL});

export {axiosService};