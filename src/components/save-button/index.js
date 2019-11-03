import React, { useContext } from 'react';
import { MarkersContext } from '../../shared/contexts/MarkersContext';
import { parseMarkers } from '../../shared/utils/createGPX';
import api from '../../shared/api';

const SaveButton = () => {
    const { markers } = useContext(MarkersContext);

    const saveGPX = () => {
        const parsedMarkers = parseMarkers(markers);

        api.download(parsedMarkers);
    }

    return <button onClick={ saveGPX }>Save</button>
}

export default SaveButton;
