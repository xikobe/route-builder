import React from 'react';
import MapPainter from './index';
import { drawMarkers, drawLine } from '../../shared/utils/map';
import { render } from '@testing-library/react';

const mockMap = 'map';
const mockMarker = { position: 'bar' };
const mockLine = 'line';
const mockGMapContext = { map: mockMap, markers: [mockMarker] };

jest.mock('../../shared/contexts/GMapContext', () => ({
    ...require.requireActual('../../shared/contexts/GMapContext'),
    useGMapContext: () => mockGMapContext,
}));

jest.mock('../../shared/utils/map', () => ({
    ...require.requireActual('../../shared/utils/map'),
    drawLine: jest.fn(),
    drawMarkers: jest.fn(),
    createLine: () => mockLine,
}));

describe('MapPainter', () => {
    it('should call drawMarkers and drawLine with the correct values', () => {
        render(<MapPainter children="foo" />);

        expect(drawMarkers).toHaveBeenCalledWith(mockMap, mockGMapContext.markers);
        expect(drawLine).toHaveBeenCalledWith(mockMap, [null, mockLine]);
    });
});
