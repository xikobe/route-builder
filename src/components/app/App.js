import React from 'react';
import Gmap from '../map';
import { GmapProvider } from '../../shared/contexts/GMapContext';
import { MarkersProvider } from '../../shared/contexts/MarkersContext';
import WaypointList from '../waypoint-list';
import SaveButton from '../save-button';
import { Wrapper, ListWrapper, MapWrapper } from './styles';

const App = () => (
    <GmapProvider>
        <Wrapper>
            <MarkersProvider>
                <ListWrapper>
                    <WaypointList />
                    <SaveButton />
                </ListWrapper>
            </MarkersProvider>
            <MapWrapper>
                <Gmap />
            </MapWrapper>
        </Wrapper>
    </GmapProvider>
)

export default App;
