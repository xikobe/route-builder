import React from 'react';
import Gmap from '../map';
import { GMapProvider } from '../../shared/contexts/GMapContext';
import MapPainter from '../map-painter';
import WaypointList from '../waypoint-list';
import { Wrapper, MapWrapper } from './styles';

const App = () => (
    <GMapProvider>
        <MapPainter>
            <Wrapper>
                <WaypointList />
                <MapWrapper>
                    <Gmap />
                </MapWrapper>
            </Wrapper>
        </MapPainter>
    </GMapProvider>
)

export default App;
