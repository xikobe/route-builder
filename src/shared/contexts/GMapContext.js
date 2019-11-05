import React, { useEffect, createContext, useState } from 'react';
import useMap from '../hooks/useMap';
import { clearWaypoint, createLine, createMarker } from '../utils/mapUtils';
import { drawMap } from '../utils/mapUtils';

const GmapContext = createContext();

const GmapProvider = ({ children }) => {
    const { map} = useMap();
    const [markers, setMarkers] = useState([]);
    const [line, setLine] = useState(null);

    useEffect(() => {
        map && map.addListener('click', ({ latLng }) => {
            setMarkers((markers) => [...markers, createMarker(latLng)]);
        });
    }, [map])

    useEffect(() => {
        if(map) {
            const newLine = createLine(markers.map((marker => marker.position)))

            drawMap(map, markers, [line, newLine]);

            setLine((line) => newLine);
        }
    }, [map, markers]); //eslint-disable-line

    function removeWaypoint (waypointToRemove) {
        setMarkers((markers) => markers.filter((marker) => marker !== waypointToRemove));
        clearWaypoint(waypointToRemove);
    }

    return (
        <GmapContext.Provider value={ { waypoints: markers, removeWaypoint } }>
          { children }
        </GmapContext.Provider>
    );
};

export { GmapProvider, GmapContext };
