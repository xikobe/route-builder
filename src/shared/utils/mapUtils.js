export const drawLine = (map, waypoints) => {
    const line = new window.google.maps.Polyline({
        path: waypoints,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    line.setMap(map);
}

export const drawMarkers = (map, waypoints) => {
    waypoints.forEach((waypoint) => {
        const marker = new window.google.maps.Marker({
            position: waypoint
        });

        marker.setMap(map);
    })
}
