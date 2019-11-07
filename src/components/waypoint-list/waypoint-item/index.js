import React, { memo } from 'react';
import { IconButton, Icon, Box } from '@chakra-ui/core';
import { sortableHandle } from 'react-sortable-hoc';
import { ListItem, CopyWrapper } from './styles';

const DragHandle = sortableHandle(() => <Icon name="drag-handle" />);

export const WaypointItem = ({ children, waypoint, removeWaypoint, title }) => {
    const handleOnDeleteClick = () => {
        removeWaypoint(waypoint);
    };

    return (
        <ListItem>
            <CopyWrapper>
                <Box mr={2}>
                    <DragHandle />
                </Box>
                <p data-test-id="waypoint-title">{title}</p>
            </CopyWrapper>
            <IconButton
                data-test-id="waypoint-remove-btn"
                variantColor="teal"
                onClick={handleOnDeleteClick}
                icon="delete"
            />
        </ListItem>
    );
};

export default memo(WaypointItem);
