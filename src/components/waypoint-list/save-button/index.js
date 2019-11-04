import React, { useContext } from 'react';
import { Button } from "@chakra-ui/core";
import { MarkersContext } from '../../../shared/contexts/MarkersContext';
import { parseMarkers } from '../../../shared/utils/createGPX';
import api from '../../../shared/api';

const SaveButton = () => {
    const { markers } = useContext(MarkersContext);

    const saveGPX = () => {
        const parsedMarkers = parseMarkers(markers);

        api.download(parsedMarkers);
    }

    return <Button variantColor="teal" size="lg" width="100%" onClick={ saveGPX }>Save</Button>
}

export default SaveButton;
