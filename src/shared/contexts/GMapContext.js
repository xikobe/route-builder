import React, { useEffect, createContext, useState } from 'react';
import useScript from '../hooks/useScript';

const GmapContext = createContext();

const GmapProvider = ({ children }) => {
    const [map, setMap] = useState(null);

    const [loaded] = useScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`
    );

    useEffect(() => {
      if (loaded) {
        const gmap = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: { lat: 37.77493, lng: -122.41942 }
        });

        setMap(gmap);
      }
    }, [loaded]);

    return (
        <GmapContext.Provider value={ { mapLoaded: loaded, map } }>
          { children }
        </GmapContext.Provider>
    );
};

export { GmapProvider, GmapContext };
