import uniqid from 'uniqid';

export const createLine = (coords) => {
    return new window.google.maps.Polyline({
        path: coords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
};

export const createMarker = (position) => (
    new window.google.maps.Marker({
        position,
        id: uniqid(),
    })
)

export const drawLine = (map, line) => {
    line.setMap(map);
}

export const drawMarkers = (map, waypoints) => {
    waypoints.forEach((waypoint) => {
        waypoint.setMap(map);
    })
}

export const drawMap = (map, waypoints, [lineToRemove, lineToDraw]) => {
    lineToRemove && clearLine(lineToRemove);
    drawLine(map, lineToDraw);
    drawMarkers(map, waypoints);
}

export const createMap = () => {
    return new window.google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 37.77493, lng: -122.41942 }
    });
}

export const clearWaypoint = (waypointToRemove) => {
    waypointToRemove.setMap(null);
};

export const clearLine = (lineToRemove) => {
    lineToRemove.setMap(null);
}
