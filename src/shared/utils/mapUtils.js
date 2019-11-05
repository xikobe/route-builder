export const drawLine = (map, waypoints) => {
    if(map) {
        const line = new window.google.maps.Polyline({
            path: waypoints,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        line.setMap(map);
    }
}
