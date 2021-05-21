import { render } from '@testing-library/react';
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

describe('ImageGalleryItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ImageGalleryItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ImageGalleryItem')).toBeTruthy();
    });
});
