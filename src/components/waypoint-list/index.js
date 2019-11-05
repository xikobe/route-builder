import React, { useContext } from 'react';
import { GMapContext } from '../../shared/contexts/GMapContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';

const WaypointList = () => {
    const { markers, removeWaypoint } = useContext(GMapContext);

    return (
        <ListWrapper>
            <List>
                {
                    markers.map(marker =>
                        <WaypointItem removeWaypoint={removeWaypoint} waypoint={ marker } />)
                }
            </List>
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
