import { useState, useEffect } from 'react';
import { createMap } from '../utils/mapUtils';
import useScript from '../hooks/useScript';

const useMap = (isloaded) => {
    const [map, setMap] = useState(null);
    const [loaded] = useScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`
    );

    useEffect(() => {
        if(!map && loaded) {
            const gmap = createMap();

            setMap(gmap);
        }
    }, [map, loaded]);

    return { map };
}

export default useMap;
