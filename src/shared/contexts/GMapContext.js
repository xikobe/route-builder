import React, { useEffect, createContext, useState, useContext } from 'react';
import useMap from '../hooks/useMap';
import { clearWaypoint, createMarker } from '../utils/mapUtils';

const GMapContext = createContext();

export const useGMapContext = () => useContext(GMapContext);

const GMapProvider = ({ children }) => {
    const {map} = useMap();
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        map && map.addListener('click', ({ latLng }) => {
            setMarkers((markers) => [...markers, createMarker(latLng)]);
        });
    }, [map]);

    function removeWaypoint (waypointToRemove) {
        setMarkers((markers) => markers.filter((marker) => marker !== waypointToRemove));
        clearWaypoint(waypointToRemove);
    }

    return (
        <GMapContext.Provider value={ { map, markers, removeWaypoint } }>
            { children }
        </GMapContext.Provider>
    );
};

export { GMapProvider, GMapContext };
