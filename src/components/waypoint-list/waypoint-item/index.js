import React, { memo } from 'react';
import { ListItem } from './styles';

const WaypointItem = ({ waypoint }) => {
    console.log(waypoint);

    return (
        <ListItem>
            foo
        </ListItem>
    )
}

export default memo(WaypointItem);
