import createGPX from 'gps-to-gpx';

export const parseMarkers = markers => {
    return markers.map(marker => ({
        latitude: marker.getPosition().lat(),
        longitude: marker.getPosition().lng(),
    }));
};

export const downloadGPXFile = (rawMarkers) => {
    const markers = parseMarkers(rawMarkers);

    const activityName = 'running';
    const startTime = Date.now();

    const markerFile = createGPX(markers, {
      activityName,
      startTime,
    });

    const uriContent = "data:application/gpx+xml," + encodeURIComponent(markerFile);
    const link = document.createElement('a');
    link.href = uriContent;
    link.download = 'route.gpx';
    link.click();
}
