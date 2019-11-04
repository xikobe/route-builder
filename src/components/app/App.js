import React from 'react';
import Gmap from '../map';
import { GmapProvider } from '../../shared/contexts/GMapContext';
import { MarkersProvider } from '../../shared/contexts/MarkersContext';
import WaypointList from '../waypoint-list';
import { Wrapper, MapWrapper } from './styles';

const App = () => (
    <GmapProvider>
        <Wrapper>
            <MarkersProvider>
                <WaypointList />
            </MarkersProvider>
            <MapWrapper>
                <Gmap />
            </MapWrapper>
        </Wrapper>
    </GmapProvider>
)

export default App;
