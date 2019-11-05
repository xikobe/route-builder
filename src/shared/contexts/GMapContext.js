import React, { useEffect, createContext } from 'react';
import useScript from '../hooks/useScript';
import useMap from '../hooks/useMap';
import { drawLine, drawMarkers } from '../utils/mapUtils';

const GmapContext = createContext();

const GmapProvider = ({ children }) => {
    const [loaded] = useScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`
    );
    const { waypoints, map, removeWaypoint} = useMap(loaded);

    useEffect(() => {
        map && drawLine(map, waypoints);
        map && drawMarkers(map, waypoints);
    }, [map, waypoints]);

    return (
        <GmapContext.Provider value={ { waypoints, removeWaypoint } }>
          { children }
        </GmapContext.Provider>
    );
};

export { GmapProvider, GmapContext };
