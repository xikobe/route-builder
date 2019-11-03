import React from 'react';
import Gmap from '../map';
import { GmapProvider } from '../../shared/contexts/GMapContext';
import { MarkersProvider } from '../../shared/contexts/MarkersContext';
import WaypointList from '../waypoint-list';

const App = () => (
    <GmapProvider>
        <Gmap />
        <MarkersProvider>
            <WaypointList />
        </MarkersProvider>
    </GmapProvider>
)

export default App;
