import React, { useContext } from 'react';
import { GmapContext } from '../../shared/contexts/GMapContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';

const WaypointList = () => {
    const { waypoints } = useContext(GmapContext);

    return (
        <ListWrapper>
            <List>
                { waypoints.map(waypoint => <WaypointItem waypoint={ waypoint } />) }
            </List>
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
