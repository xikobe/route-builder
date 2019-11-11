import React from 'react';
import { Button } from '@chakra-ui/core';
import { SaveButtonWrapper } from './styles';
import { useGMapContext } from '../../../shared/contexts/GMapContext';
import { downloadGPXFile } from '../../../shared/utils/markers';

const SaveButton = () => {
    const { markers } = useGMapContext();

    const saveGPX = () => {
        downloadGPXFile(markers);
    };

    return (
        <SaveButtonWrapper>
            <Button
                disabled={!markers.length}
                data-test-id="save-route-btn"
                variantColor="teal"
                size="lg"
                width="100%"
                onClick={saveGPX}>
                Save
            </Button>
        </SaveButtonWrapper>
    );
};

export default SaveButton;
