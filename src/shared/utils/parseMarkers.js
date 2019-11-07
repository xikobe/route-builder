export const parseMarkers = markers => {
    return markers.map(marker => ({
        latitude: marker.getPosition().lat(),
        longitude: marker.getPosition().lng(),
    }));
};
