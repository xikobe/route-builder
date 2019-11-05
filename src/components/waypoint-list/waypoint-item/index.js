import React, { memo } from 'react';
import { ListItem } from './styles';

const WaypointItem = ({ waypoint, removeWaypoint }) => {
    function handleOnDeleteClick() {
        removeWaypoint(waypoint);
    }

    return (
        <ListItem>
            foo
            <button onClick={ handleOnDeleteClick }>remove</button>
        </ListItem>
    )
}

export default memo(WaypointItem);
