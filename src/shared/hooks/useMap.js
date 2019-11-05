import { useState, useEffect } from 'react';

const useMap = (isloaded) => {
    const [map, setMap] = useState(null);
    const [waypoints, setWaypoints] = useState([]);

    useEffect(() => {
        if(!map && isloaded) {
            const gmap = new window.google.maps.Map(document.getElementById("map"), {
              zoom: 12,
              center: { lat: 37.77493, lng: -122.41942 }
            });

            gmap.addListener('click', ({ latLng }) => {
                setWaypoints((waypoints) => [...waypoints, latLng]);
            })

            setMap(gmap);
        }
    }, [map, isloaded]);

    return [waypoints, map];
}

export default useMap;
