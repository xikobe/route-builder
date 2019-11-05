import React from 'react';
import { shallow } from 'enzyme';
import { useGMapContext } from '../../shared/contexts/GMapContext';
import WaypointList from './index';
import WaypointItem from './waypoint-item';

jest.mock('../../shared/contexts/GMapContext', () => ({
    ...require.requireActual('../../shared/contexts/GMapContext'),
    useGMapContext: jest.fn(),
}))

describe('WaypointList', () => {
    it('should not render WaypointItem if markers is empty', () => {
        useGMapContext.mockReturnValue({markers: []});
        const wrapper = shallow(<WaypointList />);

        expect(wrapper.find(WaypointItem).exists()).toBe(false);
    });

    it('should render WaypointItem with correct prop', () => {
        useGMapContext.mockReturnValue({markers: ['foo']});
        const wrapper = shallow(<WaypointList />);

        expect(wrapper.find(WaypointItem).exists()).toBe(true);
        expect(wrapper.find(WaypointItem).prop('title')).toBe('waypoint 1');
    });
});
