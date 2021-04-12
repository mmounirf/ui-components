import React from 'react';
import { render } from '@testing-library/react';
import { BasicCustomCursor } from './custom-cursor.composition';

describe('custom-cursor', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCustomCursor />);
    const rendered = getByText('hello from CustomCursor');
    expect(rendered).toBeTruthy();
  });
});
