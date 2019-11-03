import React, { useEffect, createContext } from 'react';
import useScript from '../hooks/useScript';

const GmapContext = createContext();

const GmapProvider = ({ children }) => {
    const [loaded] = useScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`
    );

    useEffect(() => {
      if (loaded) {
        new window.google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: { lat: 37.77493, lng: -122.41942 }
        });
      }
    }, [loaded]);

    return (
        <GmapContext.Provider value={ { mapLoaded: loaded } }>
          { children }
        </GmapContext.Provider>
    );
};

export { GmapProvider, GmapContext };
