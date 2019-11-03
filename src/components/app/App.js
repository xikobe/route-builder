import React from 'react';
import Gmap from '../../map';
import { GmapProvider } from '../../shared/contexts/GMapContext';

const App = () => (
    <GmapProvider>
        <Gmap />
    </GmapProvider>
)

export default App;
