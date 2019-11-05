import React from 'react';
import { shallow } from 'enzyme';
import {WaypointItem} from './index';

describe('WaypointItem', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<WaypointItem title="hello" />);

        expect(wrapper.find('[data-test-id="waypoint-title"]').text()).toBe('hello');
    });

    it('should call removeWaypoint with the correct value on click', () => {
        const waypoint = 'foo';
        const mockRemoveWaypoint = jest.fn();
        const wrapper = shallow(
            <WaypointItem title="hello" waypoint={ waypoint } removeWaypoint={mockRemoveWaypoint} />
        );

        const btn = wrapper.find('[data-test-id="waypoint-remove-btn"]');
        btn.simulate('click');

        expect(mockRemoveWaypoint).toHaveBeenCalledWith(waypoint);
    });
});
