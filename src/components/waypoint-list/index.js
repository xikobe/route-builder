import React, { useContext } from 'react';
import { MarkersContext } from '../../shared/contexts/MarkersContext';
import WaypointItem from './WaypointItem';

const WaypointList = () => {
    const { markers } = useContext(MarkersContext);

    return markers.map(marker => <WaypointItem waypoint={ marker } />)
}

export default WaypointList;
