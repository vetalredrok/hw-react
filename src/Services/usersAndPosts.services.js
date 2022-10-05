import {axiosService} from "./axios.service";
import {urls} from "../Configs";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getAllPosts: ()=>axiosService.get(urls.posts),
    getAllComments: ()=>axiosService.get(urls.comments)
}

export {userService};