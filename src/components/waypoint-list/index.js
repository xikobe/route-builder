import React from 'react';
import { useGMapContext } from '../../shared/contexts/GMapContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';
import { Heading } from "@chakra-ui/core";

const WaypointList = () => {
    const { markers, removeWaypoint } = useGMapContext();

    return (
        <ListWrapper>
            <Heading as="h1" size="md" color="white">
                Create Your route
            </Heading>
            <List>
                {
                    markers.map((marker, index) =>
                        <WaypointItem title={ `waypoint ${index + 1}` } key={marker.id} removeWaypoint={removeWaypoint} waypoint={ marker } />)
                }
            </List>
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
