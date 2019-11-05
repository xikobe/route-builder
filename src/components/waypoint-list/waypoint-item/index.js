import React, { memo } from 'react';
import { ListItem } from './styles';
import { IconButton } from "@chakra-ui/core";

export const WaypointItem = ({ waypoint, removeWaypoint, title }) => {
    const handleOnDeleteClick = () => {
        removeWaypoint(waypoint);
    }

    return (
        <ListItem>
            <p data-test-id="waypoint-title">{ title }</p>
            <IconButton
                data-test-id="waypoint-remove-btn"
                variantColor="teal"
                onClick={ handleOnDeleteClick }
                icon="delete" />
        </ListItem>
    )
}

export default memo(WaypointItem);
