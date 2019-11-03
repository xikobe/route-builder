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
    const { map } = useContext(GmapContext);

    useEffect(() => {
        map && map.addListener('click', (e) => {
            setMarkers((markers) => {
                return [
                    ...markers,
                    createMarker(e.latLng, map),
                ];
            });
        })
    }, [map]);

    return (
        <MarkersContext.Provider value={ { markers } }>
            { children }
        </MarkersContext.Provider>
    );
}

export { MarkersContext, MarkersProvider };
