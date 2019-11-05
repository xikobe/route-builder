import React from 'react';
import { shallow } from 'enzyme';
import Map from './index';

describe('Map', () => {
    it('should render dom with correct id', () => {
        const wrapper = shallow(<Map />);

        expect(wrapper.find('[id="map"]').exists()).toBe(true);
    });
});
