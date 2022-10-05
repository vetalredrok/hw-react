import axios from "axios";
import {baseURL} from "../Configs";


const axiosService = axios.create({baseURL});

export {axiosService};