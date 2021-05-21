import { render } from '@testing-library/react';
import React from 'react';
import ImageGallery from './ImageGallery';

describe('ImageGallery', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ImageGallery {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ImageGallery')).toBeTruthy();
    });
});
