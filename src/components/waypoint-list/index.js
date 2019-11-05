import React, { useContext } from 'react';
import { GmapContext } from '../../shared/contexts/GMapContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';

const WaypointList = () => {
    const { waypoints, removeWaypoint } = useContext(GmapContext);

    return (
        <ListWrapper>
            <List>
                {
                    waypoints.map(waypoint =>
                        <WaypointItem removeWaypoint={removeWaypoint} waypoint={ waypoint } />) 
                }
            </List>
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
