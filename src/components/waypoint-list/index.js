import React from 'react';
import { useGMapContext } from '../../shared/contexts/GMapContext';
import WaypointItem from './waypoint-item';
import SaveButton from './save-button';
import { ListWrapper, List } from './styles';
import { Heading } from "@chakra-ui/core";
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({indexKey, marker, removeWaypoint}) => (
        <WaypointItem
            title={ `waypoint ${indexKey + 1}` }
            removeWaypoint={removeWaypoint}
            waypoint={ marker } />
));

export const SortableList = SortableContainer(({markers, removeWaypoint}) => (
    <List>
        {markers.map((marker, index) => (
            <SortableItem
                key={marker.id}
                index={index}
                indexKey={index}
                marker={marker}
                removeWaypoint={removeWaypoint}/>
        ))}
    </List>
 ));

const WaypointList = () => {
    const { markers, removeWaypoint, reOrderMarkers } = useGMapContext();

    const onSortEnd = ({oldIndex, newIndex}) => {
        reOrderMarkers(markers, {oldIndex, newIndex});
    }

    return (
        <ListWrapper>
            <Heading as="h1" size="md" color="white">
                Create Your route
            </Heading>
            <SortableList onSortEnd={onSortEnd} markers={ markers } removeWaypoint={ removeWaypoint } />
            <SaveButton />
        </ListWrapper>
    );
}

export default WaypointList;
