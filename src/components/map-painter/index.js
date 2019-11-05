import { useEffect, useState } from 'react';
import { drawMarkers, drawLine, createLine } from '../../shared/utils/mapUtils';
import usePrev from '../../shared/hooks/usePrev';
import { useGMapContext } from '../../shared/contexts/GMapContext';

const MapPainter = ({ children }) => {
    const { map, markers } = useGMapContext();
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
