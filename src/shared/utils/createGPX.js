export const parseMarkers = (markers) => {
    return markers.map((marker) => {
        return {
            latitude: marker.getPosition().lat(),
            longitude: marker.getPosition().lng(),
        }
    });
}
