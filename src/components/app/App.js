import React from 'react';
import Gmap from '../map';
import { GmapProvider } from '../../shared/contexts/GMapContext';
import WaypointList from '../waypoint-list';
import { Wrapper, MapWrapper } from './styles';

const App = () => (
    <GmapProvider>
        <Wrapper>
            <WaypointList />
            <MapWrapper>
                <Gmap />
            </MapWrapper>
        </Wrapper>
    </GmapProvider>
)

export default App;
