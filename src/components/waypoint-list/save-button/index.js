import React, { useContext } from 'react';
import { Button } from "@chakra-ui/core";
import { GMapContext } from '../../../shared/contexts/GMapContext';
import { parseMarkers } from '../../../shared/utils/createGPX';
import api from '../../../shared/api';

const SaveButton = () => {
    const { waypoints } = useContext(GMapContext);

    const saveGPX = () => {
        const parsedMarkers = parseMarkers(waypoints);

        api.download(parsedMarkers);
    }

    return <Button variantColor="teal" size="lg" width="100%" onClick={ saveGPX }>Save</Button>
}

export default SaveButton;
