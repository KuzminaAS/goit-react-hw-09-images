import { render } from '@testing-library/react';
import React from 'react';
import Photos from './Photos';

describe('Photos', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Photos {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Photos')).toBeTruthy();
    });
});
