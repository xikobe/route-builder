import React, { useContext } from 'react';
import { MarkersContext } from '../../shared/contexts/MarkersContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';

const WaypointList = () => {
    const { markers } = useContext(MarkersContext);

    return (
        <ListWrapper>
            <List>
                { markers.map(marker => <WaypointItem waypoint={ marker } />) }
            </List>
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
