import React, { Suspense } from 'react';
import Gmap from '../map';
import { GMapProvider } from '../../shared/contexts/GMapContext';
import MapPainter from '../map-painter';
import { Wrapper, MapWrapper } from './styles';

const LazyWaypointList = React.lazy(() => import('../waypoint-list'));

const App = () => (
    <GMapProvider>
        <MapPainter>
            <Wrapper>
                <Suspense fallback={null}>
                    <LazyWaypointList />
                </Suspense>
                <MapWrapper>
                    <Gmap />
                </MapWrapper>
            </Wrapper>
        </MapPainter>
    </GMapProvider>
);

export default App;
