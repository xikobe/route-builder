import React from 'react';
import { shallow } from 'enzyme';
import SaveButton from './index';
import { useGMapContext } from '../../../shared/contexts/GMapContext';
import { parseMarkers } from '../../../shared/utils/parseMarkers';
import api from '../../../shared/api';

jest.mock('../../../shared/utils/parseMarkers');
jest.mock('../../../shared/api');
jest.mock('../../../shared/contexts/GMapContext', () => ({
    ...require.requireActual('../../../shared/contexts/GMapContext'),
    useGMapContext: jest.fn(),
}));

describe('SaveButton', () => {
    it('should call download enpoint on click', () => {
        useGMapContext.mockReturnValue({ markers: [{ id: 'foo' }] });
        parseMarkers.mockReturnValue('foo');

        const wrapper = shallow(<SaveButton />);

        const btn = wrapper.find('[data-test-id="save-route-btn"]');
        btn.simulate('click');

        expect(api.download).toHaveBeenCalledWith('foo');
    });
});
