import React, {useEffect, useState} from 'react';

import {placeholderService} from "../../services";
import {Album} from "../album/Album";


const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        placeholderService.getAlbums().then(({data}) => {
            setAlbums([...data]);
        });
    }, [])


    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Albums};