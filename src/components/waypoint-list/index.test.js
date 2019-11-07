import React from 'react';
import { shallow } from 'enzyme';
import { useGMapContext } from '../../shared/contexts/GMapContext';
import WaypointList, { SortableList } from './index';

jest.mock('../../shared/contexts/GMapContext', () => ({
    ...require.requireActual('../../shared/contexts/GMapContext'),
    useGMapContext: jest.fn(),
}))

describe('WaypointList', () => {
    it('should render list with correct markers', () => {
        const mockMarkers = ['foo'];
        useGMapContext.mockReturnValue({markers: mockMarkers});
        const wrapper = shallow(<WaypointList />);

        const list = wrapper.find(SortableList);

        expect(list.prop('markers')).toBe(mockMarkers);
    });
});
