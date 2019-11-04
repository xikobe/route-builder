import React, { createContext, useContext, useState, useEffect } from 'react';
import { GmapContext } from './GMapContext';

const MarkersContext = createContext();

const createMarker = (latLng, map) => {
    const marker = new window.google.maps.Marker({
        position: latLng,
        map: map
    });

    return marker;
};

const MarkersProvider = ({ children }) => {
    const [markers, setMarkers] = useState([]);
    const [coords, setCoords] = useState([]);
    const { map } = useContext(GmapContext);

    useEffect(() => {
        map && map.addListener('click', ({ latLng }) => {
            setCoords((coords) => [...coords, latLng]);
            setMarkers((markers) => {
                return [
                    ...markers,
                    createMarker(latLng, map),
                ];
            });
        })
    }, [map]);


    if(map) {
        const line = new window.google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        line.setMap(map);
    }

    return (
        <MarkersContext.Provider value={ { markers } }>
            { children }
        </MarkersContext.Provider>
    );
}

export { MarkersContext, MarkersProvider };
