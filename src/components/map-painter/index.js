import { useContext, useEffect, useState } from 'react';
import { GMapContext } from '../../shared/contexts/GMapContext'
import { drawMarkers, drawLine, createLine } from '../../shared/utils/mapUtils';
import usePrev from '../../shared/hooks/usePrev';

const MapPainter = ({ children }) => {
    const { map, markers } = useContext(GMapContext);
    const [line, setLine] = useState(null);
    const prevLine = usePrev(line);

    useEffect(() => {
        if(map) {
            drawMarkers(map, markers);
            setLine((line) => createLine(markers.map(marker => marker.position)));
        };
    }, [map, markers]);

    useEffect(() => {
        if(map && line) {
            drawLine(map, [prevLine, line]);
        }
    }, [line, map, prevLine]);

    return children;
}

export default MapPainter;
