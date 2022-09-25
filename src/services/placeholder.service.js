import {axiosService} from "./axios.service";

import {urls} from "../configs";


const placeholderService ={
    getTodos: ()=> axiosService.get(urls.todos),
    getAlbums: ()=> axiosService.get(urls.albums),
    getComments: ()=> axiosService.get(urls.comments),
    getPost: (id)=> axiosService.get(urls.posts +'/'+id)
};

export {placeholderService};